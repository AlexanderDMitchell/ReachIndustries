import './App.css'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { useTheme } from './context/ThemeProvider'
import { useFetch } from './hooks/useFetch'

function App() {
  const { pallet } = useTheme()
  return (
    <div className={'App'} style={{ backgroundColor: pallet[0] }}>
      <VideoPlayer />
    </div>
  )
}

export default App
