import {
  Column,
  Page,
  Badge,
  BadgeVariant,
  BadgeType,
  BadgeSize,
  Group,
} from '@aviato/ui'

import { NextTitle, NextText, ShowcaseComponent } from '../../components'

const BadgePage = () => {
  const ShowBadge = () => {
    const badgeTypes: BadgeType[] = ['primary', 'action']

    const badgeVariants: BadgeVariant[] = ['light', 'filled', 'outlined']

    const badgeSizes: BadgeSize[] = [
      'extrasmall',
      'small',
      'medium',
      'large',
      'extralarge',
    ]

    const getBadgeSizes = (type: BadgeType, variant: BadgeVariant) => {
      return badgeSizes.map((size, index) => {
        const mappedSizes: { [key in BadgeSize]: string } = {
          extrasmall: 'XS',
          small: 'SM',
          medium: 'MD',
          large: 'LG',
          extralarge: 'XL',
        }

        const mappedSize = `${mappedSizes[size]} SIZE`

        return (
          <Badge
            type={type}
            variant={variant}
            size={size}
            key={`BadgeExample${index}`}
          >
            {mappedSize}
          </Badge>
        )
      })
    }

    const getBadgeVariants = (type: BadgeType) => {
      return badgeVariants.map((variant, index) => {
        return (
          <Group key={`BadgeVariant-${index}`} direction="row">
            {getBadgeSizes(type, variant)}
          </Group>
        )
      })
    }

    const getBadges = () => {
      return badgeTypes.map((type, index) => {
        return (
          <Group
            key={`BadgeType-${index}`}
            direction="column"
            css={{ paddingBottom: 20 }}
          >
            {getBadgeVariants(type)}
          </Group>
        )
      })
    }

    return <Column>{getBadges()}</Column>
  }

  return (
    <Page>
      <NextTitle>Badge</NextTitle>

      <NextText color="Secondary">Display badge, pill or tag.</NextText>

      <ShowcaseComponent background="transparent">
        <ShowBadge />
      </ShowcaseComponent>
    </Page>
  )
}

export default BadgePage
