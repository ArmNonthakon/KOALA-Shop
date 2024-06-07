import { useState } from 'react';
import Navbar from '../Navbar/navbar';
import './home.scss';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Content from '../Content/content';
import { useNavigate } from 'react-router-dom';
import { testApi } from '../../service/userService';
function Home() {
    const [visibleButton, setVisibleButton] = useState(4);
    const navigate = useNavigate();
    const showCategoryClick = (num: number) => {
        setVisibleButton(num);
    };

    const categories = [
        { id: 0, name: 'Clothes', src: '/casual-t-shirt-.png', label: 'Click', url: "clothes" },
        { id: 1, name: 'Trousers', src: '/trouser.png', label: 'Click', url: "trousers" },
        { id: 2, name: 'Shoes', src: '/sport-shoe.png', label: 'Click', url: "socks_shoes" },
        { id: 3, name: 'Accessories', src: '/accessories.png', label: 'Click', url: "accessories" },
    ];
    const slidePic = ["/Arrive.png", "/Coming.png", "/Princess.png", "/SALE.png"]
    const navigateToOtherPage = (url: string) => {
        navigate('/' + url)
    }
    const callTestApi = async ()=>{
        try {
            const response = await testApi()
            console.log(response)
        } catch (error) {
            console.log(error)
            throw error;
        }
        

    }
    return (
        <>
            <Navbar />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4 * 1000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1.7}
                spaceBetween={-150}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            >
                {slidePic.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='block-contain'>
                            <img src={item} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={callTestApi}>Test</button>
            <div id='category-section' className='category-section'>
                <div className='category-contain'>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onMouseEnter={() => showCategoryClick(category.id)}
                            onMouseLeave={() => showCategoryClick(4)}
                            className='category-item'
                        >
                            <img src={category.src} alt="" />
                            <button
                                onClick={() => navigateToOtherPage(category.url)}
                                id={`categoryButton-${category.id}`}
                                style={{ display: visibleButton === category.id ? 'block' : 'none' }}
                                className='categoryButton'
                            >
                                {category.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Content topic='Recommend' checkNav={false}/>
        </>
    );
}

export default Home;
