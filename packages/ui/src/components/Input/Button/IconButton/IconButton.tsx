import React, { FunctionComponent, MouseEventHandler, useCallback } from 'react'
import { classNames, styled } from '~/theme'
import { noop } from '@aviato/utils'
import {
  ButtonMode,
  ButtonStyles,
  ButtonType,
} from '~/components/Input/Button/Button'
import { IconName, getIconFromString } from '~/icons'

const BUTTON_TAG = 'button'

const StyledButton = styled(BUTTON_TAG, ButtonStyles)

const StyledIconButton = styled(StyledButton, {
  padding: '8px 8px',
})

export interface IconButtonProps {
  type?: ButtonType
  mode?: ButtonMode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: IconName
}

export const IconButton: FunctionComponent<IconButtonProps> = (properties) => {
  const {
    type = 'primary',
    mode = 'filled',
    disabled = false,
    onClick = noop,
    icon = 'IconPlus',
    ...remainingProps
  } = properties

  const handleClick = useCallback(() => {
    if (disabled) {
      return noop()
    }

    onClick()
  }, [])

  const isFilled = mode === 'filled'
  const isOutlined = mode === 'outlined'
  const isTransparent = mode === 'transparent'

  const classes = classNames({
    isFilled,
    isOutlined,
    isTransparent,
  })

  const TargetIcon = getIconFromString(icon)

  return (
    <StyledIconButton
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={classes}
      {...remainingProps}
    >
      <TargetIcon width={16} height={16} />
    </StyledIconButton>
  )
}