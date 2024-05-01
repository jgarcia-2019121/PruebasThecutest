/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import toast from 'react-hot-toast'
import { getFollowedChannelsRequest, getChannelsRequest as getChannelsRequestApi} from "../../services/api.js";

export const useChannels = () => {
    const [channels, setChannels] = useState(null)

    const getChannels = async(isLogged = false) =>{
        //Consulto al api.jsx 
        const channelsData = await getChannelsRequestApi()
        
        //Respondo si hay un error
        if(channelsData.error){
            return toast.error(
                channelsData.err?.response?.data || 'Error al obtener los canales'
            )
        }
        //Si no está logeado, jalo todos los canales
        if(!isLogged){
            return setChannels(
                {
                    channels: channelsData.data.channels
                }
            )
        }
        //Si está logeado, jalo también los que sigue
        const followedChannelsData = await getFollowedChannelsRequest()
        if(followedChannelsData.error){
            return toast.error(
                followedChannelsData.err?.response?.data || 'Error al obtener los canales que sigues'
            )
        }

        setChannels(
            {
                channels: channelsData.data.channels,
                followedChannels: channelsData.data.channels.filter(
                    channel => followedChannelsData.data.followedChannels.indludes(channel.id)
                )
            }
        )
    }
  return {
    getChannels,
    isFetching: !Boolean(channels),
    allChannels: channels?.channels,
    followedChannels: channels?.followedChannels

  }
}
