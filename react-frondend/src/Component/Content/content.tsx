import './content.scss'
import Navbar from '../Navbar/navbar';
import Product from './Product/product';
import { useEffect } from 'react';
interface Input {
    topic: string;
    checkNav:boolean

}
const Content = ({ topic ,checkNav}: Input) => {
    useEffect(()=>{
        window.scroll(0, 0)
    },[])
    return (
        <>  
                <div style={{display: checkNav == false ? 'none' : 'block'}}>
                    <Navbar />
                </div>
                
                <h2>{topic}</h2>
                <div className='section-content'>
                    <div className='content-container'>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div >
             

        </>
    )
}
export default Content