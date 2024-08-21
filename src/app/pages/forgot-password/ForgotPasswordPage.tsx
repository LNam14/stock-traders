"use client"
import authApiRequest from '@/apiRequests/auth'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import 'antd/dist/reset.css';
import { toast } from '@/components/ui/use-toast'

const { Title, Text } = Typography;

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [id, setId] = useState("")
    const onBackToLogin = () => {
        router.push('/pages/login')
    }

    const onCheckEmail = async (email: string) => {
        setLoading(true);
        setError(null);
        try {
            const result = await authApiRequest.login();
            if (result.data) {
                const user = result.data.find((user: any) => user.email === email);
                if (user) {
                    setId(user.id)
                    setIsActive(true)
                } else {
                    toast({
                        description: "Email không tồn tại"
                    })
                }
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const onForgotPassword = async (values: any) => {
        setLoading(true);
        setError(null);
        try {
            const result = await authApiRequest.resetPassword(values.newPassword, id);
            if (result) {
                toast({ description: "Thay đổi mật khẩu thành công" });
                router.push('/pages/login')
            }

        } catch (error) {
            console.error('Password reset error:', error);
            setError('An error occurred. Please try again.');
            toast({ description: "Failed to reset password. Please try again." });
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = (values: any) => {
        if (isActive) {
            onForgotPassword(values)
        } else {
            onCheckEmail(values.email);
        }

    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-3xl h-[50vh]">
                <div className="flex flex-col items-center justify-center mt-10">
                    <img src="/images/key.png" className="w-[36px]" />
                    <Title level={2} className="text-black font-bold mb-1 mt-2">Forgot password?</Title>
                    <Text className="text-sm text-[#909090] mb-4">Don&apos;t worry, we&apos;ll send you reset instructions</Text>
                    <Form
                        onFinish={handleSubmit}
                        className='flex flex-col w-[90%]'
                    >
                        {!isActive && (
                            <Form.Item
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-[#F0F0F0] border border-slate-500 text-[#6E6E6E] rounded-lg p-3 mb-2 w-full text-sm outline-none"
                                />
                            </Form.Item>
                        )}
                        {!isActive && (
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="bg-[#221c38] normal-case h-10"
                            >
                                Reset password
                            </Button>
                        )}
                        {isActive && (
                            <>
                                <Form.Item
                                    name="newPassword"
                                    rules={[{ required: true, message: 'Please input your new password!' }]}
                                >
                                    <Input.Password
                                        placeholder="Enter your new password"
                                        className="bg-[#F0F0F0] border border-slate-500 text-[#6E6E6E] rounded-lg p-3 mb-1 w-full text-sm outline-none"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="confirmPassword"
                                    rules={[
                                        { required: true, message: 'Please confirm your new password!' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('newPassword') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Mật khẩu không khớp'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password
                                        placeholder="Confirm new password"
                                        className="bg-[#F0F0F0] border border-slate-500 text-[#6E6E6E] rounded-lg p-3 mb-1 w-full text-sm outline-none"
                                    />
                                </Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    className="bg-[#221c38] normal-case h-10"
                                >
                                    Confirm
                                </Button>
                            </>
                        )}
                        {!isActive && (
                            <Button
                                type="link"
                                onClick={onBackToLogin}
                                className="text-[#221c38] normal-case mt-4 flex items-center"
                            >
                                <ArrowLeftOutlined className="mr-2" /> Back to login
                            </Button>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    )
}
