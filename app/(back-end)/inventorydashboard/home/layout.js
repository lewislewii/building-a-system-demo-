import HomeNav from "@/components/dashboard/HomeNav";
import { HandshakeIcon } from "lucide-react";

export default function Layout({children}) {
    return (
    <div className="">
        <HomeNav/>
        {children}
    </div>
    )
}
