import { getUser } from "../../Infrastructure/getUser"

export const User = ({ userId }) => ({
    getUser: () => {
        return getUser({ userId })
    },
    canUserViewProfile: (profileId: string) => {
        return userId === profileId
    }
})