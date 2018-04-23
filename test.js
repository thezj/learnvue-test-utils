// Import the mount() method from the test utils
// and the component you want to test
import {
  mount
} from '@vue/test-utils'
import Counter from './counter'

describe('计数器', () => {

  let wrapper = mount(Counter)

  it('正确渲染的标记', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  it('是一个按钮', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('按下按钮count增加', () => {
    wrapper.vm.count = 999
    console.log(wrapper.find('span').element.textContent,'<<<<<<<<<<<<<')
    let oldvalue = wrapper.vm.count
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(oldvalue + 1)
  })

})


describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})