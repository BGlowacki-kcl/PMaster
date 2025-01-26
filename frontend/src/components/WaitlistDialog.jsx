import React, { useEffect, useState } from 'react'
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import saveUser from '../stores/waitlist.store.js';

function WaitlistDialog({ open, close, showNotification }) {
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!open) {
            setError(null);
        }
    }, [open]);

    const saveToWaitlist = async () => {
        const email = document.getElementById('name').value;
        setError(null);
        try {
            const response = await saveUser(email, setError);
            if(response.success) {
                showNotification("Subscribed successfully", "success");
                close();
            } else {
                setError(response.message);
            }
        } catch (error) {
            setError("Internal server error");
        }
    }

  return (
    <Dialog 
            open={open}
        >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                    <Alert severity="error" style={{ display: error ? 'block' : 'none' }}>{error}</Alert>
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button type="submit" color="success" variant="contained" onClick={saveToWaitlist} >Subscribe</Button>
            </DialogActions>
        </Dialog>
  )
}

export default WaitlistDialog