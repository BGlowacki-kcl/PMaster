import React, { useEffect, useState } from 'react'
import { Alert, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import saveUser from '../stores/waitlist.store.js';

function WaitlistDialog({ open, close, showNotification }) {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(true);
    
    useEffect(() => {
        if(!open) {
            setError(null);
        }
    }, [open]);

    const saveToWaitlist = async () => {
        setError(null);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(emailRegex.test(email));
        console.log(email);
        if(!emailRegex.test(email)){
            setError("Provide a valid email address!")
            return;
        }

        try {
            const response = await saveUser(email, newsletter);
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
            <DialogTitle>Sign up to waitlist!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Sign up now! Get to know first about the lunch. Get discount offer for early supporters only!
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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Checkbox id="newsletter" name="newsletter" onChange={(e) => setNewsletter(e.target.checked)} defaultChecked /> Subscribe to newsletter!
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button type="submit" color="success" variant="contained" onClick={saveToWaitlist} >Sign up</Button>
            </DialogActions>
        </Dialog>
  )
}

export default WaitlistDialog