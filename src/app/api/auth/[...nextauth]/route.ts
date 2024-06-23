import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next"
import DatabaseConnection from "@/utils/db"
import User from "@/model/UserModel"
import { NextAuthOptions } from "next-auth"
import bcrypt from 'bcrypt'
import { generateToken } from "@/utils/generateToken"

const authOptions: NextAuthOptions = {
    secret: 'Thisismysecreatedata',
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any, req) {
                await DatabaseConnection()
                console.log(credentials)
                try {
                    const user = await User.findOne({ email: credentials.email })
                    if (!user) {
                        throw new Error('This email is not registered.')
                    }

                    const comparePassword = await bcrypt.compare(credentials.password, user.password)
                    if (user && comparePassword) {
                        const { password, ...currentuser } = user._doc
                        const accesstoken = generateToken(currentuser)
                        return { ...currentuser, accesstoken }
                    }
                    else {
                        throw new Error('Email or password is not match.')
                    }

                } catch (error: any) {
                    throw new Error(error.message)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id
                token.name = user.name
                token.email = user.email
                token.accesstoken = user.accesstoken
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id?.toString()
                session.user.name = token.name
                session.user.email = token.email
            }
            return session
        }
    },
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    }
}
const handler = NextAuth(authOptions)

export { handler as POST, handler as GET }

