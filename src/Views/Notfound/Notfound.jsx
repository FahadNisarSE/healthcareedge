import { useNavigate } from "react-router-dom";

import './Notfound.css';

export default function NotAuthorized() {
    let Navigate = useNavigate()

    return (
        <div className="error-page">
            <div className="oops blue-gradient">Oops!</div>
            <h2 className="error-msg">404-Page not found</h2>
            <p className="error-detail">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <button className="error-page-button main-bg" onClick={() => { Navigate('/') }}>GO TO HOMEPAGE</button>
        </div>
    )
}