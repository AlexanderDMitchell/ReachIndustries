import { useTheme } from '../../context/ThemeProvider'
import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, style, ...props }: Props) => {
  const { pallet } = useTheme()
  const color = pallet[0]
  const backgroundColor = pallet[1]

  return (
    <button
      {...props}
      className={styles.button}
      style={{ color, backgroundColor, ...style }}>
      {children}
    </button>
  )
}
