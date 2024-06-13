"use client";
import { HeartHandshakeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HomeNav() {
    const pathname = usePathname();
    console.log(pathname)
    const navLinks = [
        {
            title: "Dashboard",
            href: "/inventorydashboard/home/overview",
        },
        {
            title: "Getting Started",
            href: "/inventorydashboard/home/gettingstarted",
        },
        {
            title: "Recent Updates",
            href: "/inventorydashboard/home/updates",
        },
        {
            title: "Announcements",
            href: "/inventorydashboard/home/announcements",
        }
        
    ];
    return (
    <div className='h-32 p-5 bg-slate-200/70 border border-slate-500'>
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 rounded-lg bg-gray-900 items-center justify-center">
                <HeartHandshakeIcon className='text-white' size={100}/>
            </div>
            <div className="flex flex-col font-semibold  text-3xl ">
                <p>Hello....</p>
                <span className='text-sm'>@@@</span>
            </div>
        </div>
        <nav className='sticky mt-1 flex space-x-6'>
            {navLinks.map((item,i) => {
                return (
                <Link key={i} href={item.href} className={`${pathname===item.href? "py-2  border-b-2 border-blue-600" : "py-2"}`}>
                    {item.title}
                </Link>)
            })
            }</nav>
    </div>
    )
}
