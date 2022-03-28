import React from 'react'
import { IconProps } from '../types'
import { Wrapper } from '../Wrapper'

const IconFolder = (x: IconProps) => {
  let { color, css, onClick, ...props } = x

  if (!css) {
    css = {
      color,
    }
  }

  if (!css.color) {
    css.color = color
  }

  return (
    <Wrapper onClick={onClick} css={css}>
      <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
        <g clipPath="url(#clip0_1559_7887)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14.6667 5.33325V3.99992C14.6667 3.26392 14.0693 2.66659 13.3333 2.66659H7.33333L6 1.33325H1.33333C0.597333 1.33325 0 1.93059 0 2.66659V5.33325H14.6667Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 13.3333C16 14.0693 15.4027 14.6667 14.6667 14.6667H1.33333C0.597333 14.6667 0 14.0693 0 13.3333V5.33333C0 4.59733 0.597333 4 1.33333 4H14.6667C15.4027 4 16 4.59733 16 5.33333V13.3333Z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1559_7887">
            <rect
              width={16}
              height={13.3333}
              fill="currentColor"
              transform="translate(0 1.33325)"
            />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  )
}

export default IconFolder
