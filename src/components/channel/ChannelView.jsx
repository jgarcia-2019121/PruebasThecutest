import { useChannelDetails } from "../../shared/hooks/useChannelDetails.jsx"
import { ReactFlvPlayer } from "react-flv-player"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { LoadingSpinner } from "../LoadingSpinner.jsx"

export const Stream = ({streamUrl})=> {
  return (
    <div className="channel-video-container">
      <ReactFlvPlayer width='100%' heigth='100%' url={streamUrl} />
    </div>
  )
}

export const ChannelView = ({getChannels}) => {
  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails()
  const { id } = useParams()

  useEffect(()=> {
    getChannelDetails(id)
  }, [])

  if(isFetching){
    return <LoadingSpinner />
  }

  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        {
          channelDetails.isOnline ? (
            <Stream streamUrl={channelDetails.streamUrl}/>
          ) : (
            <div className="channel-offline-placeholder">
              <span>Channel is offline</span>
            </div>
            
          )
        }
      </div>
    </div>
  )
}
