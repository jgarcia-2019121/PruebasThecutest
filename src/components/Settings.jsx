import { ChannelSettings } from "./channel/ChannelSettings.jsx"
import { useChannelSettings } from "../shared/hooks/useChannelSettings.jsx"
import { useEffect } from "react"

export const Settings = () => {
    const { channelSettings, isFetching, saveSettings } = useChannelSettings()

    if(isFetching){
      return console.log('cargando...')
    }

  return (
    <div className="settings-container">
        <span>Settings</span>
        <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
    </div>
  )
}
