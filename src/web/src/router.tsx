import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from './layouts/SidebarLayout';
import BaseLayout from './layouts/BaseLayout';

import SuspenseLoader from './components/SuspenseLoader';
import { ProtectedRoute } from './guards/ProtectedRoute/ProtectedRoute';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Home = Loader(lazy(() => import('src/content/home')));
const Login = Loader(lazy(() => import('src/content/user/Login/Login')));

// Dashboards

const OverviewDashboard = Loader(lazy(() => import('src/content/dashboards/overview')));

// Components

const Buttons = Loader(lazy(() => import('src/content/pages/Components/Buttons')));
const Modals = Loader(lazy(() => import('src/content/pages/Components/Modals')));
const Accordions = Loader(lazy(() => import('src/content/pages/Components/Accordions')));
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(lazy(() => import('src/content/pages/Components/Badges')));
const Tooltips = Loader(lazy(() => import('src/content/pages/Components/Tooltips')));
const Avatars = Loader(lazy(() => import('src/content/pages/Components/Avatars')));
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('src/content/pages/Status/Status500')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Navigate to="overview" replace />
          </ProtectedRoute>
        )
      },
      {
        path: 'overview',
        element: (
          <ProtectedRoute>
            <OverviewDashboard />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];

export default routes;
