import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { store } from '@/store/store';

const Notification = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [notificationMessage, setNotificationMessage] = useState<string | null>(null);

    useEffect(() => {
      let subscriber = store.subscribe(() => {
        setNotificationMessage(store.getState().notification)
        setOpen(true)
      })

      return () => subscriber()
    }, [])

  return (
    <ToastContainer>
        {notificationMessage && <Toast delay={3000} onClose={() => setOpen(false)} show={open} autohide>
        <Toast.Header>
            <strong className="me-auto">Logo</strong>
        </Toast.Header>
        <Toast.Body>{ notificationMessage }</Toast.Body>
        </Toast>}
    </ToastContainer>
  )
}

export default Notification;