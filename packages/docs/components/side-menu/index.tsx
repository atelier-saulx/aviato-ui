import { withRouter, NextRouter } from 'next/router'

import { SideMenu, Menu, MenuItem, Button, styled } from '@aviato/ui'

import { AviatoLogo } from '../logo'
import { useCallback, useState } from 'react'
import { log } from '@aviato/utils'

const HeaderDiv = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '8px',
  paddingBottom: '69px',
  cursor: 'pointer',
})

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: 'auto',
  padding: '8px',
})

interface MainSideMenuProps {
  router: NextRouter
}

type MenuDataItems = {
  title: string
  route?: string
  subMenu?: MenuDataItems[]
}

const MainSideMenu = withRouter(({ router }: MainSideMenuProps) => {
  const [activeRoute, setActiveRoute] = useState('/')

  const mainMenu: MenuDataItems[] = [
    {
      title: 'Introduction',
      route: '/',
    },
    {
      title: 'Components',
      subMenu: [
        {
          title: 'Side-menu',
          route: '/components/side-menu',
        },
        {
          title: 'Avatars',
          route: '/components/avatar',
        },
        {
          title: 'Buttons',
          route: '/components/buttons',
        },
        {
          title: 'Icon-buttons',
          route: '/components/icon-buttons',
        },
        {
          title: 'Checkboxes',
          route: '/components/checkboxes',
        },
        {
          title: 'Hooks',
          route: '/components/hooks',
        },
      ],
    },
  ]

  const { asPath } = router

  useCallback(() => {
    setActiveRoute(asPath)
  }, [asPath])

  const isActiveRoute = (route = '') => activeRoute === route

  const setRoute = (targetRoute: string | undefined) => {
    if (!targetRoute) return

    setActiveRoute(targetRoute)
    router.push({
      pathname: targetRoute,
    })
  }

  const toggleTheme = useCallback(() => {
    log.global.debug('Toggling theme...')
  }, [])

  const mainMenuItems = mainMenu.map(({ title, route, subMenu }, menuIndex) => {
    const mappedSubmenu = subMenu?.map(({ title, route }, submenuIndex) => {
      return (
        <MenuItem
          title={title}
          onClick={() => setRoute(route)}
          key={`SubMenuItem-${submenuIndex}`}
          isActive={isActiveRoute(route)}
        />
      )
    })

    const hasSubmenu = Boolean(subMenu)

    return (
      <MenuItem
        title={title}
        onClick={() => setRoute(route)}
        key={`MenuItem-${menuIndex}`}
        isHeader={hasSubmenu}
        isActive={isActiveRoute(route)}
      >
        {hasSubmenu ? <Menu>{mappedSubmenu}</Menu> : null}
      </MenuItem>
    )
  })

  return (
    <SideMenu
      css={{
        borderRight: '1px solid $OtherDivider',
      }}
    >
      <HeaderDiv onClick={() => setRoute('/')}>
        <AviatoLogo />
      </HeaderDiv>

      <Menu>{mainMenuItems}</Menu>

      <Footer>
        <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
      </Footer>
    </SideMenu>
  )
})

export { MainSideMenu as SideMenu }
