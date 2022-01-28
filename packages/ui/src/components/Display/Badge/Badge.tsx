import { ComponentProps } from '@stitches/react'
import React, { forwardRef, ElementRef } from 'react'

import { classNames, StitchedCSS, styled } from '~/theme'
import { BaseSize } from '~/types'

const PrimaryBadgeCSS: StitchedCSS = {
  '&.isLight': {
    background: '$PrimaryLight',
    color: '$PrimaryLightContrast',
  },

  '&.isFilled': {
    background: '$PrimaryMain',
    color: '$PrimaryMainContrast',
  },

  '&.isOutlined': {
    color: '$PrimaryMain',
    outline: '1px solid $PrimaryOutline',
  },
}

const ActionBadgeCSS: StitchedCSS = {
  '&.isLight': {
    background: '$ActionLight',
    color: '$ActionLightContrast',
  },

  '&.isFilled': {
    background: '$ActionLight',
    color: '$ActionLightContrast',
  },

  '&.isOutlined': {
    background: 'transparent',
    outline: '1px solid $ActionOutline',
    color: '$ActionLightContrast',
  },
}

const StyledBadge = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  fontWeight: 500,
  textTransform: 'uppercase',

  '&.fullWidth': {
    width: '100%',
  },

  '&.overflow': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },

  variants: {
    type: {
      primary: PrimaryBadgeCSS,
      action: ActionBadgeCSS,
    },

    size: {
      extrasmall: {
        borderRadius: 24,
        fontSize: 11,
        padding: '0px 12px',
        lineHeight: '20px',
      },
      small: {
        borderRadius: 24,
        fontSize: 12,
        padding: '0px 12px',
        lineHeight: '24px',
      },
      medium: {
        borderRadius: 24,
        fontSize: 13,
        padding: '0px 12px',
        lineHeight: '28px',
      },
      large: {
        borderRadius: 24,
        fontSize: 14,
        padding: '0px 12px',
        lineHeight: '32px',
      },
      extralarge: {
        borderRadius: 24,
        fontSize: 15,
        padding: '0px 12px',
        lineHeight: '36px',
      },
    },
  },
})

const Inner = styled('div', {
  '&.overflow': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },
})

export type BadgeType = 'primary' | 'action'
export type BadgeVariant = 'light' | 'filled' | 'outlined'
export type BadgeSize = BaseSize

export interface BadgeProps extends ComponentProps<typeof StyledBadge> {
  type?: BadgeType
  variant?: BadgeVariant
  size?: BadgeSize
  fullWidth?: boolean
  overflow?: boolean
}

export const Badge = forwardRef<ElementRef<typeof StyledBadge>, BadgeProps>(
  (properties, forwardedRef) => {
    const {
      type = 'primary',
      variant = 'filled',
      size = 'medium',
      fullWidth = false,
      overflow = true,
      children,
      ...remainingProps
    } = properties

    const isLight = variant === 'light'
    const isFilled = variant === 'filled'
    const isOutlined = variant === 'outlined'

    const classes = classNames({
      isLight,
      isFilled,
      isOutlined,
      fullWidth,
      overflow,
    })

    return (
      <StyledBadge
        type={type}
        size={size}
        className={classes}
        ref={forwardedRef}
        {...remainingProps}
      >
        <Inner className={classes}>{children}</Inner>
      </StyledBadge>
    )
  }
)
