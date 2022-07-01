import { SET_USER1,SET_USER2 } from "./constant";

export const setUser1 = payload =>(
    {
        type: SET_USER1,
        payload
    }
)

export const setUser2 = payload =>(
    {
        type: SET_USER2,
        payload
    }
)