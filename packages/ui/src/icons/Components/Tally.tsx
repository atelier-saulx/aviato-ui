import React, { FunctionComponent } from 'react'
import { useColor } from '../../theme'
import { SvgProps } from '..'

const Tally: FunctionComponent<SvgProps> = ({
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
        d="M18.2362 16.7302C18.842 16.1245 16.8782 13.1795 13.8499 10.1521C11.7731 8.07545 9.73556 6.50012 8.46453 5.91022C7.8807 5.64034 7.46102 5.57648 7.27076 5.7667C4.24308 8.79411 4.24308 13.7021 7.27076 16.7292C10.2984 19.7562 15.2064 19.7576 18.2362 16.7302Z"
        fill={useColor(color)}
      />
      <path
        d="M18.6301 12.0003C18.6554 11.9747 18.6747 11.9439 18.6868 11.91C18.6868 11.91 18.6868 11.91 18.6868 11.9083C19.024 10.9879 19.0909 9.99024 18.8796 9.03307C18.6682 8.0759 18.1875 7.19912 17.494 6.50619C16.8025 5.81424 15.9277 5.33406 14.9726 5.12208C14.0174 4.91011 13.0216 4.97516 12.1022 5.30958L12.0967 5.31164L12.0792 5.31816H12.0754C12.0463 5.33025 12.0198 5.34785 11.9974 5.37001C11.596 5.7714 12.755 7.58056 14.5859 9.41102C16.4167 11.2415 18.2286 12.4017 18.6301 12.0003Z"
        fill={useColor(color)}
      />
    </svg>
  )
}

export default Tally
