import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const MainСontainer = lazy(() =>
    import('../components/containers/MainСontainer/MainСontainer'),
);
const PrivateContainer = lazy(() =>
    import('../components/containers/PrivateContainer/PrivateContainer'),
);
const ProfilePage = lazy(() =>
    import('../components/pages/ProfilePage/ProfilePage'),
);
const DiaryPage = lazy(() => import('../components/pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() =>
    import('../components/pages/ProductsPage/ProductsPage'),
);
const ExercisesPage = lazy(() =>
    import('../components/pages/ExercisesPage/ExercisesPage'),
);

import { Welcome } from '../components/global/Welcome';
import { SignUp } from '../components/auth/SignUp';
import { SignIn } from '../components/auth/SignIn';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const routes = {
    MAIN_ROUTE: '/',
    WELCOME_ROUTE: '/welcome',
    SIGNUP_ROUTE: '/signup',
    SIGNIN_ROUTE: '/signin',
    PROFILE_ROUTE: '/profile',
    DIARY_ROUTE: '/diary',
    PRODUCTS_ROUTE: '/products',
    EXERCISES_ROUTE: '/exercises',
};

const appRoutes = [
    {
        path: routes.MAIN_ROUTE,
        element: (
            <RestrictedRoute>
                <Navigate to={routes.WELCOME_ROUTE} replace />
            </RestrictedRoute>
        ),
    },
    {
        path: routes.WELCOME_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <Welcome />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNUP_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <SignUp />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNIN_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <SignIn />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.PROFILE_ROUTE,
        element: (
            <PrivateRoute>
                <PrivateContainer>
                    <ProfilePage />
                </PrivateContainer>
            </PrivateRoute>
        ),
    },
    {
        path: routes.DIARY_ROUTE,
        element: (
            <PrivateRoute>
                <PrivateContainer>
                    <DiaryPage />
                </PrivateContainer>
            </PrivateRoute>
        ),
    },
    {
        path: routes.PRODUCTS_ROUTE,
        element: (
            <PrivateRoute>
                <PrivateContainer>
                    <ProductsPage />
                </PrivateContainer>
            </PrivateRoute>
        ),
    },
    {
        path: routes.EXERCISES_ROUTE,
        element: (
            <PrivateRoute>
                <PrivateContainer>
                    <ExercisesPage />
                </PrivateContainer>
            </PrivateRoute>
        ),
    },
];

export { routes };

export default appRoutes;
