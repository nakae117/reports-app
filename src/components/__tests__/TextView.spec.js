import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TextView from '../misc/TextView.vue'

describe('TextView.vue', () => {
  it('renders title and provided text and does not have grey class when text present', () => {
    const wrapper = mount(TextView, {
      props: { title: 'Label', text: 'Hello world', defaultText: 'Default' },
    })

    const b = wrapper.find('b')
    const span = wrapper.find('span')

    expect(b.exists()).toBe(true)
    expect(b.text()).toBe('Label:')

    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('Hello world')
    expect(span.classes()).not.toContain('text-grey')
  })

  it('renders defaultText and applies text-grey when text is empty or whitespace', async () => {
    const wrapper = mount(TextView, {
      props: { title: 'Label', text: '', defaultText: 'Default text' },
    })

    let span = wrapper.find('span')
    expect(span.text()).toBe('Default text')
    expect(span.classes()).toContain('text-grey')

    await wrapper.setProps({ text: '   ' })
    // re-query after prop update
    span = wrapper.find('span')
    expect(span.text()).toBe('Default text')
    expect(span.classes()).toContain('text-grey')
  })

  it('updates displayed text and classes when props change', async () => {
    const wrapper = mount(TextView, {
      props: { title: 'Label', text: 'First', defaultText: 'Default' },
    })

    expect(wrapper.find('span').text()).toBe('First')
    expect(wrapper.find('span').classes()).not.toContain('text-grey')

    await wrapper.setProps({ text: '' })
    expect(wrapper.find('span').text()).toBe('Default')
    expect(wrapper.find('span').classes()).toContain('text-grey')

    await wrapper.setProps({ text: 'Now non-empty' })
    expect(wrapper.find('span').text()).toBe('Now non-empty')
    expect(wrapper.find('span').classes()).not.toContain('text-grey')
  })
})
