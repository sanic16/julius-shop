import { PRODUCTS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<FetchedProduct[], void>({
            query: () => ({
                url: PRODUCTS_URL
            }),
            keepUnusedDataFor: 300
        }),
        getProduct: builder.query<FetchedProduct, string>({
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}`       
            }),
            keepUnusedDataFor: 300
        })
       
    })
}) 

export const {
    useGetProductsQuery,
    useGetProductQuery
} = productsApiSlice