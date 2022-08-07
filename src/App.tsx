import './App.css'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { useFetch } from './hooks/useFetch'

function App() {
  const { videoSource } = useFetch()

  return (
    <div className={'App'}>
      <VideoPlayer src={videoSource} />
    </div>
  )
}

export default App
