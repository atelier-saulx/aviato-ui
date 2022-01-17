import {
  Conditional,
  Column,
  Row,
  Select,
  NativeSelect,
  Page,
  styled,
} from '@aviato/ui'
import { log } from '@aviato/utils'
import { NextTitle, NextText, ShowcaseComponent } from '../../components'
import { featureFlags } from '../../feature-flags'

const BigSpacer = styled('div', {
  width: '100%',
  height: 20,
})

const SelectPage = () => {
  const showSelect = featureFlags.isEnabled('Select')

  const ShowSelect = () => {
    return (
      <>
        <Column css={{ width: '100%' }}>
          <Row css={{ width: '100%' }}>
            <NativeSelect
              placeholder="Type something here"
              label="This is a label"
              description="This is a description"
              onChange={(value, payload) => {
                log.global.debug('Select change: ', { value, payload })
              }}
              data={[
                { value: 'flurpy', label: 'Flurpy' },
                { value: 'snark', label: 'Snark' },
                { value: 'snorkles', label: 'Snorkles' },
              ]}
            />
          </Row>

          <Conditional test={showSelect}>
            <BigSpacer />

            <Row css={{ width: '100%' }}>
              <Select
                placeholder="Select a thing"
                label="This is a label"
                description="This is a description"
                onChange={(value, payload) => {
                  log.global.debug('Select change: ', { value, payload })
                }}
                data={[
                  { value: 'flurpy', label: 'Flurpy' },
                  { value: 'snark', label: 'Snark' },
                  { value: 'snorkles', label: 'Snorkles' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Row>

            <BigSpacer />

            <Row css={{ width: '100%' }}>
              <Select
                placeholder="Search for a thing"
                label="This is a label"
                description="This is a description"
                searchable
                onChange={(value, payload) => {
                  log.global.debug('Select change: ', { value, payload })
                }}
                data={[
                  { value: 'flurpy', label: 'Flurpy' },
                  { value: 'snark', label: 'Snark' },
                  { value: 'snorkles', label: 'Snorkles' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Row>
          </Conditional>
        </Column>
      </>
    )
  }

  return (
    <Page>
      <NextTitle>Select</NextTitle>

      <NextText color="Secondary">
        Select component is a component that allows users pick a value from
        predefined options. Ideally, it should be used when there are more than
        5 options, otherwise you might consider using a radio group instead.
      </NextText>

      <ShowcaseComponent background="transparent">
        <ShowSelect />
      </ShowcaseComponent>
    </Page>
  )
}

export default SelectPage
