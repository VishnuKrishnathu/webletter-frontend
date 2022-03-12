import { combineReducers } from "redux";
import { userData } from "../types/store_types";
import { INotification, IEditor } from "../types/store_types";

export const initialUsername = null

function userReducer(state=initialUsername, action :userData){

    switch(action.type){

        case 'USER/username': {
            return action.payload
        }
        
        default:
            return state
    }
}

const notificationState = null

function notificationReducer(state = notificationState, action :INotification){

    switch(action.type){

        case 'NOTIFICATION/message': {
            return action.payload
        }

        default:
            return state
    }
}

const editorState = {
    title: "",
    summary: ""
}

function editorReducer(state =editorState, action :IEditor){

    switch(action.type){

        case 'EDITOR/title': {
            return {...action, title: action.payload}
        }

        case 'EDITOR/summary': {
            return {...action, summary: action.payload}
        }

        default:
            return state
    }

}

export const rootReducer = combineReducers({
    user: userReducer,
    notification: notificationReducer,
    editor: editorReducer
})