import React, { ElementRef, useCallback, useEffect, useState } from 'react'
import { ComponentProps } from '@stitches/react'
import { noop } from '@aviato/utils'
import { styled } from '~/theme'
import { DefaultChangePayload } from '~/types/events'
import { Group } from '~/components/Layout'
import { Text } from '~/components/Text'
import { InputWrapper } from '~/components/Input/InputWrapper'

export type SwitchSize = 'normal' | 'large'

interface SwitchStyles {
  switch: {
    width: number
    height: number
  }
  knob: {
    size: number
  }
  offset: {
    value: number
  }
}

const SwitchSizeMap: {
  [key in SwitchSize]: SwitchStyles
} = {
  normal: {
    switch: {
      width: 32,
      height: 20,
    },
    knob: {
      size: 16,
    },
    offset: {
      value: 2,
    },
  },

  large: {
    switch: {
      width: 32 * 1.3,
      height: 20 * 1.3,
    },
    knob: {
      size: 16 * 1.3,
    },
    offset: {
      value: 2 * 1.3,
    },
  },
}

const normalSize = SwitchSizeMap.normal
const largeSize = SwitchSizeMap.large

const StyledSwitch = styled('input', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1px solid $OtherOutline',
  backgroundColor: '$OtherInputBorderDefault',

  '&:hover': {
    '&:not([disabled])': {
      backgroundColor: '$PrimaryLightHover',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::before': {
    content: `''`,
    display: 'block',
    backgroundColor: '#FFF',
  },

  '&:checked': {
    backgroundColor: '$PrimaryMain',

    '&:hover': {
      '&:not([disabled])': {
        backgroundColor: '$PrimaryMainHover',
      },
    },
  },

  variants: {
    size: {
      normal: {
        width: normalSize.switch.width,
        height: normalSize.switch.height,
        borderRadius: normalSize.switch.height / 2,

        '&::before': {
          width: normalSize.knob.size,
          height: normalSize.knob.size,
          borderRadius: normalSize.knob.size / 2,
          transform: `translateX(${normalSize.offset.value}px)`,
        },

        '&:checked': {
          '&::before': {
            transform: `translateX(${
              normalSize.knob.size - normalSize.offset.value
            }px)`,
          },
        },
      },

      large: {
        width: largeSize.switch.width,
        height: largeSize.switch.height,
        borderRadius: largeSize.switch.height / 2,

        '&::before': {
          width: largeSize.knob.size,
          height: largeSize.knob.size,
          borderRadius: largeSize.knob.size / 2,
          transform: `translateX(${largeSize.offset.value}px)`,
        },

        '&:checked': {
          '&::before': {
            transform: `translateX(${
              largeSize.knob.size - largeSize.offset.value
            }px)`,
          },
        },
      },
    },
  },
})

export interface OnSwitchChangePayload extends DefaultChangePayload<Event> {
  isChecked: boolean
}

export interface SwitchProps {
  size?: SwitchSize
  checked?: boolean
  disabled?: boolean
  text?: string
  label?: string
  description?: string
  error?: string
  onChange?: (payload: OnSwitchChangePayload) => void
}

type StitchedProps = ComponentProps<typeof StyledSwitch>
type ForwardProps = Omit<StitchedProps, 'onChange'> & SwitchProps

export const Switch = React.forwardRef<
  ElementRef<typeof StyledSwitch>,
  ForwardProps
>((properties, forwardedRef) => {
  const {
    size = 'normal',
    checked = false,
    disabled = false,
    onChange = noop,
    text,
    label,
    description,
    error,
    ...remainingProps
  } = properties

  const [isDisabled, setIsDisbled] = useState(disabled)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsDisbled(disabled)
    setIsChecked(checked)
  }, [checked, disabled])

  const handleChange = useCallback(
    (event) => {
      if (isDisabled) {
        return noop()
      }

      const isSwitchChecked = !isChecked
      setIsChecked(isSwitchChecked)

      onChange({
        isChecked: isSwitchChecked,
        isDisabled,
        event,
      })
    },
    [isChecked]
  )

  return (
    <InputWrapper label={label} description={description} error={error}>
      <Group>
        <StyledSwitch
          type="checkbox"
          size={size}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          ref={forwardedRef}
          {...remainingProps}
        />

        <Text onClick={handleChange}>{text}</Text>
      </Group>
    </InputWrapper>
  )
})
