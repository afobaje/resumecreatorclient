import userService from "@/services/userService";
import { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'




export const authOptions: AuthOptions = {
    // adapter: UserAdapter(),

    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLECLIENTID as string ?? '',
            clientSecret: process.env.NEXT_PUBLIC_GOOGLECLIENTSECRET as string ?? ''
        }),
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUBCLIENTID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUBCLIENTSECRET as string
        }),

    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTHSECRET as string,

    callbacks: {
        redirect: async (params: any) => {
            return Promise.resolve('/explore')
        },
        // session: async ({ session, token }) => {
        //     session?.accessToken = token.accessToken,
        //     session?.user?.id = token.id

        //     return session;
        // },




        // async session({ session, user }) {

        //     session.user.id = user.id
        //     return session;
        // },
        // jwt: async ({ account,user, token }) => {

        //     if (account) {
        //         token.accessToken=account.access_token
        //         token.id=user.id
        //     }
        //     return token
        // },



        signIn: async (params: any) => {
            try {
                const checkIfUserExists = await userService.CHECK_IF_USER_EXISTS(params.user.email)
                if (checkIfUserExists) {
                    return true;
                }
                const response = await userService.CREATE_USER(params.user)
                if (response) {
                    return true;
                }
            } catch (error) {
                console.error(error, 'user error')
            }
            return false;
        }
    },
}