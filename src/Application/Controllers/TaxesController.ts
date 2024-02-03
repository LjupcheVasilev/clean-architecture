import { Context } from "vm"
import { SendUserTaxEmail } from "../UseCases/SendUserTaxEmail"

export const TaxesController = async (ctx: Context) => {
    try {
        const userId = ctx.params.userId as string
        const year = ctx.params.year as number
        await SendUserTaxEmail({ userId, year })

        ctx.status = 200
        ctx.body = "Email sent"
    } catch (error) {
        ctx.status = 404
        ctx.body = error.message
    }
}