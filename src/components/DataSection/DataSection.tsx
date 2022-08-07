import styles from './DataSection.module.css'

interface Props {
  frameNumber: number
  boundingBox: string
  histogram: number
  color: string
}

export const DataSection = ({
  frameNumber,
  boundingBox,
  histogram,
  color
}: Props) => {
  return (
    <div className={styles.container}>
      <h5>Frame information</h5>
      <div className={styles.row}>
        <div className={styles.column}>
          <p>{`Frame number: ${frameNumber}`}</p>
          <p>{`Bounding box: ${boundingBox}`}</p>
          <p>{`Histogram: ${histogram}`}</p>
        </div>
        <div className={styles.column}>
          <p>R G B</p>
          <div className={styles.colorBox} style={{ backgroundColor: color }} />
        </div>
      </div>
    </div>
  )
}
