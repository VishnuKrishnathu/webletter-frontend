import { userData, INotification } from "../types/store_types"

export const userDataState = (payload :string) :userData => {
    return {
        type: 'USER/username', payload
    }
}

export const notificationState = (payload :string) :INotification => ({
    type: 'NOTIFICATION/message',
    payload
})


export const editorTitle = (payload :string) => ({
    type: 'EDITOR/title',
    payload
})

export const editorSummary = (payload :string) => ({
    type: 'EDITOR/summary',
    payload
})