import { users } from "../../../data/users"

export const User = ({ userId }) => ({
    getUser: () => {
        return users[userId]
    },
    canUserViewProfile: (profileId: string) => {
        return userId === profileId
    }
})