import { userData } from "../types/user"

export const userDataState = (payload :string) :userData => {
    return {
        type: 'user/username', payload
    }
}