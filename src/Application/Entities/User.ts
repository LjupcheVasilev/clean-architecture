import { users } from "../../../data/users"
import { UserBase } from "../../Domain/types"

export const User = ({ userId }) => ({
    getUser: (): UserBase => {
        return users[userId]
    },
    canUserViewProfile: (profileId: string): boolean => {
        return userId === profileId
    },
    getSalesForYear: (year: number): number => {
        return 10214
    }
})