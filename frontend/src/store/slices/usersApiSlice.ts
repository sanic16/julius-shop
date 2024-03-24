import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../../utils/constants";


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserInfo, AuthUser>({
            query: (credentials) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const { 
    useLoginMutation
} = usersApiSlice