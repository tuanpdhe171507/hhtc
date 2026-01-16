import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page;
                        const isCheckAuth = !route.isPrivate; // || user.isAdmin;
                        return isCheckAuth ? (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Fragment>
                                        <Page />
                                    </Fragment>
                                }
                            />
                        ) : null;
                    })}
                </Routes>
            </Router>
        </div>
    );
}
