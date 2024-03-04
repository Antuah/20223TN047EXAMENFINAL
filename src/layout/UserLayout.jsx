import React from 'react';
import { useContext } from "react";
import AuthContext from "../config/context/auth.context";
import AxiosClient from "../config/http-client/axios-client";
import { useFormik } from "formik";
import { Button } from "flowbite-react";
const UserLayout = () => {
    const { user, dispatch } = useContext(AuthContext);
    return (
        <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Bienvenido: {user.user.person.name} {user.user.person.surname}
            </h1>
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                Tu tienes el rol de: {user.user.roles[0].name}
            </h2>
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                Tu usuario es: {user.user.username}
            </h2>
        </div>
    );
};



export default UserLayout;
