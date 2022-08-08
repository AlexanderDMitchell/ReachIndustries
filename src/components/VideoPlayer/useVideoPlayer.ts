import React from 'react'
import { FrameData, FrameDataItem } from '../../hooks/useFetch'

const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export const useVideoPayer = ({ frameData }: { frameData: FrameData }) => {
  const ref = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentFrame, setCurrentFrame] = React.useState(0)
  const [progress, setProgress] = React.useState(0)

  const currentFrameData = frameData[currentFrame]
  const currentColor = frameToRgbString(frameData[currentFrame])
  const numberOfFrames = Object.entries(frameData).length - 1

  const colorsArray = percentages.map((percentage) => {
    const frame = frameData[Math.round((numberOfFrames * percentage) / 100)]
    return frameToRgbString(frame)
  })

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

  return {
    ref,
    isPlaying,
    progress,
    onClickProgressBar,
    colorsArray,
    currentFrame,
    currentFrameData,
    currentColor,
    toggleVideo
  }
}

export const frameToRgbString = (frame: FrameDataItem | undefined) => {
  if (!frame) {
    return ''
  }
  const { avgR, avgG, avgB } = frame
  return `rgb(${avgR},${avgG},${avgB})`
}
