import React, { FunctionComponent } from 'react'
import { useColor } from '../../useColor'
import { SvgProps } from '..'

const Apple: FunctionComponent<SvgProps> = ({
  color,
  framed,
  size,
  frameColor,
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {framed ? (
        <rect width="24" height="24" rx="4" fill={useColor(frameColor)} />
      ) : null}
      <path
        d="M11.6635 7.23105C12.2737 7.23105 13.0385 6.80368 13.4939 6.2341C13.9061 5.71758 14.2067 4.99695 14.2067 4.27558C14.2067 4.17832 14.1987 4.08032 14.1811 4C13.502 4.02653 12.6858 4.47158 12.1959 5.06768C11.8095 5.52158 11.4567 6.2341 11.4567 6.96358C11.4567 7.07042 11.4743 7.17726 11.4831 7.21263C11.5257 7.22221 11.5946 7.23105 11.6635 7.23105ZM9.51487 18C10.3487 18 10.7183 17.4216 11.7581 17.4216C12.8149 17.4216 13.0466 17.9823 13.975 17.9823C14.8858 17.9823 15.4959 17.1099 16.0716 16.2559C16.7162 15.2766 16.9831 14.3151 17 14.2708C16.9399 14.2532 15.1953 13.5141 15.1953 11.4406C15.1953 9.64274 16.5703 8.83295 16.648 8.77032C15.7365 7.41747 14.3534 7.38211 13.975 7.38211C12.952 7.38211 12.1189 8.02316 11.5946 8.02316C11.027 8.02316 10.2797 7.41747 9.3946 7.41747C7.71013 7.41747 6 8.85947 6 11.5828C6 13.2739 6.6358 15.0629 7.41827 16.2198C8.08853 17.1991 8.673 18 9.51487 18Z"
        fill={useColor(color)}
      />
    </svg>
  )
}

export default Apple