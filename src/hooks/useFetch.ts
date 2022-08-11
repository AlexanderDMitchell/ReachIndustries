import React from 'react'
import { cvmdata } from '../frontend_test'

const GET_DEVICES_URL = 'https://mockapi.lumi.systems/getdevices'
const GET_DEVICE_DATA_URL = 'https://mockapi.lumi.systems/getdevicedata'

const deviceId = 'LabEye-dVr'

export type FrameData = Record<string, FrameDataItem>

export type FrameDataItem = {
  avgR: number
  avgG: number
  avgB: number
  histDiff: number
}

export const useFetch = ({
  userId,
  orgId
}: {
  userId: string
  orgId: string
}) => {
  const [roi, _setRoi] = React.useState<number[]>(cvmdata.RoI)
  const [devices, setDevices] = React.useState<string[]>([])
  const [frameData, _setFrameData] = React.useState<FrameData>(
    cvmdata.frame_data
  )
  const [videoSource, setVideoSource] = React.useState('')
  const [_jsonUrl, setJsonUrl] = React.useState('')

  React.useEffect(() => {
    fetch(`${GET_DEVICES_URL}?userId=${userId}&orgId=${orgId}`)
      .then((response) => response.json())
      .then(function (data) {
        setDevices(data?.output)
      })
  }, [userId, orgId])

  React.useEffect(() => {
    fetch(`${GET_DEVICE_DATA_URL}?deviceId=${deviceId}`)
      .then((response) => response.json())
      .then(function (data) {
        setVideoSource(data.output.videofiles)
        setJsonUrl(data.output.cvmdata)
      })
  }, [])

  // CORS issue, see README.md
  /* 
    React.useEffect(() => {
      fetch(jsonUrl, { mode: 'no-cors' })
        .then((response) => response.json())
        .then((data) => {
        })
    }, [])
*/

  return {
    videoSource,
    roi,
    frameData,
    devices
  }
}
