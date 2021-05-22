import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React from 'react'

export const AddCityDialog = ({dialogOpen, newCity, handleFormChange, handleConfirmDialog, handleCancelDialog}) => {
    return (
        <Dialog open={dialogOpen}>
          <DialogTitle id="form-dialog-title">Add city</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              value={newCity.name || ''}
              onChange={handleFormChange}
              fullWidth/>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              value={newCity.description || ''}
              onChange={handleFormChange}
              fullWidth/>
            <TextField
              autoFocus
              margin="dense"
              id="image"
              label="Image URL"
              value={newCity.image || ''}
              onChange={handleFormChange}
              fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDialog} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
    )
}
