import { useEffect, useState } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import './Ofertas.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Loader } from '../Loader/Loader';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProductCard from '../ProductCard/ProductCard';





var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    atoplaySpeed: 700,
    centerPadding: "80px",
    pauseOnHover: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    nextArrow: <ArrowForwardIosIcon sx={{ color: '#222', fontSize: '40px', ml: '60px', '&:hover': { color: 'black' } }} />,
    prevArrow: <ArrowBackIosIcon sx={{ color: '#222', fontSize: '40px', ml: '10px', zIndex: 1000, '&:hover': { color: 'black' } }} />,
    appendDots: dots => (
        <div
            style={{
                marginBottom: "30px",
                color: "white"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 948,
            settings: {
                slidesToShow: 2,
                centerPadding: "10px",
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                centerPadding: "7px",
            }
        }
    ]
};

export const Ofertas = ({ categoria }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        setLoading(true)
        try {
            const productsRef = query(collection(db, 'propiedades'), where('categoria', '==', categoria))
            const snapShot = await getDocs(productsRef);
            const productosAdapted = snapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            
            setProducts(productosAdapted);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts()

    }, [])
    const categoriaTitle = `Nuestras ${categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()}`

    return (
        <div className="sliderContainer">
            <h2>{ categoriaTitle }</h2>
            {loading
                ? <Loader />
                :
                <Slider {...settings} className="slides">
                    {products.map(product => <ProductCard key={product.id} {...product} />)}

                </Slider>
            }

        </div>
    );
}
