import { Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'

const CharacterCard = ({name, image, species, status, location, gender}:any) => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive': return 'green'
      case 'Dead': return 'red'
      default: return 'gray'
    }
  }

  return (
    <Card 
      sx={{ 
        bgcolor: '#D0F366',
        width: '100%',
        textAlign: 'center'
      }}
    >                   
      <CardContent>
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt={name}
          />
          <Grid
            container
            item
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}  
          >
            <Grid item >
              <Typography 
                variant="h5" 
                sx={{ marginTop: '10px' }}
              >
                {name}
              </Typography>
              {
                gender
                  ?
                    <Typography variant="subtitle1">
                      Gender: {gender}
                    </Typography>
                  :
                  <></>
              }
              {
                species
                  ?
                  <Typography variant="body1">
                    Species: {species}
                  </Typography>
                  :
                  <></>
              }
              {
                location
                  ?
                  <Typography variant="body1">
                    Location: {location}
                  </Typography>
                  :
                  <></>
              }
              
            </Grid>
            <Grid 
              item
              sx={{
                width: '100%',
                alignSelf: 'flex-end'
              }}
            >
              <Chip 
                label={status} 
                sx={{
                  bgcolor: getStatusColor(status),
                  width: '100%'
                }}
              />    
            </Grid>          
          </Grid>
      </CardContent>
    </Card> 
  )
}

export default CharacterCard