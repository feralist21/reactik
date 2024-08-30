import { ContactPage } from '@/pages/contact';
import { MainPage } from '@/pages/main';
import { createBrowserRouter } from 'react-router-dom';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
]);
