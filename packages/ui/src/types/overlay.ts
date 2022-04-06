export type Target = (EventTarget | Element | Node) & {
  rect?: DOMRect
}

export type SelectTarget = (t: Target) => Target

export type PositionProps = {
  width?: string | number | undefined
  position?: 'left' | 'right' | 'top' | 'bottom'
  placement?: 'center' | 'left' | 'right'
  variant?: 'over' | 'detached'
  offset?: { x: number; y: number }
  selectTarget?: SelectTarget
}

export type Position = {
  containerWidth?: number
  y?: number
  x?: number
  bottom?: number
  width?: number | string
  spaceOnTop?: boolean
  correctedY?: number
  elementRect?: DOMRect
  targetRect?: DOMRect
  minWidth?: number | string
  position?: 'left' | 'right' | 'top' | 'bottom'
  placement?: 'center' | 'left' | 'right'
}
