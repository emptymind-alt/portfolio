import React from "react";
import {BrowserRouter, Routes, Route,Link,Outlet, Navigate} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EventPage from "./Components/EventPage";
import EventForm from "./Components/EventForm";
import {getUser} from "./user";
import './main.css';
import Footer from "./Footer";


function Interests() {
    return (
      
        <div className="login">
           

            <Routes>
                <Route path="/Interests" element={<Login/>}>
                </Route>
               
                <Route path="/register" element={<Register/>}>
                </Route>
                
                <Route path="/events" element={
                    <PrivateRoute>
                        <EventPage/>
                    </PrivateRoute>
                }>
                </Route>
               
                <Route path="/events/new" element={
                    <PrivateRoute>
                        <EventForm/>
                    </PrivateRoute>
                }>
                </Route>
               
                <Route path="/events/:id" element={
                    <PrivateRoute>
                        <EventForm/>
                    </PrivateRoute>
                }>
                </Route>
            </Routes>

          
            </div>
      
    );
}

function PrivateRoute({children}) {
    const user = getUser();
    return user ? children : <Navigate to="/Interests"/>;
}

export default Interests;