import Hero1 from "../Hero1/Hero1"
import { Hero2 } from "../Hero2/Hero2"
import { Hero3 } from "../Hero3/Hero3"
import { Ofertas } from "../Ofertas/Ofertas"
import OrderList from "../Order/Order"
import ProductsContainer from "../ProductsContainer/ProductsContainer"


const HomeView = () => {
    return (
        <>
            <Hero1/>
            <Hero3/>
            <Ofertas categoria={"casas"}/>
            <ProductsContainer/>

        </>
    )
}
export default HomeView