import { Column, Row, Slider, Page } from '@aviato/ui'

import {
  ShowcaseHeader,
  ShowcaseComponent,
  NextText,
  SmallSpacer,
  HugeSpacer,
} from '../../components'

const ComponentProps = `
interface SliderProps {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  marks?: Mark[]
  label?: ReactNode | ((value: number) => ReactNode)
  showLabelOnHover?: boolean
  labelAlwaysVisible?: boolean
  smoothDrag?: boolean
  onChange?(value: string): void
}
`

const SliderPage = () => {
  const simpleMarks = [
    { value: 0 },
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
    { value: 60 },
    { value: 70 },
    { value: 80 },
    { value: 90 },
    { value: 100 },
  ]

  const marks = [
    { value: 0, label: 'xs' },
    { value: 25, label: 'sm' },
    { value: 50, label: 'md' },
    { value: 75, label: 'lg' },
    { value: 100, label: 'xl' },
  ]

  const ShowSlider = () => {
    return (
      <>
        <Column css={{ width: '100%' }}>
          <NextText>Basic slider.</NextText>
          <Row>
            <Slider />
          </Row>

          <HugeSpacer />

          <NextText>
            Clamp steps to increment of 10, do not show label when hovering.
          </NextText>
          <Row>
            <Slider step={10} showLabelOnHover={false} marks={simpleMarks} />
          </Row>

          <HugeSpacer />

          <NextText>Negative values are fine (min -10, max 10).</NextText>
          <Row>
            <Slider
              defaultValue={5}
              min={-10}
              max={10}
              label={(value) => value.toFixed(1)}
            />
          </Row>

          <HugeSpacer />

          <NextText>Example with percentage marks, always show label.</NextText>
          <SmallSpacer />
          <Row>
            <Slider
              showLabelOnHover={false}
              labelAlwaysVisible
              defaultValue={75}
              marks={[
                { value: 0, label: '0%' },
                { value: 25, label: '25%' },
                { value: 50, label: '50%' },
                { value: 75, label: '75%' },
                { value: 100, label: '100%' },
              ]}
            />
          </Row>

          <HugeSpacer />

          <NextText>
            Example with large steps; default to 50, steps of 25.
          </NextText>
          <Row>
            <Slider
              defaultValue={50}
              step={25}
              marks={[
                { value: 0, label: 'xs' },
                { value: 25, label: 'sm' },
                { value: 50, label: 'md' },
                { value: 75, label: 'lg' },
                { value: 100, label: 'xl' },
              ]}
            />
          </Row>

          <HugeSpacer />

          <NextText>Above example without smooth-dragging.</NextText>
          <Row>
            <Slider
              defaultValue={50}
              step={25}
              smoothDrag={false}
              marks={[
                { value: 0, label: 'xs' },
                { value: 25, label: 'sm' },
                { value: 50, label: 'md' },
                { value: 75, label: 'lg' },
                { value: 100, label: 'xl' },
              ]}
            />
          </Row>

          <HugeSpacer />

          <NextText>Custom label format.</NextText>
          <SmallSpacer />
          <Row>
            <Slider
              label={(value) => `${value} °C`}
              labelAlwaysVisible
              defaultValue={15}
            />
          </Row>

          <HugeSpacer />

          <NextText>Custom mark label setup.</NextText>
          <SmallSpacer />
          <Row>
            <Slider
              defaultValue={50}
              step={25}
              marks={marks}
              label={(value) =>
                marks.find((mark) => mark.value === value)?.label ?? ''
              }
            />
          </Row>
        </Column>
      </>
    )
  }

  return (
    <Page>
      <ShowcaseHeader
        title="Slider"
        description={`
          Sliders allow users to make selections from a range of values.
        `}
        props={ComponentProps}
      />

      <ShowcaseComponent
        background="transparent"
        codeBlock={`
import { Slider } from '@aviato/ui'

<Slider
  defaultValue={0 | 50}
  step={1 | 25}
  label={(value) => \`\${value} °C\`}
  marks={[
    { value: 0, label: 'xs' },
    { value: 25, label: 'sm' },
    { value: 50, label: 'md' },
    { value: 75, label: 'lg' },
    { value: 100, label: 'xl' },
  ]}
/>
      `}
      >
        <ShowSlider />
      </ShowcaseComponent>
    </Page>
  )
}

export default SliderPage
