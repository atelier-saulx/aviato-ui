import React, {
  forwardRef,
  ReactElement,
  ElementRef,
  cloneElement,
  ReactChildren,
  ReactNode,
} from 'react'
import { isText } from '@aviato/utils'
import { classNames, styled, StitchedCSS } from '~/theme'
import { Text } from '~/components/Text'
import { PropsEventHandler } from '~/components/BasedUI/types'

const PrimaryCSS: StitchedCSS = {
  '&.isMain': {
    color: '$PrimaryMainContrast',
    background: '$PrimaryMain',

    '&:hover': {
      background: '$PrimaryMainHover',
    },
    '&:active, &:focus': {
      background: '$PrimaryMainSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isLight': {
    color: '$PrimaryLightContrast',
    background: '$PrimaryLight',

    '&:hover': {
      background: '$PrimaryLightHover',
    },
    '&:active, &:focus': {
      background: '$PrimaryLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isGhost': {
    color: '$PrimaryLightContrast',
    background: 'none',

    '&:hover': {
      background: '$PrimaryLightHover',
    },
    '&:active, &:focus': {
      background: '$PrimaryLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isOutline': {
    color: '$PrimaryLightContrast',
    background: 'none',
    outline: '1px solid $PrimaryMainOutline',

    '&:hover': {
      background: '$PrimaryLightHover',
    },
    '&:active, &:focus': {
      background: '$PrimaryLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isOutlineLight': {
    color: '$PrimaryLightContrast',
    background: 'none',
    outline: '1px solid $PrimaryLightOutline',

    '&:hover': {
      background: '$PrimaryLightHover',
    },
    '&:active, &:focus': {
      background: '$PrimaryLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },
}

const ActionCSS: StitchedCSS = {
  '&.isMain': {
    color: '$ActionMainContrast',
    background: '$ActionMain',

    '&:hover': {
      background: '$ActionMainHover',
    },
    '&:active, &:focus': {
      background: '$ActionMainSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isLight': {
    color: '$ActionLightContrast',
    background: '$ActionLight',

    '&:hover': {
      background: '$ActionLightHover',
    },
    '&:active, &:focus': {
      background: '$ActionLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isGhost': {
    color: '$ActionLightContrast',
    background: 'none',

    '&:hover': {
      background: '$ActionLightHover',
    },
    '&:active, &:focus': {
      background: '$ActionLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isOutline': {
    color: '$ActionLightContrast',
    background: 'none',
    outline: '1px solid $ActionMainOutline',

    '&:hover': {
      background: '$ActionLightHover',
    },
    '&:active, &:focus': {
      background: '$ActionLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isOutlineLight': {
    color: '$ActionLightContrast',
    background: 'none',
    outline: '1px solid $ActionLightOutline',

    '&:hover': {
      background: '$ActionLightHover',
    },
    '&:active, &:focus': {
      background: '$ActionLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },
}

const ErrorCSS: StitchedCSS = {
  '&.isMain': {
    color: '$ErrorMainContrast',
    background: '$ErrorMain',

    '&:hover': {
      background: '$ErrorMainHover',
    },
    '&:active, &:focus': {
      background: '$ErrorMainSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isLight': {
    color: '$ErrorLightContrast',
    background: '$ErrorLight',

    '&:hover': {
      background: '$ErrorLightHover',
    },
    '&:active, &:focus': {
      background: '$ErrorLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isGhost': {
    color: '$ErrorLightContrast',
    background: 'none',

    '&:hover': {
      background: '$ErrorLightHover',
    },
    '&:active, &:focus': {
      background: '$ErrorLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isOutline': {
    color: '$ErrorLightContrast',
    background: 'none',
    outline: '1px solid $ErrorMainOutline',

    '&:hover': {
      background: '$ErrorLightHover',
    },
    '&:active, &:focus': {
      background: '$ErrorLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },

  '&.isOutlineLight': {
    color: '$ErrorLightContrast',
    background: 'none',
    outline: '1px solid $ErrorLightOutline',

    '&:hover': {
      background: '$ErrorLightHover',
    },
    '&:active, &:focus': {
      background: '$ErrorLightSelected',
    },

    '&:disabled': {
      color: '$OtherDisabledContent',
      background: '$OtherDisabledBackground',
      outline: '1px solid $OtherDisabledBackground',
    },
  },
}

const IconContainer = styled('span', {
  display: 'inline-flex',
  alignSelf: 'center',
  flexShrink: 0,

  variants: {
    type: {
      start: {
        marginRight: 10,
      },
      end: {
        marginLeft: 10,
      },
    },
  },
})

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      primary: PrimaryCSS,
      action: ActionCSS,
      error: ErrorCSS,
    },
  },
})

export const buttonVariants = [
  'main',
  'light',
  'ghost',
  'outline',
  'outline-light',
] as const

export type ButtonVariant = typeof buttonVariants[number]

export const buttonColors = ['primary', 'action', 'error'] as const

export type ButtonColor = typeof buttonColors[number]

export type ButtonProps = {
  variant?: ButtonVariant
  color?: ButtonColor
  disabled?: boolean
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  css?: StitchedCSS
  // for async (potentialy)
  onClick?: PropsEventHandler<HTMLElement, MouseEvent>
  children?: ReactChildren | string | ReactNode
}

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  (props, forwardedRef) => {
    const {
      color = 'primary',
      variant = 'main',
      disabled = false,
      leftIcon = null,
      rightIcon = null,
      children,
      css,
      onClick,
    } = props

    const isMain = variant === 'main'
    const isLight = variant === 'light'
    const isGhost = variant === 'ghost'
    const isOutline = variant === 'outline'
    const isOutlineLight = variant === 'outline-light'

    const classes = classNames({
      isMain,
      isLight,
      isGhost,
      isOutline,
      isOutlineLight,
    })

    const ChildVariant = isText(children) ? (
      <Text weight="medium" color="inherit" css={{ lineHeight: '24px' }}>
        {children}
      </Text>
    ) : (
      children
    )

    const LeftIcon = IconWithSize(leftIcon)
    const RightIcon = IconWithSize(rightIcon)

    return (
      <StyledButton
        color={color}
        disabled={disabled}
        className={classes}
        ref={forwardedRef}
        role="button"
        tabIndex={0}
        css={css}
        onClick={onClick}
      >
        {LeftIcon ? (
          <IconContainer type="start">{LeftIcon}</IconContainer>
        ) : null}
        {ChildVariant}
        {RightIcon ? (
          <IconContainer type="end">{RightIcon}</IconContainer>
        ) : null}
      </StyledButton>
    )
  }
)

const IconWithSize = (icon: ReactElement | null) => {
  if (!icon) return null

  return cloneElement(icon, {
    width: 16,
    height: 16,
  })
}

Button.displayName = 'Button'
