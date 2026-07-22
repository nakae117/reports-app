import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { defineComponent, h } from 'vue'

import Notify from '../misc/Notify.vue'
import { useNotifyStore } from '@/stores/notify'

const VSnackbar = defineComponent({
  name: 'VSnackbar',
  props: ['modelValue', 'color', 'location'],
  emits: ['update:modelValue'],
  setup(_, { slots, attrs }) {
    return () => h('div', { ...attrs }, [
      slots.default?.(),
      slots.actions?.(),
    ])
  },
})

const VBtn = defineComponent({
  name: 'VBtn',
  props: ['color', 'variant'],
  setup(_, { slots, attrs }) {
    return () => h('button', { ...attrs }, slots.default?.())
  },
})

const VIcon = defineComponent({
  name: 'VIcon',
  props: ['icon'],
  setup(_, { slots }) {
    return () => h('span', slots.default?.())
  },
})

describe('Notify.vue', () => {
  let pinia
  let notifyStore

  beforeEach(() => {
    pinia = createPinia()
    notifyStore = useNotifyStore(pinia)
    notifyStore.notify.show = false
    notifyStore.notify.text = ''
  })

  it('renders the notification text when the store show flag is true', async () => {
    notifyStore.showNotify('Hello from Notify')

    const wrapper = mount(Notify, {
      global: {
        plugins: [pinia],
        components: {
          'v-snackbar': VSnackbar,
          'v-btn': VBtn,
          'v-icon': VIcon,
        },
      },
    })

    expect(wrapper.text()).toContain('Hello from Notify')
    const snackbar = wrapper.findComponent(VSnackbar)
    expect(snackbar.exists()).toBe(true)
    expect(snackbar.props('modelValue')).toBe(true)
  })

  it('closes the notification when the close button is clicked', async () => {
    notifyStore.showNotify('Dismiss this message')

    const wrapper = mount(Notify, {
      global: {
        plugins: [pinia],
        components: {
          'v-snackbar': VSnackbar,
          'v-btn': VBtn,
          'v-icon': VIcon,
        },
      },
    })

    expect(notifyStore.notify.show).toBe(true)

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(notifyStore.notify.show).toBe(false)
    expect(wrapper.findComponent(VSnackbar).props('modelValue')).toBe(false)
  })
})
