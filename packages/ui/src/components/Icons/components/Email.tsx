import React from 'react'
import { IconProps } from '../types'
import { Wrapper } from '../Wrapper'

const IconEmail = (x: IconProps) => {
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
        <path
          fill="currentColor"
          fillOpacity={0.87}
          fillRule="evenodd"
          d="M2.09091 3.66637C2.20709 3.46802 2.42271 3.33333 2.66676 3.33333H13.3334C13.5775 3.33333 13.7931 3.46805 13.9093 3.66644L8.00016 7.80285L2.09091 3.66637ZM0.670247 3.88135C0.667306 3.91004 0.666241 3.93881 0.667018 3.96749C0.666844 3.9783 0.666756 3.98914 0.666756 4V12C0.666756 13.1015 1.56523 14 2.66676 14H13.3334C14.4349 14 15.3334 13.1015 15.3334 12V4C15.3334 3.99024 15.3334 3.98049 15.3332 3.97076C15.3342 3.93992 15.3331 3.90896 15.3297 3.8781C15.2664 2.83295 14.394 2 13.3334 2H2.66676C1.60506 2 0.731994 2.83468 0.670247 3.88135ZM14.0001 5.23044V12C14.0001 12.3651 13.6986 12.6667 13.3334 12.6667H2.66676C2.30161 12.6667 2.00009 12.3651 2.00009 12V5.23034L7.61785 9.16277C7.8474 9.32346 8.15292 9.32346 8.38247 9.16277L14.0001 5.23044Z"
          clipRule="evenodd"
        />
      </svg>
    </Wrapper>
  )
}

export default IconEmail
