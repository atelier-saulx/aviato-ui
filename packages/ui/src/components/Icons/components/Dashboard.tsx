import React from 'react'
import { SVGProperties } from '../types'

const SvgDashboard = (props: SVGProperties) => {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.87}
        strokeWidth={1.33}
        d="M2 2V14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.87}
        strokeWidth={1.33}
        d="M14 14H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.87}
        strokeWidth={1.33}
        d="M4.66675 10.6667L8.16675 7.16667L10.5001 9.5L14.0001 6"
      />
    </svg>
  )
}

export default SvgDashboard
