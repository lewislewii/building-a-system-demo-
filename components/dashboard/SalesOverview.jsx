import { CircleCheckIcon } from 'lucide-react';
import Link from 'next/link';

export default function SalesOverview() {
    const SalesActivity = [
        {
            title: "To be completed",
            number: 10,
            unit: "Qty",
            href: "#",
            color: "text-blue-600"
        },
        {
            title: "To be completed",
            number: 10,
            unit: "Qty",
            href: "#",
            color: "text-red-600"
        },
        {
            title: "To be completed",
            number: 10,
            unit: "Qty",
            href: "#",
            color: "text-green-600"
        },
        {
            title: "To be completed",
            number: 10,
            unit: "Qty",
            href: "#",
            color: "text-orange-600"
        },
    ];
    
    const inventorySummary = [
        {
            title: "Quantity in hand",
            number: 10,
        },
        {
            title: "Quantity in hand",
            number: 10,
        }
    ];
    
    return (
        <div className='bg-blue-200/60 border-b border-slate-300 p-10 grid grid-cols-12 gap-4'>
            {/* Sales Activity */}
            <div className='col-span-8 border-r border-slate-800'>
                <h2 className='mb-6 font-semibold text-slate-950'>Sales Activity</h2>
                <div className='pr-8 grid grid-cols-4 gap-4'>
                    {SalesActivity.map((item, i) => (
                        <Link href={item.href} key={i} className="shadow rounded-lg border border-slate-200 hover:border-blue-600 bg-white p-6 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                            <h4 className={`font-semibold text-4xl ${item.color}`}>{item.number}</h4>
                            <small className='text-slate-600'>{item.unit}</small>
                            <div className='flex items-center space-x-2'>
                                <CircleCheckIcon className='w-4 h-4' />
                                <span className='uppercase font-semibold text-xs'>{item.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Inventory Summary */}
            <div className='col-span-4'>
                <h2 className='mb-4 font-semibold text-slate-950'>Inventory Summary</h2>
                <div>
                    {inventorySummary.map((item, i) => (
                        <div key={i} className="mb-4 shadow rounded-lg border border-slate-200 hover:border-blue-600 bg-white py-2 px-7 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300">
                            <h2 className='text-slate-500 uppercase font-semibold text-sm'>{item.title}</h2>
                            <h4 className='font-semibold text-4xl'>{item.number}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
