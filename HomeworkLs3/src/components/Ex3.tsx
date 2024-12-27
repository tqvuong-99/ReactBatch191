import React from 'react';
type TButton={icon:React.ReactNode,label:string,type:string}
function Button({icon, label, type}:TButton){
    return(
        <>
     <button className={`flex gap-x-3 items-center justify-center py-1 px-2 text-white font-medium  rounded w-[200px] h-[50px] ${type==='2'?'bg-orange-500':''} ${type==='1'?'bg-gray-800':''}`}>
        {icon} { label}
     </button>
        </>
    )
}
function Ex3(){
    return(
        <div className='flex justify-center gap-x-3 py-2'>
     <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>} type='2' label='Thêm giỏ hàng'/>
     <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>} type='1' label='Gọi tư vấn'/>
    </div>
    )
}
export default Ex3