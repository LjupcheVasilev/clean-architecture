import { Context } from "vm"
import { ViewProfile } from "../UseCases/ViewProfile"

export const ViewProfileController = (ctx: Context): void => {
    const userId = ctx.params.userId as string
    const profileId = ctx.params.profileId as string
    try {
        const user = ViewProfile({ userId, profileId })

        ctx.status = 200
        ctx.body = user
        return
    } catch (error) {
        ctx.status = 404
        ctx.body = error.message
        return
    }
}