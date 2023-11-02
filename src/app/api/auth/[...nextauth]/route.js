
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
    providers : [
        GoogleProvider (
            {
                clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ,
                clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            }
        )
    ],
    // secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
    },
    callbacks : {
        async session( {session,token,user}) {
            session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase()
            session.user.uid = token.sub;
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET , handler as POST}