export const Email = ({ to, subject, body }) => ({
    send: () => {
        console.log(`Sending email to ${to} with subject: ${subject} and body: ${body}`)
    }
})