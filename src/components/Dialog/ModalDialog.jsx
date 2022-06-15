import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import NewUserForm from '../Forms/NewUserForm';

const ModalDialog = ({ open, handleClose }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<NewUserForm handleClose={handleClose} />
		</Dialog>
	);
};

export default ModalDialog;
