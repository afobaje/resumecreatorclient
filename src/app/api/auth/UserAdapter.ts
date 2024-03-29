// import {type Adapter} from '@auth/core/adapters'
import axios, { AxiosResponse } from 'axios';
import { Awaitable, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { Adapter } from 'next-auth/adapters';

export function UserAdapter(): Adapter {

    const client = axios.create({
        baseURL: `http://localhost:3005`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return {
       
        createUser: async (user: Omit<AdapterUser, "id">) => {
            try {      
                console.log(user, 'alawiye')
                const response = await client.post('/api/createuser', user)
                console.log(response.data, 'value res')
                return response.data;
            } catch (error) {
                console.log(error,'error creating user')
            }
        },
        getUserByAccount: async (user) => {
            console.log(user, 'tune in')
            const response = await client.get('/api/getuser')
            console.log(response.data,'atotonu')
            return response.data;
        },
        getSessionAndUser: async (sessionToken: string) => {
            try {
                console.log(sessionToken, 'tune in pssumaas')
                const response = await client.get('/api/session')
                return response.data
            } catch (error) {
                console.log( 'please breathe, dont loose yourself')
            }
        },
        createSession: async (session: { sessionToken: string; userId: string; expires: Date }) => {
            const response = await client.post('/api/createsession', session);
            console.log(response.data,'gear')
            return response.data;
        },
        deleteSession: async (sessionToken: string) => {
            const response = await client.delete(`api/checkuser`)
            return response.data
        }

    }
}


