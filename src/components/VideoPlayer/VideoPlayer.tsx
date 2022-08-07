import React, { ForwardedRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import styles from './VideoPlayer.module.css'

export const VideoPlayer = () => {
  const { videoSource, roi } = useFetch()

  const ref = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const videoHeight = 300
  const videoWidth = 500

  // @TODO: use roi instead of hardcoded values
  const coordinates = [38, 70, 20, 45]

  const width = ((coordinates[0] - coordinates[2]) / 100) * videoWidth
  const height = ((coordinates[1] - coordinates[3]) / 100) * videoHeight
  const marginLeft = (coordinates[2] / 100) * videoWidth
  const marginTop = (coordinates[3] / 100) * videoHeight

  const toggleVideo = () => {
    if (!ref.current) {
      return
    }
    if (ref.current.paused) {
      ref.current.play()
      setIsPlaying(true)
      return
    }
    ref.current.pause()
    setIsPlaying(false)
  }

  return (
    <div
      className={styles.container}
      style={{ width: videoWidth, height: videoHeight }}>
      <div
        className={styles.boundingBox}
        style={{
          width,
          height,
          marginLeft,
          marginTop
        }}
      />
      <video ref={ref} height={'100%'} width={'100%'}>
        <source src={videoSource} />
      </video>

      <button className={styles.toggleVideoButton} onClick={toggleVideo}>
        {isPlaying ? '❚ ❚' : '►'}
      </button>
    </div>
  )
}
