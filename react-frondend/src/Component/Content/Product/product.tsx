import './product.scss'

type ProductInformation = {
    name: string
    price: number
    pic: string
    category: string
}

const Product = ({ name, price, pic, category }: ProductInformation) => {
    const InputImg = () => {
        switch (category) {
            case "Clothes":
                return <img src={"/clothes/" + pic} width="100%" alt="" />
            case "Socks and Shoes":
                return <img src={"/shoe/" + pic} width="100%" alt="" />
            default:
                break;
        }

    }
    return (
        <>
            <div className='product'>
                <div className='section-img-product'>
                    <InputImg />
                </div>
                <div className='section-describe-product'>
                    <div>
                        <div>
                            <div style={{ backgroundColor: 'black' }}></div>
                            <div style={{ backgroundColor: 'white' }}></div>
                        </div>
                        <p>S M L XL</p>
                    </div>
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <p>$ {price}</p>
                        <p>THB {price * 36.79}</p>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Product