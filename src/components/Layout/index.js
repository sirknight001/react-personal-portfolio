import React from "react";
import { Outlet } from "react-router-dom";
import ParticlesComponent from "../Particles";
import Sidebar from "../Sidebar";
import './index.scss'

export const Layout = () => {
    return (
    <>
    <div className="particles">
    <ParticlesComponent />
    </div>
    <div className="App">
        <Sidebar />
        <div className="page">
            <Outlet />
        </div>
    </div>
    </>
    )
}