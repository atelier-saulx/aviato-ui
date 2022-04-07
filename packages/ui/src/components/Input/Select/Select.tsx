import React, { FC, useEffect } from 'react'
import { useSelect } from '~/hooks/useSelect'
import { Value, Option } from '~/components/Overlay'
import { IconChevronDown } from '~/components/Icons'
import { Text } from '~/components/Text'
import { Color, StitchedCSS } from '~/theme'
import { PositionProps } from '~/types'
import { StyledSelect } from './StyledSelect'

export type SelectProps = {
  value?: Value
  options: (Option | Value)[]
  onChange: (value: Value) => void
  color?: Color
  filterable?: boolean | 'create'
  placeholder?: string
  overlay?: PositionProps
  label?: string
  css?: StitchedCSS
}

export const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  css,
  filterable,
  color = '$TextPrimary',
  placeholder = 'Select an option',
  overlay,
  label,
}) => {
  const [currentValue, open] = useSelect(options, value, {
    variant: 'over',
    filterable,
    placement: 'left',
    width: 'target',
    ...overlay,
  })
  useEffect(() => {
    if (currentValue !== value) {
      onChange(currentValue)
    }
  }, [currentValue])

  if (label) {
    return (
      <StyledSelect onClick={open} css={css}>
        <Text color={!currentValue ? 'Secondary' : 'Primary'}>
          {currentValue || placeholder}
        </Text>
        <IconChevronDown color={color} />
      </StyledSelect>
    )
  }

  return (
    <StyledSelect onClick={open} css={css}>
      <Text color={!currentValue ? 'Secondary' : 'Primary'}>
        {currentValue || placeholder}
      </Text>
      <IconChevronDown color={color} />
    </StyledSelect>
  )
}
