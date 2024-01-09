import { mountDefault } from '../helpers'

describe('Search Slot Scope', () => {
  /**
   * @see https://www.w3.org/WAI/PF/aria/states_and_properties#aria-activedescendant
   */
  describe('aria-activedescendant', () => {
    it('adds the active descendant attribute only when the dropdown is open and there is a typeAheadPointer value', async () => {
      const Select = mountDefault()

      expect(
        Select.vm.scope.search.attributes['aria-activedescendant']
      ).toEqual(undefined)

      Select.vm.open = true
      await Select.vm.$nextTick()

      expect(
        Select.vm.scope.search.attributes['aria-activedescendant']
      ).toEqual(undefined)
    })

    it("adds the active descendant attribute when there's a typeahead value and an open dropdown", async () => {
      const Select = mountDefault({ value: 'three' }, ['one', 'two', 'three'])

      Select.vm.open = true
      Select.vm.typeAheadPointer = 1
      await Select.vm.$nextTick()

      expect(
        Select.vm.scope.search.attributes['aria-activedescendant']
      ).toEqual(`vs${Select.vm.uid}__option-2`)
    })
  })

  describe('aria-expanded', () => {
    it('expanded attribute should reflect dropdown open state', async () => {
      const Select = mountDefault()
      const input = Select.findComponent({ ref: 'search' })

      expect(Select.vm.open).toEqual(false)
      expect(input.attributes('aria-expanded')).toEqual('false')

      Select.vm.open = true
      await Select.vm.$nextTick()
      expect(Select.vm.open).toEqual(true)
      expect(input.attributes('aria-expanded')).toEqual('true')
    })
  })
})

describe('UID', () => {
  it('works with strings', () => {
    const Select = mountDefault({ uid: 'hello' })
    expect(Select.find('#v-select-hello').exists()).toBeTruthy()
  })

  it('works with numbers', () => {
    const Select = mountDefault({ uid: 2 })
    expect(Select.find('#v-select-2').exists()).toBeTruthy()
  })
})

describe('Selected Options Wrapper', () => {
  it('toggle with mouse', () => {
    const Select = mountDefault()
    Select.findComponent({ ref: 'selectedOptions' }).trigger('mousedown')
    expect(Select.vm.open).toEqual(true)
    Select.findComponent({ ref: 'selectedOptions' }).trigger('mousedown')
    expect(Select.vm.open).toEqual(false)
  })
})

describe('Open Indicator', () => {
  it('hidden from keyboard navigation', () => {
    const Select = mountDefault()
    expect(
      Select.findComponent({ ref: 'openIndicatorButton' }).attributes(
        'tabindex'
      )
    ).toEqual('-1')
  })

  it('toggle with mouse', () => {
    const Select = mountDefault()
    Select.findComponent({ ref: 'openIndicatorButton' }).trigger('mousedown')
    expect(Select.vm.open).toEqual(true)
    Select.findComponent({ ref: 'openIndicatorButton' }).trigger('mousedown')
    expect(Select.vm.open).toEqual(false)
  })
})

describe('Option List', () => {
  it('multiselectable attribute should not be present by default', async () => {
    const Select = mountDefault()

    Select.vm.open = true
    await Select.vm.$nextTick()

    expect(
      Select.findComponent({ ref: 'dropdownMenu' }).attributes()[
        'aria-multiselectable'
      ]
    ).toEqual(undefined)
  })

  it('multiselectable attribute should be true when multiple is true', async () => {
    const Select = mountDefault({ multiple: true })

    Select.vm.open = true
    await Select.vm.$nextTick()

    expect(
      Select.findComponent({ ref: 'dropdownMenu' }).attributes()[
        'aria-multiselectable'
      ]
    ).toEqual('true')
  })

  it('selected attribute should be true if selected, false otherwise', async () => {
    const Select = mountDefault({
      value: 'two',
    })

    Select.vm.open = true
    await Select.vm.$nextTick()

    expect(
      Select.findAll('.vs__dropdown-option').wrappers.map(
        (option) => option.attributes()['aria-selected']
      )
    ).toStrictEqual(['false', 'true', 'false'])
  })

  it('selected attribute should be true on all selected options when multiple is true, false otherwise', async () => {
    const Select = mountDefault({
      multiple: true,
      value: ['one', 'two'],
    })

    Select.vm.open = true
    await Select.vm.$nextTick()

    expect(
      Select.findAll('.vs__dropdown-option').wrappers.map(
        (option) => option.attributes()['aria-selected']
      )
    ).toStrictEqual(['true', 'true', 'false'])
  })
})
