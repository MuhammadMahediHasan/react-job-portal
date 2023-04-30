import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import JobCategory from "./pages/JobCagegory";
import Testimonial from "./pages/Testimonial";
import Login from "./pages/auth/Login";
import EmployerRegister from "./pages/auth/EmployerRegister";
import JobSeekerRegister from "./pages/auth/JobSeekerRegister";
import {Profile} from "./pages/profile/Profile";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="job-list" element={<JobList/>}/>
                    <Route path="job-details" element={<JobDetails/>}/>
                    <Route path="job-category" element={<JobCategory/>}/>
                    <Route path="testimonial" element={<Testimonial/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="employer/register" element={<EmployerRegister/>}/>
                    <Route path="job-seeker/register" element={<JobSeekerRegister/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
