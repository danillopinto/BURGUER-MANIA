import React from 'react';
import Footer from "../../components/Footer/Footer"
import theme from '../../theme';
import { Container, Grid, styled } from "@mui/material";
import Avatar from "../../pages/assets/tasty-hamburger-on-transparent-background-png.webp"

const Header: React.FC = () => {

  const StyledHero = styled("div")(() => ({

    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
        paddingBottom: "50px",
    },
    [theme.breakpoints.up('md')]: {
        paddingBottom: "0px",
    },

}))

const StyledImg = styled("img")(() => ({

    borderRadius: "50%",
    [theme.breakpoints.up('xs')]: {
        width: "80%",
    },
    [theme.breakpoints.up('md')]: {
        width: "100%",

    },

}))

  return (
    <header className="h-[100vh] w-full bg-orange-600 ">



      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
            <h2 className=" font-[700] md:text-[33px] text-[15px] " >CHEGOU SUA VEZ DE EXPERIMENTAR O</h2>
            <h1 className=" font-[600] md:text-[65px] text-[33px] text-white " style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" }} >Maior e Melhor Hamburguer da Cidade!</h1>


            </Grid>
            <Grid item xs={12} md={5}>

            <div className=" sm:mt-[-100px] mt-[-30px] "><StyledImg src={Avatar} /></div>


            </Grid>
          </Grid>
        </Container>
      </StyledHero>

      <Footer />

    </header>
  );
}

export default Header;
