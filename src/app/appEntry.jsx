import '@/shared/base.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './appStore';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <RouterProvider router={appRouter} />
        </ReduxProvider>
    </StrictMode>,
);
