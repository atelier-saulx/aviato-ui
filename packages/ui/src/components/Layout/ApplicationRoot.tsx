import React, {
  forwardRef,
  ElementRef,
  useState,
  useMemo,
  ReactElement,
  cloneElement,
} from 'react'
import { ComponentProps } from '@stitches/react'

import { styled, ThemeProvider } from '~/theme'
import { MenuStateContext, menuWidth } from '../Navigation'
import { Header, headerHeight } from './Header'
import { Group } from './Group'
import { ToggleThemeButton } from './ToggleThemeButton'
import { ToggleMenuButton } from './ToggleMenuButton'

const StyledApplicationRoot = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: '$Background2dp',
  overflowX: 'hidden',
  overflowY: 'hidden',
})

const PageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: '$Background2dp',
  marginTop: headerHeight,

  variants: {
    sideMenu: {
      true: {
        '@breakpoint1': {
          paddingLeft: menuWidth,
        },
      },
    },
  },
})

const NavigationContainer = styled('div', {
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },

      false: {
        display: 'none',

        '@breakpoint1': {
          display: 'block',
        },
      },
    },
  },
})

export interface ApplicationRootProps
  extends ComponentProps<typeof StyledApplicationRoot> {
  navigation?: ReactElement
  SSR?: boolean
}

export const ApplicationRoot = forwardRef<
  ElementRef<typeof StyledApplicationRoot>,
  ApplicationRootProps
>((properties, forwardedRef) => {
  const { SSR = false, children, navigation, ...remainingProps } = properties

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const value = useMemo(() => ({ isMenuOpen, setIsMenuOpen }), [isMenuOpen])

  const hasSideMenu = Boolean(navigation)
  const NavigationComponent = navigation ? cloneElement(navigation) : null

  return (
    <ThemeProvider isSSRApplication={SSR}>
      <MenuStateContext.Provider value={value}>
        <StyledApplicationRoot ref={forwardedRef} {...remainingProps}>
          <Header>
            <Group>
              <ToggleMenuButton />
              <ToggleThemeButton />
            </Group>
          </Header>

          <NavigationContainer isOpen={isMenuOpen}>
            {NavigationComponent}
          </NavigationContainer>

          <PageContainer sideMenu={hasSideMenu}>{children}</PageContainer>
        </StyledApplicationRoot>
      </MenuStateContext.Provider>
    </ThemeProvider>
  )
})
