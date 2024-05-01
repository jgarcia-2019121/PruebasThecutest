import { DashboardContent } from "../../components/dashboardContent/DashboardContent.jsx"
import { Navbar } from "../../components/navbar/Navbar.jsx"
import { Sidebar } from "../../components/sidebar/Sidebar.jsx"
import { useEffect } from "react"
import { useChannels } from "../../shared/hooks/useChannels.jsx"
import './dashboard.css'

export const Dashboard = () => {
  const { getChannels, allChannels } = useChannels()
  
  useEffect(()=>{
    getChannels(false)
  }, []) //[] = solo se carga al inicio, si tiene una constante, cada que cambie se ejecuta

  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar />
      <DashboardContent channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}
