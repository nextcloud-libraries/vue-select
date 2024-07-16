import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { selectWithProps } from '../helpers.js'

import VueSelect from '../../src/components/Select.vue'

describe('Labels', () => {
	it('can generate labels using a custom label key', () => {
		const Select = selectWithProps({
			options: [{ name: 'Foo' }],
			label: 'name',
			modelValue: { name: 'Foo' },
		})
		expect(Select.find('.vs__selected').text()).toBe('Foo')
	})

	it('will console.warn when options contain objects without a valid label key', async () => {
		const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})
		const Select = selectWithProps({
			options: [{}],
		})

		Select.vm.open = true
		await nextTick()

		expect(spy).toHaveBeenCalledWith(
			'[vue-select warn]: Label key "option.label" does not exist in options object {}.' +
				'\nhttps://vue-select.org/api/props.html#getoptionlabel',
		)
	})

	it('should display a placeholder if the value is empty', () => {
		const Select = shallowMount(VueSelect, {
			props: {
				options: ['one'],
			},
			attrs: {
				placeholder: 'foo',
			},
		})

		expect(Select.vm.searchPlaceholder).toEqual('foo')
		Select.vm.$data._value = 'one'
		expect(Select.vm.searchPlaceholder).not.toBeDefined()
	})

	describe('getOptionLabel', () => {
		it('will return undefined if the option lacks the label key', () => {
			const getOptionLabel = VueSelect.props.getOptionLabel.default.bind({
				label: 'label',
			})
			expect(getOptionLabel({ name: 'vue' })).toEqual(undefined)
		})

		it('will return a string value for a valid key', () => {
			const getOptionLabel = VueSelect.props.getOptionLabel.default.bind({
				label: 'label',
			})
			expect(getOptionLabel({ label: 'vue' })).toEqual('vue')
		})

		it('will not call getOptionLabel if both scoped option slots are used and a filter is provided', async () => {
			const spy = vi.spyOn(VueSelect.props.getOptionLabel, 'default')
			const Select = mount(VueSelect, {
				props: {
					options: [{ name: 'one' }],
					filter: () => {},
				},
				slots: {
					option: '<span class="option">{{ params.name }}</span>',
					'selected-option':
						'<span class="selected">{{ params.name }}</span>',
				},
			})

			Select.vm.select({ name: 'one' })
			await nextTick()

			expect(spy).toHaveBeenCalledTimes(0)
			expect(Select.find('.selected').exists()).toBeTruthy()
		})
	})
})
