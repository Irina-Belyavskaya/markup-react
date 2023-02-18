import { Grid, Menu, MenuItem, Typography, } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

const Header = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid 
      container 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        bgcolor: '#309661',
        padding: '12px',
        height: 'fit-content',
      }}
    >
      <Grid item sx={{ width: '100%', textAlign: 'center'}}>
        <Typography>
          HEADER
        </Typography> 
      </Grid>
      <Grid item container>
        <Grid item sx={{marginRight: '10px'}}>
          <Button
            variant="contained"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{color: 'white'}}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            DROPDOWN
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item sx={{marginRight: '10px'}}>
          <Button
              variant="contained"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{color: 'white'}}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              DROPDOWN
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Grid>
        <Grid item>
          <Button
              variant="contained"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{color: 'white'}}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              DROPDOWN
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header;