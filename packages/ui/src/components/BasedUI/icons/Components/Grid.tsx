import React, { FunctionComponent } from 'react'
import { useColor } from '../../useColor'
import { SvgProps } from '..'

const Hide: FunctionComponent<SvgProps> = ({
  color,
  framed,
  size,
  frameColor,
}) => {
  return (
    <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
      <path
        d="M24.7227 9.10375H29.8517C31.2801 9.10375 32 8.40847 32 6.97447V2.11841C32 0.684411 31.2801 0 29.8517 0H24.7227C23.2942 0 22.5743 0.684411 22.5743 2.11841V6.97447C22.5743 8.40847 23.2942 9.10375 24.7227 9.10375ZM2.14833 9.10375H7.27733C8.7058 9.10375 9.42566 8.40847 9.42566 6.97447V2.11841C9.42566 0.684411 8.7058 0 7.27733 0H2.14833C0.719859 0 0 0.684411 0 2.11841V6.97447C0 8.40847 0.719859 9.10375 2.14833 9.10375ZM13.4411 9.10375H18.5589C19.9873 9.10375 20.7072 8.40847 20.7072 6.97447V2.11841C20.7072 0.684411 19.9873 0 18.5589 0H13.4411C12.0014 0 11.2815 0.684411 11.2815 2.11841V6.97447C11.2815 8.40847 12.0014 9.10375 13.4411 9.10375ZM2.17083 7.57197C1.77715 7.57197 1.58594 7.37643 1.58594 6.97447V2.11841C1.58594 1.72732 1.77715 1.53178 2.17083 1.53178H7.24359C7.63726 1.53178 7.83972 1.72732 7.83972 2.11841V6.97447C7.83972 7.37643 7.63726 7.57197 7.24359 7.57197H2.17083ZM13.4636 7.57197C13.0587 7.57197 12.8675 7.37643 12.8675 6.97447V2.11841C12.8675 1.72732 13.0587 1.53178 13.4636 1.53178H18.5364C18.9301 1.53178 19.1213 1.72732 19.1213 2.11841V6.97447C19.1213 7.37643 18.9301 7.57197 18.5364 7.57197H13.4636ZM24.7452 7.57197C24.3515 7.57197 24.1603 7.37643 24.1603 6.97447V2.11841C24.1603 1.72732 24.3515 1.53178 24.7452 1.53178H29.8179C30.2228 1.53178 30.4141 1.72732 30.4141 2.11841V6.97447C30.4141 7.37643 30.2228 7.57197 29.8179 7.57197H24.7452ZM2.14833 20H7.27733C8.7058 20 9.42566 19.3156 9.42566 17.8816V13.0147C9.42566 11.5915 8.7058 10.8963 7.27733 10.8963H2.14833C0.719859 10.8963 0 11.5915 0 13.0147V17.8816C0 19.3156 0.719859 20 2.14833 20ZM13.4411 20H18.5589C19.9873 20 20.7072 19.3156 20.7072 17.8816V13.0147C20.7072 11.5915 19.9873 10.8963 18.5589 10.8963H13.4411C12.0014 10.8963 11.2815 11.5915 11.2815 13.0147V17.8816C11.2815 19.3156 12.0014 20 13.4411 20ZM24.7227 20H29.8517C31.2801 20 32 19.3156 32 17.8816V13.0147C32 11.5915 31.2801 10.8963 29.8517 10.8963H24.7227C23.2942 10.8963 22.5743 11.5915 22.5743 13.0147V17.8816C22.5743 19.3156 23.2942 20 24.7227 20ZM2.17083 18.4682C1.77715 18.4682 1.58594 18.2727 1.58594 17.8816V13.0255C1.58594 12.6236 1.77715 12.428 2.17083 12.428H7.24359C7.63726 12.428 7.83972 12.6236 7.83972 13.0255V17.8816C7.83972 18.2727 7.63726 18.4682 7.24359 18.4682H2.17083ZM13.4636 18.4682C13.0587 18.4682 12.8675 18.2727 12.8675 17.8816V13.0255C12.8675 12.6236 13.0587 12.428 13.4636 12.428H18.5364C18.9301 12.428 19.1213 12.6236 19.1213 13.0255V17.8816C19.1213 18.2727 18.9301 18.4682 18.5364 18.4682H13.4636ZM24.7452 18.4682C24.3515 18.4682 24.1603 18.2727 24.1603 17.8816V13.0255C24.1603 12.6236 24.3515 12.428 24.7452 12.428H29.8179C30.2228 12.428 30.4141 12.6236 30.4141 13.0255V17.8816C30.4141 18.2727 30.2228 18.4682 29.8179 18.4682H24.7452Z"
        fill={useColor(color)}
      />
    </svg>
  )
}

export default Hide