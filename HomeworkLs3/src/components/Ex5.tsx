type TImage={
    img?: any, 
    label1: string,
    label2: string,
    label3: string,
}
function Readmore({icon}:{icon?:React.ReactNode}){
    return(
        <div className='flex items-center text-sm font-medium'>
        <span className='text-xs'>Readmore</span> 
        {icon}
        </div>
    )
}
function Image({img, label1, label2, label3}: TImage){
    return(
        <div className='w-[300px]'>
        {img}
        <span className='font-medium text-lg'>{label1}</span> <br/>
        <span className='text-xs text-gray-400'>{label2}</span> <br/>
        <span className=' text-gray-400'>{label3}</span>
        <Readmore icon={<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>}/>
        </div>
    )
}
function Ex5(){
    return(
        <div className='flex justify-center'>
        <Image img={<img src='./image/Ex5.jpg'></img>} label1='Lightting Upgrades' label2='23 Nov,2019, Posted:admin, 2Comments' label3='Electrical panel maintenance, therefore, should be part of your regular routine.'/>
        </div>
    )
}
export default Ex5