import { Column, Row, Switch, styled } from '@aviato/ui'
import { NextTitle, NextText, Page, ShowcaseComponent } from '../../components'

const Spacer = styled('div', {
  width: 6,
  height: 6,
})

const CheckboxPage = () => {
  const ShowSwitch = () => {
    return (
      <>
        <Column>
          <Row>
            <Switch />

            <Spacer />

            <Switch checked />

            <Spacer />

            <Switch disabled />

            <Spacer />

            <Switch disabled checked />
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
        <ShowSwitch />
      </ShowcaseComponent>
    </Page>
  )
}

export default CheckboxPage
