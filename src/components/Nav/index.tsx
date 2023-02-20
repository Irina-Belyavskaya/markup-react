import { Drawer, Grid, ListItemButton, ListItemText, IconButton, List, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Grid 
      sx={{ 
        bgcolor: '#3a4eca', 
        color: 'white',
        width: '100%'
      }}   
    >
      <Grid 
        item 
        container 
        sx={{
          bgcolor: '#3a4eca', 
          padding:'0 10px'
        }}
      >
        <Drawer 
          open={open} 
          onClose={() => setOpen(false)} 
          PaperProps={{ sx: {bgcolor: '#3a4eca'}}}
        >
          <Grid 
            item 
            container 
            sx={{
              bgcolor: '#3a4eca' 
            }}
          >
              <IconButton 
                sx={{
                  marginLeft: 'auto', 
                  color: 'white'
                }} 
                onClick={() => setOpen(false)}
              >
                    <CloseIcon />
              </IconButton>
          </Grid>
          <List 
            sx={{ 
              bgcolor: '#3a4eca', 
              color: 'white', 
              paddingRight: '50px'
            }}
          >
            <ListItemButton>
              <StyledLink to='/'>
                <ListItemText primary="Home"/>
              </StyledLink>                
            </ListItemButton>

            <ListItemButton>
              <StyledLink to='/register'>
                <ListItemText primary="Sign Up"/>
              </StyledLink> 
            </ListItemButton>

            <ListItemButton>
              <StyledLink to='/login'>
                <ListItemText primary="Sign In"/>
              </StyledLink> 
            </ListItemButton>

            <ListItemButton>
              <StyledLink to='/' state={'HEADER'}>
                <ListItemText primary="Log out"/>
              </StyledLink> 
            </ListItemButton>

          </List>
        </Drawer>
      </Grid>
      <Grid item container>
        <IconButton 
          sx={{
            color: 'white', 
            marginLeft: 'auto', 
            marginRight: 'auto'
          }} 
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Nav