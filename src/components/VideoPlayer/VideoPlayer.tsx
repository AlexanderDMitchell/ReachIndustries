import React, { ForwardedRef } from 'react'
import { useTheme } from '../../context/ThemeProvider'
import { FrameDataItem, useFetch } from '../../hooks/useFetch'
import { Button } from '../Button/Button'
import { DataSection } from '../DataSection/DataSection'
import { LoginModal } from '../LoginModal/LoginModal'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { useVideoPayer } from './useVideoPlayer'
import styles from './VideoPlayer.module.css'

// @TODO: use roi instead of hardcoded values
// See README
const coordinates = [38, 70, 20, 45]
const videoHeight = 300
const videoWidth = 500

export const VideoPlayer = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  const [userId, setUserId] = React.useState('100')
  const [orgId, setOrgId] = React.useState('Lumi')
  const { videoSource, roi, frameData } = useFetch({ userId, orgId })

  const [modalIsVisible, setModalIsVisible] = React.useState(false)
  const toggleModal = () => setModalIsVisible((current) => !current)

  const {
    ref,
    isPlaying,
    progress,
    onClickProgressBar,
    colorsArray,
    currentFrame,
    currentFrameData,
    currentColor,
    toggleVideo
  } = useVideoPayer({ frameData })

  const width = ((coordinates[0] - coordinates[2]) / 100) * videoWidth
  const height = ((coordinates[1] - coordinates[3]) / 100) * videoHeight
  const marginLeft = (coordinates[2] / 100) * videoWidth
  const marginTop = (coordinates[3] / 100) * videoHeight

  return (
    <>
      <div className={styles.buttons}>
        <Button onClick={toggleModal}>Modal</Button>
        <Button onClick={() => toggleDarkMode()}>
          {darkMode ? 'Light' : 'Dark'}
        </Button>
      </div>
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
        <Button className={styles.toggleVideoButton} onClick={toggleVideo}>
          {isPlaying ? '❚ ❚' : '►'}
        </Button>
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
          frameColor={currentColor}
        />
        <LoginModal
          userId={userId}
          orgId={orgId}
          isVisible={modalIsVisible}
          toggleIsVisible={toggleModal}
          onConfirm={({ userIdDraft, orgIdDraft }) => {
            setUserId(userIdDraft)
            setOrgId(orgIdDraft)
          }}
        />
      </div>
    </>
  )
}
