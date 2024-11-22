'use client';

import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Adjusted for Pages Router (if you're using App Router, keep it as is)

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter(); // For navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('https://lekha.pcubedigitech.com/api/core/login', {
                email,
                password,
            });

            const { token, user } = response.data;
            console.log('Login successful:', { token, user });

            // Save the token in localStorage
            localStorage.setItem('token', token);

            // Set the token in axios headers for subsequent requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Redirect to the dashboard page
            router.push('/dashboard');
            
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container mx-auto grid grid-cols-1 gap-8">
                <div className="flex flex-col justify-center items-center bg-[#F8FBFF] p-8 rounded-lg">
                    <div className="mb-6 w-[150px] lg:w-[200px]">
                        <img
                            src="https://quickpay.net/svg/logo.bdef3b1dd64854481f5a80ac7cd2cfc49fab4b308bae8431060f879355d25eda.svg"
                            alt="QuickPay Logo"
                            className="w-full"
                        />
                    </div>
                    <div className="w-full max-w-md bg-white shadow-custom p-10 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                        <p className="text-gray-400 font-normal mb-8 text-center">
                            Welcome Back! Please enter your login details.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email Address:
                            </label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="password" className="text-sm font-medium">
                                Password:
                            </label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <Button
                                type="submit"
                                colorScheme="purple"
                                isLoading={loading}
                                className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
