import { AuthPage } from "./Pages/Auth/AuthPage.jsx";
import { Dashboard } from "./Pages/Dashboard/Dashboard.jsx";

export const routes = [
    {path: '/auth', element: <AuthPage />},
    {path: '/*', element: <Dashboard />}
]