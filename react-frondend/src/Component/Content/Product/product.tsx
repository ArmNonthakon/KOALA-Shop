import './product.scss'

const Product = ()=>{
    return (
        <>
        <div className='product'>
            <div className='section-img-product'>
                <img src="/vite.svg" width="100%" alt="" />
            </div>
            <div className='section-describe-product'>
                <p>$ 20.20</p>
                <p>฿ 20.20</p>
            </div>
        </div>
        </>
    )
}

export default Product