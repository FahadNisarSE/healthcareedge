import { Navigate } from "react-router-dom"

import './Notfound.css';

export default function NotAuthorized() {
    return (
        <div className="error-page blue-gradient">
            <div className="oops">Oops!</div>
            <h1 className="error-msg">403-Not Authorized</h1>
            <p className="error-detail">Your are not authorized to view this page please Login or Change Role.</p>
            <button className="error-page-button main-bg" onClick={<Navigate to='/'/>}>GO TO LOGIN</button>
        </div>
    )
}
