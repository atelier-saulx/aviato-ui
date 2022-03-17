import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { getRandomId } from '@aviato/utils'

import { Modal, ModalProps } from './Modal'

type ModalPartialProps = Partial<ModalProps>

interface ModalItem {
  id: number
  children: ReactNode
  props: ModalPartialProps
}

interface ModalType {
  open: (children: ReactNode, props?: ModalPartialProps) => void
  close: (id: number) => void
  closeAll: () => void
  count: () => number
}

export const ModalContext = createContext<ModalType>({
  open: () => {},
  close: () => {},
  closeAll: () => {},
  count: () => 0,
})

export const useModal: () => ModalType = () => {
  return useContext(ModalContext)
}

export const ModalProvider: FunctionComponent = ({ children }) => {
  const [count, setCount] = useState(0)

  const modalsRef = useRef<ModalItem[]>()
  const modalRef = useRef<ModalType>()

  if (!modalRef.current) {
    let ModalCount = 0

    const listeners = new Set([setCount])

    const update = (length) => {
      listeners.forEach((fn) => fn(length))
    }

    const ModalInstance = () => {}

    ModalInstance.open = (children: ReactNode, props: ModalPartialProps) => {
      const id = ModalCount++

      update(() => {
        modalsRef.current.push({
          id,
          children,
          props,
        })
      })

      return id
    }

    ModalInstance.close = (id: number) => {
      const modalIndex = modalsRef.current.findIndex(
        ({ id: ModalId }) => ModalId === id
      )

      if (modalIndex !== -1) {
        modalsRef.current.splice(modalIndex, 1)
        update(modalsRef.current.length)
      }
    }

    ModalInstance.count = () => {
      const [state, setState] = useState(count)

      useEffect(() => {
        listeners.add(setState)

        return () => {
          listeners.delete(setState)
        }
      }, [])

      return state
    }

    ModalInstance.closeAll = () => {
      modalsRef.current = []
      update(0)
    }

    modalsRef.current = []
    modalRef.current = ModalInstance
  }

  const modals = modalsRef.current.map(({ id, children, props }) => {
    const randomId = getRandomId()

    const onClose = () => {
      modalRef.current.close(id)
    }

    return (
      <Modal
        {...props}
        isOpen
        onClose={onClose}
        key={`Modal-${id}-${randomId}`}
      >
        {children}
      </Modal>
    )
  })

  return (
    <ModalContext.Provider value={modalRef.current}>
      {children}
      {modals}
    </ModalContext.Provider>
  )
}

ModalProvider.displayName = 'ModalProvider'