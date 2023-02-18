import { Grid } from "@mui/material";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import Cards from "../../components/Cards";
import Squares from "../../components/Square";

const MainPage = () => {
  return (
    <Grid 
      container 
      spacing={1}  
      sx={{ 
        minHeight: '100vh', 
        bgcolor: '#808080' 
      }}
    >
      <Grid 
        item 
        container 
        xl={0.5} 
        sx={{ minHeight: '100vh' }}
      >
        <Nav/>
      </Grid >
      <Grid 
        container 
        item 
        xl={11.5} 
        sx={{ minHeight: '100vh' }}
      >
        <Header/>
        <Grid 
          item 
          container 
          sx={{
            margin: '10px 0',
            disply: 'flex',
            minHeight: '100vh'
          }}
        >
          <Grid container item xl={10}>
            <Squares/>
            <Cards/>
          </Grid>
          <Grid container item xl={2}>
            <Aside/>
          </Grid>
        </Grid>
        <Footer/>
      </Grid>
    </Grid>
  )
}

export default MainPage;