type TClause={
    icon:React.ReactNode;
    label1:string;
    label2:string
};
function Clause({icon, label1, label2}:TClause){
    return(
        <>
        <button className='flex gap-x-3 font-sans'>
        {icon}
        <h1 className='font-medium'> {label1}</h1>
        <span className='text-gray-400'>{label2}</span>
        </button>
        </>
    )
}
function Ex2(){
    return(
    <div className='flex justify-center py-2'>
    <div>
        <Clause icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-check text-blue-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>} label1='Bộ sản phẩm bao gồm:' label2='Hộp, Sách hướng dẫn, Cáp, Cây lấy sim'/>
        <Clause icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check  text-blue-300"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>} label1='Bảo hành:' label2='Chính hãng 12 tháng'/>
        <Clause icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-undo-2  text-blue-300"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>} label1='Đổi trả:' label2=' Hư gì đổi nấy 12 tháng'/>
    </div>
    </div>
    )
}
export default Ex2