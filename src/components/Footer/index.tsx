import { Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Grid 
      container 
      item 
      sx={{ 
        bgcolor: '#89248E', 
        alignSelf: 'flex-end', 
        textAlign: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
      <Typography sx={{width: '100%'}}>
          FOOTER
      </Typography> 
    </Grid>
  )
}

export default Footer