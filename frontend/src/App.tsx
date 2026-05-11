import { useState, useEffect } from 'react'
import './App.css'

interface SystemInfo {
  os: string
  version: string
  timestamp: string
}

function App() {
  const [count, setCount] = useState(0)
  const [sysInfo, setSysInfo] = useState<SystemInfo | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchSystemInfo = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/system/info')
      const data = await response.json()
      setSysInfo(data)
    } catch (error) {
      console.error('Failed to fetch system info:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSystemInfo()
  }, [])

  return (
    <div className="app-container">
      <header>
        <h1>🖥️ Interactive Web OS</h1>
        <p>A browser-based operating system simulation</p>
      </header>

      <main>
        <section className="system-info">
          <h2>System Information</h2>
          {loading ? (
            <p>Loading...</p>
          ) : sysInfo ? (
            <div className="info-box">
              <p><strong>OS:</strong> {sysInfo.os}</p>
              <p><strong>Version:</strong> {sysInfo.version}</p>
              <p><strong>Time:</strong> {new Date(sysInfo.timestamp).toLocaleString()}</p>
              <button onClick={fetchSystemInfo}>Refresh</button>
            </div>
          ) : (
            <p>Failed to load system info</p>
          )}
        </section>

        <section className="counter">
          <h2>Interactive Counter</h2>
          <div className="counter-box">
            <p>Count: <strong>{count}</strong></p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </section>
      </main>

      <footer>
        <p>Web OS © 2026 - Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
