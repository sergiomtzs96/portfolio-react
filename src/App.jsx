import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectHomeInventory from './pages/ProjectHomeInventory'
import ProjectFootballStats from './pages/ProjectFootballStats'
import ProjectRohigarnez from './pages/ProjectRohigarnez'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home-inventory" element={<ProjectHomeInventory />} />
        <Route path="/football-stats" element={<ProjectFootballStats />} />
        <Route path="/rohigarnez" element={<ProjectRohigarnez />} />
      </Route>
    </Routes>
  )
}
