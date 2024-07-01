import 'next-auth';
import { DefaultSession } from 'next-auth';
declare module 'next-auth' {
    interface User {
        _id?: string
        name?: string
        email?: string
        accesstoken?: string
    }
    interface Session {
        user: {
            _id?: string
            accesstoken?: string
        } & DefaultSession['user']
    }
}