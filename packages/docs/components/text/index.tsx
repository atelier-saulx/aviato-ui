import {
  styled,
  Title as AviatoTitle,
  TitleProps as AviatoTitleProps,
  Text as AviatoText,
  TextProps as AviatoTextProps,
} from '@aviato/ui'

import { FunctionComponent } from 'react'

const NextTitleDiv = styled('div', {
  paddingBottom: 10,
})

export type NextTitleProps = AviatoTitleProps & {
  paddingLeft?: number
}

export const NextTitle: FunctionComponent<NextTitleProps> = ({
  children,
  paddingLeft = 0,
  ...remainingProps
}) => {
  return (
    <NextTitleDiv
      css={{
        paddingLeft,
      }}
    >
      <AviatoTitle {...remainingProps}>{children}</AviatoTitle>
    </NextTitleDiv>
  )
}

const NextTextDiv = styled('div', {
  paddingBottom: 10,
})

export type TextProps = AviatoTextProps & {}

export const NextText: FunctionComponent<TextProps> = ({
  children,
  ...remainingProps
}) => {
  return (
    <NextTextDiv>
      <AviatoText {...remainingProps}>{children}</AviatoText>
    </NextTextDiv>
  )
}

const NextParagraphDiv = styled('div', {
  paddingBottom: 10,
})

export type NextParagraphProps = AviatoTextProps & {}

export const NextParagraph: FunctionComponent<NextParagraphProps> = ({
  children,
  ...remainingProps
}) => {
  return (
    <NextParagraphDiv>
      <AviatoText {...remainingProps}>{children}</AviatoText>
    </NextParagraphDiv>
  )
}
