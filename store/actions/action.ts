import { userData, INotification } from "../types/user"

export const userDataState = (payload :string) :userData => {
    return {
        type: 'user/username', payload
    }
}

export const notificationState = (payload :string) :INotification => ({
    type: 'notification/message',
    payload
})