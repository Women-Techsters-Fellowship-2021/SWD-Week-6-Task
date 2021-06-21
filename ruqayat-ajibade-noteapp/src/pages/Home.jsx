import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h2>This is the home page</h2>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </>
    )
}