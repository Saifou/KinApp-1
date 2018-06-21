import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SignUp from './SignUp';

class PopupLogin extends React.Component {
  state = {
    open: true,
    auth: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    
    return (
   
      <div >


        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="connection-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="connection-title">{"Voulez-vous accéder à votre espace?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="connection-description">
              <SignUp/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Connecter
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Deconnecter
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PopupLogin;