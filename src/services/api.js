import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/almacenadora/v1',
    timeout: 1000
})

apiClient.interceptors.request.use(
    (config)=>{
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err)=> Promise.reject(err)
)

export const registerRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/register', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/login', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}
    

export const getChannelsRequest = async()=>{
    try{
        return await apiClient.get('/channels')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getFollowedChannelsRequest = async()=>{
    try{
        return await apiClient.get('/channels/followed')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getChannelSettingsRequest = async()=>{
    try{
        return await apiClient.get('/settings/channel')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const updateChannelSettingRequest = async(data)=>{
    try{
        return await apiClient.put('/settings/channel', data)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getChannelDetailsRequest = async(channelId)=>{
    try{
        return await apiClient.get(`/channels/${channelId}`)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}