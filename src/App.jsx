import { useCallback } from 'react'
import Hero from './components/Hero'
import KeyFeatures from './components/KeyFeatures'
import WorkspaceMock from './components/WorkspaceMock'
import FooterCTA from './components/FooterCTA'

function App() {
  const handleStart = useCallback(() => {
    const el = document.getElementById('workspace')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero onStart={handleStart} />
      <KeyFeatures />
      <div id="workspace">
        <WorkspaceMock />
      </div>
      <FooterCTA onStart={handleStart} />
    </div>
  )
}

export default App
