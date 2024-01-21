import { User } from "../Entities/User"

export const GetUser = ({ userId }: { userId: string }) => {
    const user = User({ userId }).getUser()

    if (!user) {
        throw new Error("User not found")
    }
    return user
}