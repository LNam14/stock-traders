"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SocialIcons from '@/components/social-icons';
import "./login.css";
import authApiRequest from '@/apiRequests/auth';
import { toast } from '@/components/ui/use-toast';
import { Form, Input, Button } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(true);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleToggle = () => {
        setIsActive(!isActive);
        form.resetFields(); // Reset all form fields on toggle
        setError(null); // Clear error on toggle
    };

    const handleForgotPassword = () => {
        router.push('/pages/forgot-password');
    };

    const handleRegister = async (values: any) => {
        setLoading(true);
        setError(null);

        try {
            const resultUser = await authApiRequest.login();

            if (resultUser.data) {
                const user = resultUser.data.find((user: any) => user.email === values.email);
                if (user) {
                    toast({
                        description: "Email đã được sử dụng",
                    });
                    return;
                }
            }

            const result = await authApiRequest.register(values);
            if (result.statusText === "Created") {
                form.resetFields(); // Reset form fields on successful registration
                setIsActive(true);
                toast({
                    description: "Đăng ký thành công",
                });
            }

        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (values: any) => {
        setLoading(true);
        setError(null);

        try {
            const result = await authApiRequest.login();
            if (result.data) {
                const user = result.data.find((user: any) => user.email === values.email && user.password === values.password);
                if (user) {
                    toast({
                        description: "Đăng nhập thành công",
                    });
                    router.push("/manage/dashboard");
                } else {
                    toast({
                        description: "Tài khoản hoặc mật khẩu không chính xác",
                    });
                }
            } else {
                toast({
                    description: "Tài khoản hoặc mật khẩu không chính xác",
                });
            }
        } catch (error) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const onFinish = (values: any) => {
        if (isActive) {
            handleLogin(values);
        } else {
            handleRegister(values);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-3xl h-[60vh]">
                <div className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-500 ease-in-out ${!isActive ? 'translate-x-full' : 'translate-x-0'}`}>
                    <div className="h-full flex items-center justify-center">
                        <Form
                            form={form}
                            onFinish={onFinish}
                            className="bg-white flex flex-col items-center justify-center p-10 w-full max-w-sm"
                        >
                            <h1 className="text-2xl text-black font-bold mb-2">{isActive ? "Sign In" : "Create Account"}</h1>
                            <SocialIcons />
                            <span className="text-sm text-[#909090] mb-4">{isActive ? 'or use your email password' : 'or use your email for registration'}</span>
                            {!isActive && (
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input
                                        placeholder="Name"
                                        className="bg-[#E7E7E7] text-[#6E6E6E] rounded-lg p-3 mb-2 w-[200px] w-[300px] text-sm outline-none"
                                    />
                                </Form.Item>
                            )}
                            <Form.Item
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input
                                    placeholder="Email"
                                    className="bg-[#E7E7E7] text-[#6E6E6E] rounded-lg p-3 mb-2 w-[200px] md:w-[300px] text-sm outline-none"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                    className="bg-[#E7E7E7] text-[#6E6E6E] rounded-lg p-3 mb-2 w-[200px] md:w-[300px] text-sm outline-none"
                                />
                            </Form.Item>
                            {isActive && (
                                <span onClick={handleForgotPassword} className="cursor-pointer text-sm text-[#909090] mb-2 mt-2">Forgot Password?</span>
                            )}
                            {error && <p className="text-red-500 mb-2">{error}</p>}
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="w-[200px] md:w-[300px] h-10 background-gradient text-white text-sm px-12 py-2 mt-2 rounded-lg cursor-pointer"
                                    loading={loading}
                                >
                                    {isActive ? "Sign In" : "Sign Up"}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className={`absolute top-0 ${!isActive ? 'rounded-r-full' : 'rounded-l-full'} right-0 w-1/2 h-full transition-transform duration-500 ease-in-out ${!isActive ? '-translate-x-full' : 'translate-x-0'} transitionus bg-[#606bfa] background-gradient text-white`}>
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                        <h1 className="text-2xl font-bold mb-4">{isActive ? "Hello, Friend" : "Welcome Back!"}</h1>
                        <p className="text-sm mb-4">Enter your personal details to use all of site features</p>
                        <Button
                            type="default"
                            onClick={handleToggle}
                            className="text-sm px-12 py-2 mt-2 rounded-lg cursor-pointer"
                        >
                            {isActive ? "Sign Up" : "Sign In"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
