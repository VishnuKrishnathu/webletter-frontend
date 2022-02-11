import { combineReducers } from "redux";
import { userData } from "../types/user";

export const initialUsername = null

function userReducer(state=initialUsername, action :userData){

    switch(action.type){

        case 'user/username': {
            return action.payload
        }
        
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    user : userReducer
})