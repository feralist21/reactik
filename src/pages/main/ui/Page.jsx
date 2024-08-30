import { useProductQuery } from './api';

export const MainPage = () => {
    const { data, isLoading } = useProductQuery();

    if (Boolean(isLoading) && !data) {
        return <div>Fetching...</div>;
    }

    return (
        <div className='container mx-auto py-2'>
            <h1 className='text-3xl font-bold underline'>Hello Reactik!</h1>
            <div className='grid grid-cols-6 gap-3'>
                {data.products.map((product) => (
                    <div className='w-full border-2 border-gray-500' key={product.id}>
                        <img src={product.thumbnail} alt='' />
                        <div className='p-2'>
                            <h2>{product.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
