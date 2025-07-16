import React from "react";

export const HomePage = React.lazy(() => import("./Publics/HomePage"));
export const AboutPage = React.lazy(() => import("./Publics/AboutPage"));
export const ContactPage = React.lazy(() => import("./Publics/ContactPage"));
export const LoginPage = React.lazy(() => import("./Publics/LoginPage"));
export const RegisterPage = React.lazy(() => import("./Publics/RegisterPage"));
export const AdminLogin = React.lazy(() => import("./Publics/AdminLogin"));