import { FrameData } from '../../hooks/useFetch'
import styles from './ProgressBar.module.css'

interface Props {
  frameData: FrameData
  progress: number
  onClick: (percentage: number) => void
  background: string
}

const width = 500 // TODO:

export const ProgressBar = ({
  frameData,
  progress,
  onClick,
  background
}: Props) => {
  return (
    <div
      onClick={(event) => {
        const percentage = Math.round((event.nativeEvent.offsetX / width) * 100)
        onClick(percentage)
      }}
      className={styles.bar}
      style={{ background }}>
      <div
        className={styles.progress}
        style={{ left: (width * progress) / 100 }}
      />
    </div>
  )
}
