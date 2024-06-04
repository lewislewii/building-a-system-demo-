import { BellRingIcon, CirclePlayIcon, CirclePlus, CirclePlusIcon, Cog, History, PanelBottomClose, PlusIcon, Users } from 'lucide-react';
import React from 'react'
import SearchInput from './SearchInput';

export default function Header() {
    return (
        <div className="bg-gray-200 h-12 flex items-center justify-between px-8" >
            <div className='flex gap-3'>
            {/* {Recent activites} */}
            <button><History className='h-6 w-6'/>
            </button>
            {/* {Search} */}
            <SearchInput/>
            </div>
            <div className='flex items-center gap-3'>
                {/* {Plus Icon} */}
                <div className='pr-2  border-r border-gray-300 '>
                <button className='p1 rounded-lg bg-blue-600 ' ><PlusIcon className='text-slate-50 w-5 h-5' /></button>
                </div>

                {/* user , bell , settings */}
                <div className='pr-2  border-r border-gray-300 '>
                <button className='p1 rounded-lg hover:bg-slate-100 mx-2 ' ><Users className='text-slate-900 w-5 h-5' /></button>
                <button className='p1 rounded-lg hover:bg-slate-100 mx-2 ' ><BellRingIcon className='text-slate-900 w-5 h-5' /></button>
                <button className='p1 rounded-lg hover:bg-slate-100 mx-2 ' ><Cog className='text-slate-900 w-5 h-5' /></button>
                </div>
                
                {/*info  */}
                <div className="flex gap-6">
                    <button className='flex items-center'><span> Garat </span>
                    <PanelBottomClose className='w-4 h-4 '/>
                    </button>
                </div>
                {/* yryiryury.yu.ry */}
            </div>
        </div>
    );
};


// const Header = () => {

//  }

//  export default Header;