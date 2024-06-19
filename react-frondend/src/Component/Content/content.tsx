import './content.scss';
import Product from './Product/product';
import { useEffect, useState } from 'react';
import { getProductByCategory, getProductRecommend } from '../../service/userService';

interface Input {
    topic: string;
}

const Content = ({ topic }: Input) => {
    const [data, setData] = useState<any[]>([]);
    const callData = async () => {
        const category = topic;
        if (category === "Recommend") {
            try {
                const response = await getProductRecommend();
                setData(Array.isArray(response) ? response : []);
            } catch (error) {
                console.error(error);
                setData([]);
            }
        } else {
            try {
                const response = await getProductByCategory({ category });
                setData(Array.isArray(response) ? response : []);
            } catch (error) {
                console.error(error);
                setData([]);
            }
        }
    };

    useEffect(() => {
        callData();
        window.scroll(0, 0);
    }, [topic]);

    return (
        <>
            <div className='section-topic'>
                <h2>{topic}</h2>
                <div className="section-topic-sort">
                    <p>Sort by</p>
                    <div>
                        <p>Recommend</p>
                        <img className='arrow-sort' src="/angle-small-right.svg" width="20px" style={{ transform: "rotate(90deg)" }} />
                    </div>
                </div>
            </div>
            <div className='section-content'>
                <div className='category-content'>
                    <h3>Clothes</h3>
                    <p>Shirt</p>
                    <p>T-Shirt</p>
                    <p>Tank top</p>
                    <p>Suit</p>
                    <p>Dress</p>
                    <h3>Bottom</h3>
                    <p>Trousers</p>
                    <p>Short</p>
                    <p>Skirt</p>
                    <h3>Socks and shoes</h3>
                    <p>Boot</p>
                    <p>Sport</p>
                    <p>Long boot</p>
                    <h3>Accessories</h3>
                    <p>Ring</p>
                    <p>Hat</p>
                    <p>Necklace</p>
                </div>
                <div className='content-container'>
                    {data.map((item, index) => (
                        <Product
                            key={index}
                            name={item.ProductName}
                            price={item.Price}
                            pic={item.Src}
                            category={item.Category}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Content;
