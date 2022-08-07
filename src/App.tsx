import './App.css'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { useFetch } from './hooks/useFetch'

function App() {
  return (
    <div className={'App'}>
      <VideoPlayer />
    </div>
  )
}

export default App
