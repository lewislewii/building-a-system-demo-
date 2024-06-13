import { BaggageClaimIcon, BrainIcon, CircleChevronLeftIcon, PackageSearchIcon } from "lucide-react";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";
import { FcMoneyTransfer, FcSalesPerformance } from "react-icons/fc";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbReportAnalytics } from "react-icons/tb";

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-slate-900 text-slate-50">
        {/* top */}
            <div className="flex flex-col">
                {/* logo  */}
                <div className=" flex items-center min-h-8 p-6 ">
                    <PackageSearchIcon className="text-teal-400 w-10 h-10 m-2"/>
                    <span> LNG TECHNOLOGYZ</span>
                </div>
                <hr />

                <div className="flex items-center p-2 ">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2 ">
                        <SiHomeassistantcommunitystore className="  m-2 w-5 h-5"/>
                        <span> Home </span>
                    </Link>
                </div>

                <div className="flex items-center p-2">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2">
                        <BaggageClaimIcon className="m-2 w-5 h-5 "/>
                        <span> Inventory </span>
                    </Link>
                </div>

                <div className="flex items-center p-2">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2">
                        <FaShopify className="m-2 w-5 h-5 "/>
                        <span> Purchases </span>
                    </Link>
                </div>

                <div className="flex items-center p-2 ">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2">
                        <TbReportAnalytics className="m-2 w-5 h-5 "/>
                        <span> Report </span>
                    </Link>
                </div>
                </div>

                <div className="flex items-center p-2">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2">
                        <BrainIcon className="m-2 w-5 h-5 "/>
                        <span> Integrations </span>
                    </Link>
                </div>
                
                <div className="flex items-center p-2 ">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2">
                        <FcMoneyTransfer className="m-2 w-5 h-5 "/>
                        <span> Mpesa </span>
                    </Link>
                </div>

                <div className="flex items-center p-2 ">
                    <Link href="#" className="flex items-center p1 rounded-lg hover:bg-blue-600 mx-2">
                        <FcSalesPerformance className="m-2 w-5 h-5 "/>
                        <span> Sales </span>
                    </Link>
        </div>
        {/* bottom */}
            <div className="flex justify-end " >
                <div  className=" p-2">
                    <button className="p1 rounded-lg hover:bg-blue-600 mx-2">
                        <CircleChevronLeftIcon className="m-2 w-5 h-5 "/>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
//