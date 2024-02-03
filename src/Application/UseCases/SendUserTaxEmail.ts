import { Email } from "../Entities/Email"
import { User } from "../Entities/User"

export const SendUserTaxEmail = async ({ userId, year }: { userId: string, year: number }) => {
    const user = User({ userId }).getUser()

    if (!user) {
        throw new Error("User not found")
    }

    //calculate taxes
    const sales = User({ userId }).getSalesForYear(year)
    const taxes = sales * 0.1 // 10% tax rate


    // send email
    const email = Email({ to: user.email, subject: "Your tax information", body: `Here is your tax information: ${taxes}` })
    email.send()

    return true
}