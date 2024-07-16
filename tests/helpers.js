import { shallowMount } from '@vue/test-utils'
import { createApp } from 'vue'
import VueSelect from '../src/components/Select.vue'

/**
 * Trigger a submit event on the search
 * input with a provided search text.
 *
 * @param {import('@vue/test-utils').VueWrapper} Wrapper
 * @param searchText
 */
export const searchSubmit = async (Wrapper, searchText = false) => {
  const search = Wrapper.get('input')
  await search.trigger('focus')

  if (searchText) {
    Wrapper.vm.search = searchText
    await Wrapper.vm.$nextTick()
  }

  await search.trigger('keydown.enter')
  await Wrapper.vm.$nextTick()
}

/**
 * Focus the input, enter some search text, hit return.
 * @param {import('@vue/test-utils').VueWrapper} Wrapper
 * @param searchText
 * @return {Promise<void>}
 */
export const selectTag = async (Wrapper, searchText) => {
  Wrapper.vm.$refs.search.focus()
  await Wrapper.vm.$nextTick()

  Wrapper.vm.search = searchText
  await Wrapper.vm.$nextTick()

  Wrapper.get('input').trigger('keydown.enter')
  await Wrapper.vm.$nextTick()
}

/**
 * Create a new VueSelect instance with
 * a provided set of props.
 * @param props
 * @returns {import('@vue/test-utils').VueWrapper}
 */
export const selectWithProps = (props = {}) => {
  return shallowMount(VueSelect, { props })
}

/**
 * Returns a Wrapper with a v-select component.
 * @param props
 * @param options
 * @return {import('@vue/test-utils').VueWrapper}
 */
export const mountDefault = (props = {}, options = {}) => {
  return shallowMount(VueSelect, {
    props: {
      options: ['one', 'two', 'three'],
      ...props,
    },
    ...options,
  })
}

/**
 * Returns a v-select component directly.
 * @param props
 * @param options
 * @return {Vue | Element | Vue[] | Element[]}
 */
export const mountWithoutTestUtils = (props = {}, options = {}) => {
  return createApp({
    render: (createEl) =>
      createEl('vue-select', {
        ref: 'select',
        props: { options: ['one', 'two', 'three'], ...props },
        ...options,
      }),
      components: { VueSelect },
  }).mount().$refs.select
}
