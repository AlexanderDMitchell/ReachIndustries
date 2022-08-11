import { useTheme } from '../../context/ThemeProvider'
import styles from './Modal.module.css'

interface Props {
  isVisible: boolean
  toggleIsVisible: () => void
  children: React.ReactNode
}

export const Modal = ({ isVisible, toggleIsVisible, children }: Props) => {
  const { pallet } = useTheme()

  if (!isVisible) {
    return null
  }

  const bodyStyle = {
    backgroundColor: pallet[0],
    color: pallet[1],
    borderColor: pallet[3]
  }

  const onBackdropPress: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }
    toggleIsVisible()
  }

  return (
    <div className={styles.backdrop} onClick={onBackdropPress}>
      <div className={styles.body} style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}
