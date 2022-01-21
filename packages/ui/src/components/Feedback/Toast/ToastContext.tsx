import { createContext, ReactNode } from 'react'

export interface ToastContextType {
  add: (children: ReactNode) => void
  close: (id?: number) => void
  getAmount: () => number
}

export const ToastContext = createContext(undefined)