import { Context } from "vm"
import { GetUser } from "../UseCases/GetUser"

export const getUserController = (ctx: Context): void => {
    const userId = ctx.params.userId as string
    try {
        const user = GetUser({ userId })

        ctx.status = 200
        ctx.body = user
        return
    } catch (error) {
        ctx.status = 404
        ctx.body = error.message
        return
    }
}