import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import { FC } from "react";

import { IntlProvider } from "react-intl";
import { Container } from "@mui/material";

const Layout: FC = () => {
  console.dir(IntlProvider);
  
  return (
    <Container sx={{ mt: '6rem' }}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
};

export default Layout;