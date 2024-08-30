import { baseApi } from '@/shared/api';

export const productListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        product: build.query({
            query: () => ({
                url: 'products',
            }),
        }),
    }),
});

export const { useProductQuery } = productListApi;
