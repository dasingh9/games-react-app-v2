import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import GamesComponent from "./games/GamesComponent";
import UserService from '../services/UserService';
import { Flexbox } from "./shared/Flexbox";
import { Container } from "./shared/container/Container";
import Clock from "./Clock";

export function LoginForm() {
    const { currentUser, handleUpdateUser } = useUserContext();
    const [userLoginStatusMessage, setUserLoginStatusMessage] = useState('');
    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const inputUser = Object.fromEntries(data);

        try {
            const user = UserService.authenticate(inputUser.email, inputUser.password);
            setUserLoginStatusMessage("Successfully logged in");
            handleUpdateUser(user);
            //navigate("/home");
        }
        catch (error) {
            setUserLoginStatusMessage("Login failed");
        }
    }

    return (
        <Flexbox>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Sign In</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Sign In
                                </button>
                            </form>

                            {userLoginStatusMessage && (
                                <div className="alert alert-info text-center mt-3">
                                    {userLoginStatusMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {currentUser?.email && (
                <div className="mt-4" style={{textAlign:"center"}}>
                    The user details are now available in the context. <br />
                </div>
            )}
        </div>
        </Flexbox>
    );

}