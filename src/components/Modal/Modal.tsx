import { MouseEventHandler } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import styles from './Modal.module.css'

interface Props {
  isVisible: boolean
  children: React.ReactNode
}

export const Modal = ({ isVisible, children }: Props) => {
  const { pallet } = useTheme()

  if (!isVisible) {
    return null
  }

  const bodyStyle = {
    backgroundColor: pallet[0],
    color: pallet[1],
    borderColor: pallet[3]
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.body} style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}
