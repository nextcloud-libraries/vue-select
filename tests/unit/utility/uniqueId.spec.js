import { expect, test } from 'vitest'
import uniqueId from '../../../src/utility/uniqueId.js'

test('it generates a unique number', () => {
	expect(uniqueId()).not.toEqual(uniqueId())
})
