import './App.css';
import Nav from "./pages/layouts/Nav";
import Footer from "./pages/layouts/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="App">
            {/*Spinner Start*/}
            {/*<div id="spinner"*/}
            {/*     className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
            {/*    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">*/}
            {/*        <span className="sr-only">Loading...</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* Spinner End */}


            {/* Navbar Start */}
            <Nav/>
            {/* Navbar End */}


            <Outlet/>


            {/* Footer Start */}
            <Footer/>
            {/* Footer End */}


            {/* Back to Top */}
            <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default Layout;
