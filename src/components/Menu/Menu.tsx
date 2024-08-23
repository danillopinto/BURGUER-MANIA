import Drinks1 from "../Drinks1/Drinks1"
import Drinks2 from "../Drinks2/Drinks2"
import MenuBurguer1 from "../MenuBurguer1/MenuBurguer1"
import MenuBurguer2 from "../MenuBurguer2/MenuBurguer2"


const Menu = () => {

    return (
        <>
            <h1 className=" text-[#000000] text-[30px] font-[600] text-center mt-12 ">Conheça nosso menu</h1>
            <section className=" p-[3%] md:flex items-center justify-center  ">

                <MenuBurguer1 />
                <MenuBurguer2 />

            </section>

            <h1 className=" text-[#000000] text-[30px] font-[600] text-center mt-3 mb-3 ">Bebidas</h1>
            <article className=" p-[3%] md:flex items-center justify-center mb-16 ">
                <Drinks1 />
                <Drinks2 />
            </article>
        </>
    )
}

export default Menu
