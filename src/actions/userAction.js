import axios from "axios"

export const getUsers=()=>dispatch=>{
    console.log('fetching...')
    axios.get('http://localhost:3004/posts')
    .then(res=>{
        console.log(res,"respons")
        dispatch({
            type:'LIST_USERS',
            payload:res.data
        
        })

    })
    .catch(error=>{console.log(error)})

}
export const setUser=userId=>{
    console.log("setting")
    return {
        
        type:"SET_USER",
        payload:userId
    }
}
export const addUsers=(post)=>dispatch=>{
    console.log('fetching...')
    axios.post('http://localhost:3004/posts',post)
    .then(res=>{
        console.log(res,"response")
        dispatch({
            type:'ADD_USERS',
            payload:res.data
        
        })

    })
    .catch(error=>{console.log(error)})

}

