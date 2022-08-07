import { FrameData } from '../../hooks/useFetch'
import styles from './ProgressBar.module.css'

interface Props {
  frameData: FrameData
  progress: number
}

const width = 500
const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export const ProgressBar = ({ frameData, progress }: Props) => {
  const numberOfFrames = Object.entries(frameData).length - 1

  const colorsArray = percentages.map((percentage) => {
    const frame = frameData[Math.round((numberOfFrames * percentage) / 100)]
    const { avgR, avgG, avgB } = frame
    return `rgb(${avgR},${avgG},${avgB})`
  })

  return (
    <div
      className={styles.bar}
      style={{
        background: `linear-gradient(0.25turn, ${colorsArray.join(',')})`
      }}>
      <div
        className={styles.progress}
        style={{ left: (width * progress) / 100 }}
      />
    </div>
  )
}