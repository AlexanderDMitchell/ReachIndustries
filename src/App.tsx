import './App.css'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'

function App() {
  return (
    <div className={'App'}>
      <VideoPlayer src={'http://www.w3schools.com/html/mov_bbb.mp4'} />
    </div>
  )
}

export default App
