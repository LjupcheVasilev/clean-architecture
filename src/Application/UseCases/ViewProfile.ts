import { Profile } from "../Entities/Profile"
import { User } from "../Entities/User"

export const ViewProfile = ({ userId, profileId }: { userId: string, profileId: string }) => {
    const user = User({ userId }).getUser()
    const canViewProfile = User({ userId }).canUserViewProfile(profileId)

    if (!canViewProfile) {
        throw new Error("User cannot view profile")
    }

    const profile = Profile({ profileId }).getProfile()

    return profile
}