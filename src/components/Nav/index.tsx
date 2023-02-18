import { Drawer, Grid, ListItemButton, ListItemText, IconButton, List } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"

const Nav = () => {
  const [open, setOpen] = useState(false);

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
              <ListItemText primary="Home"/>
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Products" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Articles" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="News" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Our team" />
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

export default Nav;