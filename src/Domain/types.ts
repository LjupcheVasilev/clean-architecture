export type UserBase = {
    id: string
    name: string
    email: string
    getUser: () => UserBase
    canUserViewProfile: (profileId: string) => boolean
    getSalesForYear: (year: number) => number
}