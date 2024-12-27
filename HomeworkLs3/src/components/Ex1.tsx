type TButton = {
    active?:boolean;
    label: string;

};
function Button({active,label}: TButton){
    return(
        <span className={`flex justify-center items-center py-1 px-2 bg-white text-gray-500 border border-gray-300 w-[80px] h-8
             ${active===true?'bg-gray-300 text-black border-gray-950 border-2':''}`} > {active} {label}</span>
    )
}
function Ex1(){
    return(
        <div className='flex justify-center gap-x-2 py-2'>
        <span className='flex justify-center items-center w-[80px] h-8'>Màu sắc</span>
        <Button active={true} label='Đen'/>
        <Button label='Hồng'/>
        <Button label='Xanh'/>
        </div>
    )
}
export default Ex1
