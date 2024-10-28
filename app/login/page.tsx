import React from 'react';
import { Button, Input } from '@chakra-ui/react'

const Login = () => {
    return (
        <section className="min-h-screen flex items-center justify-center p-4 ">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section (Logo and Form) */}
                <div className="flex flex-col justify-center items-center bg-[#F8FBFF] p-8 rounded-lg">
                    <div className="mb-6 w-[150px] lg:w-[200px]">
                        <img 
                            src="https://quickpay.net/svg/logo.bdef3b1dd64854481f5a80ac7cd2cfc49fab4b308bae8431060f879355d25eda.svg/helloworld"
                            alt="QuickPay Logo" 
                            className="w-full"
                        />
                    </div>
                    <div className="w-full max-w-md bg-white shadow-custom p-10 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                        <p className='text-gray-400 font-normal mb-8 text-center'>Welcome Back! Please share your details</p>
                        <form className="flex flex-col gap-4">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email Address:
                            </label>
                            <Input 
                                type="email" 
                                id="email" 
                                placeholder="Enter your email" 
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="password" className="text-sm font-medium">
                                Password:
                            </label>
                            <Input 
                                type="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Section (Welcome Text and Image) */}
                <div className="bg-blue-500 hidden sm:flex text-white  flex-col justify-center items-center rounded-lg p-8 lg:p-12">
                    <div className="text-center max-w-lg">
                        <h1 className="text-3xl lg:text-5xl font-medium mb-6">
                            Welcome Back! <br />Please sign in to your account.
                        </h1>
                        <p className="mb-12">
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis pariatur dolore error neque, minus quod commodi iusto hic nisi consectetur nobis velit non repellat. */}
                            To access the dashboard, please log in to your account. After loggin, 
                            you’ll have full access to all features which is required.

                            <br />
                            <br />

                            The system is buolt for smooth operations, from inventory management to reporting and beyond, helping you for all your administrative needs.
                        </p>
                        <img 
                            src="https://assets.justinmind.com/wp-content/uploads/2020/02/dashboard-example-applify.png" 
                            alt="Dashboard Example" 
                            className="rounded-lg shadow-lg max-w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
