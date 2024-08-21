"use client"
import Link from 'next/link'
import { Menu, Package2 } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import DarkModeToggle from '@/components/dark-mode-toggle'
import NavItems from '@/app/(public)/nav-items'
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const router = useRouter()
    const onLogin = () => {
        router.push('/pages/login')
    }
    return (
        <div className='flex min-h-screen w-full flex-col relative' style={{ background: "#fff", }}>
            <header style={{ backgroundColor: '#221c38' }} className='sticky flex h-20 items-center gap-4   px-4 md:px-6'>
                <nav className='hidden flex justify-around w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
                    <Link href='#' className='flex items-center gap-2 text-lg font-semibold md:text-base'>
                        <Image width={30} height={30} src="/images/flash.png" alt="" /><span style={{ fontSize: 20 }}>GoStock</span>
                    </Link>
                    <Box>
                        <NavItems className='text-white transition-colors hover:text-gray-400 flex-shrink-0 m-5 md:text-[14px] lg:text-[16px]' />
                    </Box>
                    <Box>
                        <Button onClick={onLogin} color="primary" className="rounded-full normal-case md:w-[80px] lg:w-[110px] font-normal lg:h-[40px] md:h-[35px] bg-[#221c38] text-white md:text-[14px] lg:text-[16px]">
                            Login
                        </Button>
                        <Button onClick={onLogin} color="primary" className="rounded-full normal-case md:w-[80px] lg:w-[110px] font-normal lg:h-[40px] md:h-[35px] bg-[#3b3356] text-white md:text-[14px] lg:text-[16px] ml-5">
                            Sign Up
                        </Button>
                    </Box>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className='shrink-0 md:hidden'>
                            <Menu className='h-5 w-5' />
                            <span className='sr-only'>Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left'>
                        <nav className='grid gap-6 text-lg font-medium'>
                            <Link href='#' className='flex items-center gap-2 text-lg font-semibold md:text-base'>
                                <Image width={30} height={30} src="/images/flash.png" alt="" /><span style={{ fontSize: 20 }}>GoStock</span>
                            </Link>
                            <NavItems className='flex flex-col mt-10 text-muted-foreground transition-colors hover:text-foreground' />
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
            <main className='flex flex-1 flex-col gap-4 md:gap-8'>{children}</main>
            <footer className="w-full flex-col items-center flex justify-center text-black mt-6">
                <div className="w-[80%] md:flex justify-between">
                    <div>
                        <div className=" flex items-center font-semibold">
                            <img src="/images/flash_black.png" alt="" /><span className="text-2xl ml-2">GoStock</span>
                        </div>
                        <div className="text-black mt-8">
                            <Typography className="lg:text-[16px]">Technology Park</Typography>
                            <Typography className="lg:text-[16px]">8-14 Marie Cuire Street</Typography>
                            <Typography className="lg:text-[16px]">08042 Barcelona</Typography>
                            <div className="mt-10">
                                <Link href='#' className="lg:text-[16px] font-semibold"><u>gostrock@example.com</u></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center">
                            <Typography className="text-2xl mt-2 md:mt-0 font-semibold">Platform</Typography>
                        </div>
                        <div className="text-black mt-8">
                            <Typography className="lg:text-[16px] mt-2">Analytics</Typography>
                            <Typography className="lg:text-[16px] mt-2">Planning</Typography>
                            <Typography className="lg:text-[16px] mt-2">Collaboration</Typography>
                            <Typography className="lg:text-[16px] mt-2">Data Management</Typography>
                            <Typography className="lg:text-[16px] mt-2">Integrations</Typography>
                            <Typography className="lg:text-[16px] mt-2">Security</Typography>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center">
                            <Typography className="text-2xl mt-2 md:mt-0 font-semibold">Resources</Typography>
                        </div>
                        <div className="text-black mt-8">
                            <Typography className="lg:text-[16px] mt-2">Customers</Typography>
                            <Typography className="lg:text-[16px] mt-2">Strategic Finance</Typography>
                            <Typography className="lg:text-[16px] mt-2">Ebook & Guides</Typography>
                            <Typography className="lg:text-[16px] mt-2">Webinars & Events</Typography>
                            <Typography className="lg:text-[16px] mt-2">Podcast & Video</Typography>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center">
                            <Typography className="text-2xl mt-2 md:mt-0 font-semibold">Solutions</Typography>
                        </div>
                        <div className="text-black mt-8">
                            <Typography className="lg:text-[16px] mt-2">Financial</Typography>
                            <Typography className="lg:text-[16px] mt-2">Investors & CEOs</Typography>
                            <Typography className="lg:text-[16px] mt-2">Revenue Operations</Typography>
                            <Typography className="lg:text-[16px] mt-2">Sales & Marketing</Typography>
                            <Typography className="lg:text-[16px] mt-2">Human Resource</Typography>
                        </div>
                    </div>
                    <div>
                        <div className=" flex items-center">
                            <Typography className="text-2xl mt-2 md:mt-0 font-semibold">Resources</Typography>
                        </div>
                        <div className="text-black mt-8">
                            <Typography className="lg:text-[16px] mt-2">Customers</Typography>
                            <Typography className="lg:text-[16px] mt-2">Strategic Finance</Typography>
                            <Typography className="lg:text-[16px] mt-2">Ebook & Guides</Typography>
                            <Typography className="lg:text-[16px] mt-2">Webinars & Events</Typography>
                            <Typography className="lg:text-[16px] mt-2">Podcast & Video</Typography>
                            <Typography className="lg:text-[16px] mt-2">Matrics Catalog</Typography>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[6vh] bg-black mt-10 md:mt-20 text-sm md:text-[16px] flex justify-center text-white items-center">
                    @ 2022 COPYRIGHT - GOSTOCK
                </div>
            </footer>
        </div >
    )
}
