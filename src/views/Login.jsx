import { useState, useContext } from 'react';
import { AuthData } from '../auth/AuthWrapper';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData.username, formData.password);
            navigate("/dashboard")
        } catch (err) {
            setError(err.message);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="login h-[100vh] font-roboto-flex text-center py-10 px-[7vw]">
                    <h2 className="text-white font-bold text-4xl mb-4">Log In</h2>
                    <p className="text-dark-200 text-md mb-20">Enter your valid credential for logging in</p>
                    <form className="w-[40vw] mx-auto" onSubmit={handleSubmit}>
                        <label className="block text-left text-white">Enter your username</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username}
                            onChange={handleInputChange}
                            spellCheck={false}
                            autoComplete="false"
                            className="w-full h-10 rounded bg-dark-400 border border-dark-300 mt-1 text-dark-200 outline-none px-2 mb-5"
                            required  
                        />

                        <label className="block text-left text-white">Enter your password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            spellCheck={false}
                            autoComplete="false"
                            className="w-full h-10 rounded bg-dark-400 border border-dark-300 mt-1 text-dark-200 outline-none px-2 mb-10"
                            required 
                        />

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <button 
                        type="submit"
                        className="block w-full h-15 rounded text-lg p-3 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold">
                        LOGIN
                        </button>
                        <p className="my-2 text-dark-200">Click on this link if you <a className="text-[#9222A5] underline underline-offset-2" href="">Forgot your credentials</a></p>
                    </form>
                </div>
        </>
    );
}
