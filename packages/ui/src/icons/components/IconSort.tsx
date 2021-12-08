import React from 'react'
import { SVGProperties } from '../types'

const SvgIconSort = (props: SVGProperties) => {
  return (
    <svg fill="none" viewBox="0 0 16 16" {...props}>
      <rect width={8} height={1.3} x={2} y={3} fill={props.fill} rx={0.65} />
      <rect width={5} height={1.3} x={2} y={7} fill={props.fill} rx={0.65} />
      <rect width={5} height={1.3} x={2} y={11} fill={props.fill} rx={0.65} />
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M11.9167 12L14.8333 9.08333M11.9167 4.5V12V4.5ZM11.9167 12L9 9.08333L11.9167 12Z"
      />
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M11.9167 12L14.8333 9.08333M11.9167 4.5V12V4.5ZM11.9167 12L9 9.08333L11.9167 12Z"
      />
    </svg>
  )
}

export default SvgIconSort
