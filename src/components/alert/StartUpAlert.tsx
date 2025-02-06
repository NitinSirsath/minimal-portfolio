import { useEffect, useState } from 'react';
import { Alert, Snackbar, Button } from '@mui/material';
import useStartStore from '../../store/startUpMessageStore';
import { QuestionAnswer } from '@mui/icons-material';

export default function StartUpAlert() {
  const getStartMessage = useStartStore(state => state.getStartMessage);
  const removeStartMessage = useStartStore(state => state.removeStartMessage);
  const [open, setOpen] = useState(getStartMessage);

  useEffect(() => {
    setOpen(getStartMessage);
  }, [getStartMessage]);

  const handleClose = () => {
    setOpen(false);
    removeStartMessage();
  };

  const vertical = 'top';
  const horizontal = 'center';

  return (
    <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        icon={<QuestionAnswer fontSize="inherit" />}
        severity="success"
        action={
          <Button color="inherit" size="small" onClick={handleClose}>
            Close
          </Button>
        }
      >
        The site is still under construction. Some links or content might not work as they should be. Want to give a
        feedback, Please check the contact details on the about page.
      </Alert>
    </Snackbar>
  );
}
