import { users } from "../../data/users"

export const getUser = ({ userId }) => {
    return users[userId]
}