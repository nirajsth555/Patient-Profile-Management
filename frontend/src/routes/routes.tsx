import { createBrowserRouter } from 'react-router-dom';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../constants/routes";
import PublicRoutes from './PublicRoutes';
import Login from '../pages/auth/login';

export const Routes = createBrowserRouter([
    {
        path: PUBLIC_ROUTES.INDEX,
        element: <PublicRoutes />,
        children: [
            {
                path: PUBLIC_ROUTES.LOGIN,
                element: <Login />
            }
        ]
    }
])

