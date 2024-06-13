import Header from "@/components/dashboard/Header";

import Sidebar from "@/components/dashboard/Sidebar";


export default function Layout({ children }) {
    return (
        <div className="flex">
        <Sidebar />
            <main className="w-full bg-white/90">
                
            <Header/>{children}</main>
            
        </div>
        );
};

