import { useTheme } from '../../context/ThemeProvider'
import styles from './DataSection.module.css'

interface Props {
  frameNumber: number
  boundingBox: string
  histogram: number
  frameColor: string
}

export const DataSection = ({
  frameNumber,
  boundingBox,
  histogram,
  frameColor
}: Props) => {
  const { pallet } = useTheme()
  const color = pallet[1]

  return (
    <div className={styles.container}>
      <h5 style={{ color }}>Frame information</h5>
      <div className={styles.row}>
        <div className={styles.column}>
          <p style={{ color }}>{`Frame number: ${frameNumber}`}</p>
          <p style={{ color }}>{`Bounding box: ${boundingBox}`}</p>
          <p style={{ color }}>{`Histogram: ${histogram}`}</p>
        </div>
        <div className={styles.column}>
          <p style={{ color }}>R G B</p>
          <div
            className={styles.colorBox}
            style={{ backgroundColor: frameColor }}
          />
        </div>
      </div>
    </div>
  )
}
