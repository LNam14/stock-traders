"use client"
import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { Apple, CircleCheck, Download, Play, Sparkles } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div>
            <div className='font-[MyFont] relative w-full min-h-[70vh] md:min-h-[83vh] bg-gradient-to-b from-[#241c41] to-[#17122b] flex items-center justify-center'>
                <div className='absolute inset-0 px-4 background-gradient'>
                    <div className='vertical-lines flex flex-col items-center justify-center text-center'>
                        <div className="mb-20" data-aos="fade-right">
                            <article className="text-nowrap ...">
                                <Typography
                                    variant="h1"
                                    component="h2"
                                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] xl:text-[5.5rem] font-bold mt-20 md:mt-5 break-words h-auto "
                                >
                                    Easily invest in stocks and crypto
                                </Typography>
                            </article>
                            <Typography variant="h1" component="h2" className="text-white mt-0 md:mt-2 xl:mt-14 lg:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] xl:text-[5.5rem] font-bold break-words">
                                in one <span className="gradient-text">GoStock platform</span>
                            </Typography>
                            <Typography className="text-[#9590ab] mt-4 text-base md:text-lg lg:mt-8 lg:text-xl">
                                Get all the conveniences of investing in stocks or cryptocurrencies in one
                            </Typography>
                            <Typography className="text-[#9590ab] text-base md:text-lg lg:text-xl">
                                GoStock platform. Now you can use this app in desktop version
                            </Typography>
                            <div className="mt-6 flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
                                <Button
                                    variant='outlined'
                                    style={{ textTransform: "none" }}
                                    className="text-white border-white font-semibold text-base md:text-lg lg:text-xl rounded-full px-6 py-2 border-2"
                                >
                                    How it works
                                </Button>
                                <Button
                                    variant='contained'
                                    style={{ textTransform: "none" }}
                                    color='inherit'
                                    className="text-[#221c38] bg-white font-semibold text-base md:text-lg lg:text-xl rounded-full px-6 py-2 mt-4 md:mt-0 flex items-center"
                                >
                                    Get app now <Download className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="lg:min-h-[95vh] md:min-h-[63vh] flex justify-center bg-[#f7f9fc]">
                    <div className="w-full md:w-[75%] sm:w-[80%] relative md:relative lg:w-[75%]" data-aos="fade-right">
                        <img src="/images/dashboard.jpeg" alt="dashboard" className="top-0 sm:top-[-80px] rounded-2xl md:top-[-50px] lg:top-[-130px] relative md:absolute" />
                    </div>
                </div>
                <div className="w-full bg-[#f7f9fc] flex justify-center">
                    <div className="lg:w-[75%] flex justify-between md:w-[75%] w-full mb-12" data-aos="fade-right">
                        <img className="w-12" src="/images/two_circle.png" />
                        <img className="w-12" src="/images/visa.png" />
                        <img className="w-12" src="/images/visa.png" />
                        <img className="w-12" src="/images/visa.png" />
                        <img className="w-12" src="/images/visa.png" />
                        <img className="w-12" src="/images/visa.png" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20 mb-20">
                <div className="w-[75%] md:flex">
                    <div className="md:w-[50%] flex justify-center" data-aos="flip-left">
                        <div className="md:w-[80%]">
                            <img className="rounded-3xl mb-5" src="/images/anh2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="md:w-[50%] sm:mt-10 flex justify-center" data-aos="fade-right">
                        <div className="w-[80%]">
                            <Typography className="font-[MyFont] font-semibold leading-none text-black text-[2rem] lg:text-[3.5rem] md:text-[2.5rem]">Easily monitor stock movements on <span className="gradient-text1">GoStock</span></Typography>
                            <Typography className="text-[#9590ab] mt-4 text-base md:text-lg lg:mt-8 lg:text-xl">
                                Monitor the stocks you are after in real time and of course easily and accurately
                            </Typography>
                            <Typography className="flex items-center text-[#9590ab] mt-0 text-base md:text-lg lg:mt-6 sm:text-[1rem] lg:text-xl">
                                <CircleCheck className="mr-5 size-9" />  Monitor stocks easily and accurately
                            </Typography>
                            <Typography className="flex items-center text-[#9590ab] mt-0 text-base md:text-lg lg:mt-3  lg:text-xl">
                                <CircleCheck className="mr-5 size-9" />  Monitor stocks easily and accurately
                            </Typography>
                            <Button
                                variant='contained'
                                style={{ textTransform: "none" }}
                                color='primary'
                                className="text-[#221c38] bg-black text-white mt-8 font-semibold text-base md:text-lg lg:text-xl rounded-full px-6 py-2 mt-4 md:mt-8 flex items-center"
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20 mb-20">
                <div className="w-[75%] md:flex">
                    <div className="md:w-[50%] flex justify-center" data-aos="slide-up">
                        <div className="w-[80%]">
                            <Button
                                variant='contained'
                                style={{ textTransform: "none" }}
                                color='inherit'
                                className="sm:w-full text-[#221c38] bg-white text-black mt-8 text-base md:text-md lg:text-lg rounded-full px-6 py-1 mt-4 md:mt-8 flex items-center"
                            >
                                GET A LOT OF INVESTMENT EASY
                            </Button>
                            <Typography className="font-[MyFont] font-semibold leading-none text-black text-[2rem] lg:text-[3.5rem] md:text-[2.5rem] mt-12">A wide variety of stocks from all over the world</Typography>
                            <div className="w-full flex mt-4">
                                <Typography className="w-[50%] flex items-start text-[#9590ab] font-semibold mt-0 sm:text-[0.9rem] md:text-[0.9rem] lg:mt-3 lg:text-base">
                                    <Sparkles className="md:mr-5 sm:mr-2 md:mt-[-30px] sm:mt-[-22px] md:size-24 sm:size-16" />  Starting from local stocks, US stocks you can find and you can buy here
                                </Typography>
                                <Typography className="w-[50%] flex items-start text-[#9590ab] font-semibold mt-0 sm:text-[0.9rem] md:text-[0.9rem] lg:mt-3 lg:text-base">
                                    <Sparkles className="md:mr-5 sm:mr-2 md:mt-[-30px] sm:mt-[-22px] md:size-24 sm:size-16" />  You can buy international stocks easily and quickly only on GoStock
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[50%] flex justify-center mt-5 md:mt-0" data-aos="fade-right">
                        <div className="md:w-[80%]">
                            <img className="rounded-3xl" src="/images/anh1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20 mb-20" data-aos="zoom-out">
                <div className="w-[75%]">
                    <Typography className="font-[MyFont] leading-none lg:w-[60%] md:w-[80%] sm:w-[100%] font-semibold text-black text-[2rem] lg:text-[3.5rem] md:text-[2.5rem]">Find the most suitable stock for you to buy now</Typography>
                    <img className='mt-10 rounded-3xl shadow-xl' src="/images/anh3.jpg" alt="" />
                </div>
            </div>
            <div className="border-[#E0E0E0] border-b w-full flex justify-center mt-20 mb-20 pb-20" data-aos="flip-up">
                <div className="w-[75%] flex justify-center">
                    <div>
                        <div className="flex justify-center">
                            <Button
                                variant='contained'
                                style={{ textTransform: "none" }}
                                color='inherit'
                                className="text-[#221c38] bg-white text-black mt-8 text-base md:text-md lg:text-lg rounded-full px-6 py-2 mt-4 md:mt-8 flex items-center"
                            >
                                GET THE APP FOR FREE
                            </Button>
                        </div>
                        <div className="w-full flex justify-center text-center">
                            <Typography className="font-[MyFont] font-semibold w-[100%] lg:w-[70%]  leading-none text-black text-[2rem] lg:text-[3.5rem] md:text-[2.5rem] mt-7">
                                Download the application and feel the ease of investing
                            </Typography>
                        </div>
                        <div className="w-full flex justify-center text-center">
                            <Typography className="lg:w-[60%] w-[100%] text-[#9590ab] mt-8 text-lg md:text-base  lg:text-lg">
                                You can now use the GoStock application in the mobile version. Yon can get the app in the App Store or Play Store. Download now and feel the convenience!
                            </Typography>
                        </div>
                        <div className="w-full flex justify-center mt-8 ">
                            <Button className="pb-2 h-[46px] border-2 border-black text-black normal-case flex items-center text-left" variant='outlined'>
                                <Apple className="mr-2 size-6 md:size-8" />
                                <div className="flex flex-col justify-center">
                                    <Typography className="mt-2 text-[0.6rem] md:text-xs font-semibold">
                                        Download on the
                                    </Typography>
                                    <Typography className="text-[0.8rem] md:text-lg font-semibold">
                                        App Store
                                    </Typography>
                                </div>
                            </Button>
                            <Button className="pb-2 ml-10 border-2 h-[46px] border-black text-black normal-case flex items-center text-left" variant='outlined'>
                                <Play className="mr-2 size-6 md:size-8" />
                                <div className="flex flex-col justify-center">
                                    <Typography className="mt-2 text-[0.6rem] md:text-xs font-semibold">
                                        GET IT ON
                                    </Typography>
                                    <Typography className="text-[0.8rem] md:text-lg font-semibold">
                                        Google Play
                                    </Typography>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
