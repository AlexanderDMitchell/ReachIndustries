import React, { ForwardedRef } from 'react'
import { FrameDataItem, useFetch } from '../../hooks/useFetch'
import { DataSection } from '../DataSection/DataSection'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import styles from './VideoPlayer.module.css'

const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const frameToRgbString = (frame: FrameDataItem | undefined) => {
  if (!frame) {
    return ''
  }
  const { avgR, avgG, avgB } = frame
  return `rgb(${avgR},${avgG},${avgB})`
}

export const VideoPlayer = () => {
  const { videoSource, roi, frameData } = useFetch()

  const ref = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const [currentFrame, setCurrentFrame] = React.useState(0)

  const currentFrameData = frameData[currentFrame]
  const currentColor = frameToRgbString(frameData[currentFrame])

  const numberOfFrames = Object.entries(frameData).length - 1

  const colorsArray = percentages.map((percentage) => {
    const frame = frameData[Math.round((numberOfFrames * percentage) / 100)]
    return frameToRgbString(frame)
  })

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

  const onClickProgressBar = (percentage: number) => {
    if (!ref.current) {
      return
    }
    const duration = ref.current?.duration ?? 0
    const newTime = (percentage / 100) * duration
    ref.current.currentTime = newTime
  }

  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = ref.current?.currentTime ?? 0
      const duration = ref.current?.duration ?? 0
      const percentage = (currentTime / duration) * 100
      setProgress(percentage)
      setCurrentFrame(Math.round((numberOfFrames * percentage) / 100))
    }, 32)

    return () => clearInterval(interval)
  }, [numberOfFrames])

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
      <ProgressBar
        frameData={frameData}
        progress={progress}
        onClick={onClickProgressBar}
        background={`linear-gradient(0.25turn, ${colorsArray.join(',')})`}
      />
      <DataSection
        frameNumber={currentFrame}
        boundingBox={roi.join(', ').toString()}
        histogram={currentFrameData?.histDiff ?? 0}
        color={currentColor}
      />
    </div>
  )
}
