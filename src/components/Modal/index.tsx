import * as React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type PropsType = {
  title : string
}

export default function Modal( { title } : PropsType )   {
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid 
          sx={{
            backgroundColor: '#F33F3F', 
            border: '1px solid #F33F3F'
          }}
        >
        <DialogTitle id="alert-dialog-title">
          Error
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{color: 'black'}}>
            {title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color: 'black'}} autoFocus>
            Ok
          </Button>
        </DialogActions>
        </Grid>
      </Dialog>
    </div>
  )
}