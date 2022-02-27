import { combineReducers } from "redux";
import { userData } from "../types/user";
import { INotification } from "../types/user";

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

const notificationState = null

function notificationReducer(state = notificationState, action :INotification){

    switch(action.type){

        case 'notification/message': {
            return action.payload
        }

        default:
            return state
    }
}

export const rootReducer = combineReducers({
    user : userReducer,
    notification :notificationReducer
})