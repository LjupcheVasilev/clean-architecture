export const User = ({ userId }, { getUser }) => ({
    getUser: () => {
        return getUser({ userId })
    },
    canUserViewProfile: (profileId: string) => {
        return userId === profileId
    }
})