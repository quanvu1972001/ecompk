import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://locahost:8080"}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            url: "/user/signup",
            method: "POST",
            body: user,
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),
    })
})


export const {useSignupMutation, useLoginMutation} = appApi

export default appApi;