import React, { ForwardedRef } from 'react'
import styles from './VideoPlayer.module.css'

interface Props {
  src: string
}

export const VideoPlayer = ({ src }: Props) => {
  const ref = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

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
    <div className={styles.container}>
      <video ref={ref} height={'100%'} width={'100%'}>
        <source src={src} />
      </video>

      <button className={styles.toggleVideoButton} onClick={toggleVideo}>
        {isPlaying ? '❚ ❚' : '►'}
      </button>
    </div>
  )
}
