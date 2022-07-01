import { SET_USER1,SET_USER2 } from "./constant"

const initState = {
    user1:'',
    user2:''
}

const reducer = (initState,action)=>{
    switch(action.type){
        case SET_USER1:
        return{
            ...initState,
            user1: action.payload
            }
        case SET_USER2:
            return{
                ...initState,
                user2: action.payload
            }
            default:
                throw new Error('Invalid action')
    }
}

export default reducer
export {initState}