import React from 'react'
interface IProduct{
    thumbnail:string;
    name:string;
    price:number;
    promoPrice?:number;
}
export default function Ex4({
    thumbnail,
    name,
    price,
    promoPrice = 0,
}:IProduct) {
    //Tính giá trị discount 
    const discount = Math.round(((price-promoPrice)/price)*100);
  return (
    <div className='background flex justify-center'>
        <div className='product-item relative w-[200px]'>
            {discount<100?(<span className='discount absolute top-1 right-1 bg-orange-500 text-white rounded px-2 py-1'>{discount}%</span>):null}
            <div className='product-thumbbnail w-[200px] h-[200px]'>
                <img src={thumbnail} alt="" />
            </div>
            <h3><b>{name}</b></h3>
            <div className="product-">
                {promoPrice > 0 ? 
                (
                    <>
                        <b><span className='price text-red-900'>{promoPrice}đ</span></b>  
                        <del><span className='price-promo text-gray-500'>{price}đ</span></del>
                    </>
                ):(<b><span className='price text-red-900'>{price}đ</span></b>)}
            </div>
    </div>
    </div>
    
  )
}
