import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { selectWithProps } from '../helpers.js'

describe('Components API', () => {
	it('swap the Deselect component', () => {
		const Deselect = defineComponent('Deselect', {
			render() {
				return h('button', 'remove')
			},
		})

		const Select = selectWithProps({ components: { Deselect } })

		expect(Select.find(Deselect)).toBeTruthy()
	})

	it('swap the OpenIndicator component', () => {
		const OpenIndicator = defineComponent('OpenIndicator', {
			render() {
				return h('i', '^')
			},
		})

		const Select = selectWithProps({ components: { OpenIndicator } })

		expect(Select.find(OpenIndicator)).toBeTruthy()
	})
})
