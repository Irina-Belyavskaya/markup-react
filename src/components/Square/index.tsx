import { Grid, styled } from '@mui/material'

const AnimatedGrid = styled(Grid)`
  background-color: #1b6c42;
  width: 50px;
  height: 50px;
  position: relative;
  animation: slidein 5s linear infinite alternate 0s;
  left: 0;

  @keyframes slidein {
    0% {
      left: 0px;
    }
    100% {
      left: calc(100% - 50px);
    }
  }
`
const Squares = () => {
  return (
    <Grid 
      container 
      sx={{ 
        margin: ' 0 0 10px 0'
      }}
    >
      <Grid 
        item 
        container  
        sx={{ bgcolor: '#ce89d1', padding: '5px'}}
      >
        <AnimatedGrid item />
      </Grid>      
    </Grid>
  )
}

export default Squares;

