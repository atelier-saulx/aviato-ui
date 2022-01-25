import { useEffect, useState } from 'react'
import { Column, Row, TextField, Page, styled, InputVariant } from '@aviato/ui'
import { log, capitalize } from '@aviato/utils'

import { NextTitle, NextText, ShowcaseComponent } from '../../components'

const BigSpacer = styled('div', {
  width: '100%',
  height: 10,
})

const TextFieldPage = () => {
  const ShowTextField = ({ variant }: { variant: InputVariant }) => {
    const uppercaseVariant = capitalize(variant)

    const [inputValue, setInputValue] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)

    useEffect(() => {
      setIsInvalid(inputValue === 'test')
    }, [inputValue])

    return (
      <>
        <Column css={{ width: '100%' }}>
          <NextTitle size="small">{uppercaseVariant}</NextTitle>

          <Row css={{ width: '100%' }}>
            <TextField
              variant={variant}
              placeholder="Type something here"
              onChange={(value, payload) => {
                log.global.debug('TextField change: ', { value, payload })
              }}
            />
          </Row>

          <BigSpacer />

          <Row css={{ width: '100%' }}>
            <TextField
              variant={variant}
              autosize
              minRows={3}
              maxRows={3}
              placeholder="Autosize with 3 rows"
            />
          </Row>

          <BigSpacer />

          <Row css={{ width: '100%' }}>
            <TextField
              variant={variant}
              autosize
              minRows={2}
              maxRows={6}
              placeholder="Autosize with 6 rows max, 2 min"
            />
          </Row>

          <BigSpacer />

          <Row css={{ width: '100%' }}>
            <TextField
              variant={variant}
              autosize
              placeholder="Autosize without a row limit"
            />
          </Row>

          <BigSpacer />

          <Row css={{ width: '100%' }}>
            <TextField
              variant={variant}
              placeholder="Type `test` to see invalid input field"
              value={inputValue}
              invalid={isInvalid}
              onChange={(value, payload) => {
                log.global.debug('Input change: ', { value, payload })
                setInputValue(value)
              }}
            />
          </Row>
        </Column>
      </>
    )
  }

  const ShowComplexTextField = () => {
    return (
      <>
        <Column css={{ width: '100%' }}>
          <NextTitle size="small">Form</NextTitle>

          <Row css={{ width: '100%' }}>
            <TextField
              placeholder="Type something here"
              label="This is a label"
              description="This is a description"
            />
          </Row>
        </Column>
      </>
    )
  }

  return (
    <Page>
      <NextTitle>Text Field</NextTitle>

      <NextText color="Secondary">Capture string input from user</NextText>

      <ShowcaseComponent background="transparent" padding="small">
        <ShowTextField variant="outlined" />
      </ShowcaseComponent>

      <ShowcaseComponent background="transparent" padding="small">
        <ShowTextField variant="filled" />
      </ShowcaseComponent>

      <ShowcaseComponent background="transparent" padding="small">
        <ShowComplexTextField />
      </ShowcaseComponent>
    </Page>
  )
}

export default TextFieldPage