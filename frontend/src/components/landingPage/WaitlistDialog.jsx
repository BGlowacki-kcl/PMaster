import React, { useEffect, useState } from 'react'
import { Alert, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import saveUser from '../../stores/waitlist.store.js';
import { useNotification } from '../contexts/Notification.context.jsx';

function WaitlistDialog({ open, close }) {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(true);

    const showNotification = useNotification();
    
    useEffect(() => {
        if(!open) {
            setError(null);
        }
    }, [open]);

    const saveToWaitlist = async () => {
        setError(null);
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setError("Provide a valid email address!");
          return;
        }
      
        const response = await saveUser(email, newsletter);

        if (response.success) {
          showNotification("Subscribed successfully", "success");
          close();
        } else {
          setError(response.error);
        }
      };
      

  return (
    <Dialog 
        open={open}
    >
        <DialogTitle>Sign up to waitlist!</DialogTitle>
        <DialogContent>
            <DialogContentText>
                <span>
                    Sign up now! Get to know first about the lunch. Get discount offer for early supporters only!
                </span>
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