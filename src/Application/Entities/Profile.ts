import { users } from "../../../data/users"

export const Profile = ({ profileId }) => ({
    getProfile: () => {
        return users[profileId]
    }
})