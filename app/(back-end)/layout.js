import Header from "@/components/dashboard/Header";

import Head from "next/head";


export default function Layout({ children }) {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-slate-900 text-slate-50">sidebar</div>
            <main className="w-full bg-slate-100 min--screen">
            <Header/>{children}</main>
            
        </div>
        );
};

