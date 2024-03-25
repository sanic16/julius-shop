import { PRODUCTS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<FetchedProduct[], void>({
            query: () => ({
                url: PRODUCTS_URL
            }),
            keepUnusedDataFor: 300 * 1000
        }),
        getProduct: builder.query<FetchedProduct, string>({
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}`       
            }),
            keepUnusedDataFor: 300 * 1000
        }),
        getTopProducts: builder.query<FetchedProduct[], void>({
            query: () => ({
                url: `${PRODUCTS_URL}/top`
            }),
            keepUnusedDataFor: 24 * 60 * 60 * 1000
        })
       
    })
}) 

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useGetTopProductsQuery
} = productsApiSlice