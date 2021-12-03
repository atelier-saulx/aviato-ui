import { styled } from '~/theme'
import React, { FunctionComponent, useCallback, MouseEventHandler } from 'react'
import { noop } from '@aviato/utils'
import { Avatar } from '../Avatar'

const StyledProfileMenuItem = styled('button', {
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  width: '100%',
  fontWeight: '600',
  fontSize: '15px',
  height: '40px',
  padding: '8px',

  '&:hover': {
    backgroundColor: '$ActionMainHover',
  },
  '&:active': {
    backgroundColor: '$ActionMainSelected',
  },
})

export type ProfileMenuItemProps = {
  username?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ProfileMenuItem: FunctionComponent<ProfileMenuItemProps> = ({
  onClick = noop,
  children,
  username = '',
}) => {
  const handleClick = useCallback(() => {
    onClick()
  }, [])

  return (
    <StyledProfileMenuItem onClick={handleClick}>
      <Avatar username={username} />
      {children}
      {username}
    </StyledProfileMenuItem>
  )
}
