import { Column, Row, Switch, SwitchSize, Page, styled } from '@aviato/ui'
import { NextTitle, NextText, ShowcaseComponent } from '../../components'

const Spacer = styled('div', {
  width: 6,
  height: 6,
})

const SwitchPage = () => {
  const ShowSwitch = ({ size }: { size: SwitchSize }) => {
    return (
      <>
        <Column>
          <Row>
            <Switch size={size} />
            <Spacer />
            <Switch size={size} checked />
            <Spacer />
            <Switch size={size} disabled />
            <Spacer />
            <Switch size={size} disabled checked />
          </Row>
        </Column>
      </>
    )
  }

  return (
    <Page>
      <NextTitle weight="Bold" size="ExtraLarge">
        Switch
      </NextTitle>

      <NextText size="Medium" color="Secondary">
        Capture boolean input from user.
      </NextText>

      <ShowcaseComponent background="transparent">
        <ShowSwitch size="normal" />
      </ShowcaseComponent>

      <ShowcaseComponent background="transparent">
        <ShowSwitch size="large" />
      </ShowcaseComponent>
    </Page>
  )
}

export default SwitchPage
