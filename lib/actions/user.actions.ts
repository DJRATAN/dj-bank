'use server'

export const signIn = async () => {
    try {
        // Mutation / Database / Make fetch
    } catch (error) {
        console.log("Error", error)
    }
}
export const signUp = async ({ userData }: SignUpParams) => {
    try {
        // Create a User account
        console.log(userData)
    } catch (error) {
        console.log("Error", error)
    }
}