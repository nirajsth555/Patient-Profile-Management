import { Outlet, useLocation, Navigate } from "react-router-dom";
import AuthLayout from "../components/layout/auth/layout";
import { PUBLIC_ROUTES } from "../constants/routes";

export default function PublicRoutes() {
    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    )
}