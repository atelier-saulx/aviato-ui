/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FunctionComponent, useCallback } from 'react'
import { noop } from '@aviato/utils'

import { onChange } from '~/types'
import { SelectItem } from './types'
import { Popper } from '~/components/Utilities'
import { getZIndex } from '~/theme'
import { ContextMenu, ContextItem } from '~/components/Overlay'

export interface OnDropdownChange extends onChange {
  value: string | SelectItem
}

export interface DropdownMenuProps {
  items: SelectItem[]
  referenceElement?: HTMLElement
  mounted: boolean
  zIndex?: number
  uuid: string
  onChange?: (value: string, payload: OnDropdownChange) => void
}

export const Dropdown: FunctionComponent<DropdownMenuProps> = (properties) => {
  const {
    items,
    onChange = noop,
    referenceElement,
    mounted,
    uuid,
    zIndex = getZIndex('Popover'),
  } = properties

  const handleSelect = useCallback((event, { value, index }) => {
    onChange(value, { event, value, index })
  }, [])

  const MenuItems = items.map(({ value, label, disabled }, index) => (
    <ContextItem key={`DropdownItem-${value}-${index}`}>{label}</ContextItem>
  ))

  return (
    <Popper
      referenceElement={referenceElement}
      mounted={mounted}
      position="bottom"
      placement="center"
      withinPortal={false}
      zIndex={zIndex}
      modifiers={[
        {
          name: 'preventOverflow',
          enabled: false,
        },
        {
          // @ts-ignore
          name: 'sameWidth',
          enabled: true,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`
          },
        },
      ]}
    >
      <ContextMenu id={`${uuid}-items`}>{MenuItems}</ContextMenu>
    </Popper>
  )
}
