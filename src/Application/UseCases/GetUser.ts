import { User } from "../Entities/User"

import { getUser } from "../../Infrastructure/getUser"

export const GetUser = ({ userId }: { userId: string }) => {
    const user = User({ userId }, { getUser }).getUser()

    if (!user) {
        throw new Error("User not found")
    }
    return user
}