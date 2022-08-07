import { FrameData } from '../../hooks/useFetch'
import styles from './ProgressBar.module.css'

interface Props {
  frameData: FrameData
}

const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export const ProgressBar = ({ frameData }: Props) => {
  const numberOfFrames = Object.entries(frameData).length - 1

  const rgbForPercentageFrame = percentages.map((percentage) => {
    return frameData[Math.round((numberOfFrames * percentage) / 100)]
  })

  const colorsArray = rgbForPercentageFrame.map((data) => {
    const { avgR, avgG, avgB } = data
    return `rgb(${avgR},${avgG},${avgB})`
  })

  return (
    <div
      className={styles.boundingBox}
      style={{
        background: `linear-gradient(0.25turn, ${colorsArray.join(',')})`
      }}
    />
  )
}
