import { useUserContext } from "../context/UserContext";

export default function Homepage() { // Save in pages/Homepage.jsx

    const { currentUser } = useUserContext();

    return (
        <div className="Homepage">
            <h1>Welcome, {currentUser.firstName}</h1>
        </div>
    )
}