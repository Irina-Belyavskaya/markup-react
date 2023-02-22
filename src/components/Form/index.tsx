import { Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography, Link, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import welcome from '../../assets/welcome.jpg'

const theme = createTheme({
  palette: {
    secondary: orange
  }
})

type PropsType = {
  title: string,
  nameBtn: string,
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  isSignIn: boolean
}

const Form = ({title, nameBtn, handleSubmit, isSignIn} : PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:  `url(${welcome})`,
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={6} 
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar 
              sx={{ 
                m: 1, 
                bgcolor: 'secondary.main', 
                color: 'black' 
              }}
            >
              {
                isSignIn 
                ?
                  <LoginOutlinedIcon/>
                :
                  <LockOutlinedIcon />
              }
              
            </Avatar>
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <Box 
              component="form" 
              noValidate 
              onSubmit={handleSubmit} 
              sx={{ mt: 1 }}
            >
              {
                isSignIn
                ?
                  <></>
                :
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
              }
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {
                isSignIn 
                ?
                  <></>
                :
                  <Grid 
                    container 
                    sx={{
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent:'space-around'
                    }}
                  >
                    <Grid item>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                      >
                        <FormControlLabel 
                          value="female" 
                          control={<Radio />} 
                          label="Female" 
                        />
                        <FormControlLabel 
                          value="male" 
                          control={<Radio />} 
                          label="Male" 
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Status
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="active"
                        name="status"
                      >
                        <FormControlLabel 
                          value="active" 
                          control={<Radio />} 
                          label="Active" 
                        />
                        <FormControlLabel 
                          value="inactive" 
                          control={<Radio />} 
                          label="Inactive" 
                        />
                      </RadioGroup>
                    </Grid>
                </Grid>
              }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: '20px' }}
              >
                {nameBtn}
              </Button>
              <Grid container>
                <Grid item>
                  {
                    isSignIn
                      ?
                        <Link href="/register" variant="body2">
                          {"Don't have an account? Create!"}
                        </Link>
                      :
                        <Link href="/login" variant="body2">
                          {"Do you already have an account?"}
                        </Link>
                  }
                </Grid>
                <Grid 
                  container 
                  item 
                  sx={{marginTop: '30px'}}
                >
                  <Link 
                    href="/" 
                    style={{ 
                      textDecoration: 'none', 
                      color: 'black', 
                      backgroundColor : 'orange',
                      border: '2px solid orange', 
                      borderRadius: '20px', 
                      padding: '5px 10px' 
                    }}
                  >
                      On main
                  </Link> 
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Form