import React, { FunctionComponent } from 'react'
import { useColor } from '../../useColor'
import { SvgProps } from '..'

const Duplicate: FunctionComponent<SvgProps> = ({
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
        d="M6.45312 16.75H7.78906V17.9453C7.78906 19.5547 8.60156 20.3672 10.2422 20.3672H18.0859C19.7109 20.3672 20.5312 19.5547 20.5312 17.9453V10.0391C20.5312 8.42969 19.7109 7.61719 18.0859 7.61719H16.7422V6.42188C16.7422 4.8125 15.9219 4 14.2969 4H6.45312C4.8125 4 4 4.8125 4 6.42188V14.3281C4 15.9375 4.8125 16.75 6.45312 16.75ZM6.46875 15.4922C5.6875 15.4922 5.25781 15.0703 5.25781 14.2578V6.49219C5.25781 5.67969 5.6875 5.25781 6.46875 5.25781H14.2734C15.0469 5.25781 15.4844 5.67969 15.4844 6.49219V7.61719H10.2422C8.60156 7.61719 7.78906 8.42188 7.78906 10.0391V15.4922H6.46875ZM10.2578 19.1094C9.48438 19.1094 9.04688 18.6875 9.04688 17.875V10.1094C9.04688 9.29688 9.48438 8.875 10.2578 8.875H18.0625C18.8359 8.875 19.2734 9.29688 19.2734 10.1094V17.875C19.2734 18.6875 18.8359 19.1094 18.0625 19.1094H10.2578ZM14.1562 17.4922C14.5703 17.4922 14.8203 17.2109 14.8203 16.7578V14.6484H17.0625C17.5 14.6484 17.8047 14.4141 17.8047 14C17.8047 13.5781 17.5234 13.3359 17.0625 13.3359H14.8203V11.0859C14.8203 10.625 14.5703 10.3438 14.1562 10.3438C13.7422 10.3438 13.5078 10.6406 13.5078 11.0859V13.3359H11.2656C10.8125 13.3359 10.5234 13.5781 10.5234 14C10.5234 14.4141 10.8281 14.6484 11.2656 14.6484H13.5078V16.7578C13.5078 17.1953 13.7422 17.4922 14.1562 17.4922Z"
        fill={useColor(color)}
      />
    </svg>
  )
}

export default Duplicate