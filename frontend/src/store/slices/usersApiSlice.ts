import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../../utils/constants";


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserInfo, AuthUser>({
            query: (credentials) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: credentials,
                credentials: "include"
            })
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
                credentials: "include"
            })
        })
    })
})

export const { 
    useLoginMutation,
    useLogoutMutation
} = usersApiSlice