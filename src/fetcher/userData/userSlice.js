import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath : "user",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3002/"
    }),
    tagTypes : ["user"],
    endpoints : (builder)=>({
        getAllUser : builder.query({
            query : ()=>({
                url : "userInfo"
            }),
            providesTags : ["user"]
        }),
        updateUser : builder.mutation({
            query : (tData)=>{
                const {id} = tData;
               return (
                {url : `userInfo/${id}`,
                method : "put",
                body : tData}
               )
            },
            invalidatesTags : ['user']
        }),
        createUser : builder.mutation({
            query : (datas)=>({
                url : "userInfo",
                method : "post",
                body : datas
            }),
            invalidatesTags : ['user']
        }),
        deleteUser : builder.mutation({
            query : (id)=>({
                url : `userInfo/${id}`,
                method : "delete"
            }),
            invalidatesTags : ['user']
        })
    })
})

export const {useGetAllUserQuery, useUpdateUserMutation, useCreateUserMutation, useDeleteUserMutation} = apiSlice;