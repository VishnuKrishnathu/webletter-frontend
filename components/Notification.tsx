import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { store } from '@/store/store';

const Notification = () => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
      let subscriber = store.subscribe(() => {
        console.log(store.getState().notification)
        setOpen(true)
      })

      return () => subscriber()
    }, [])

  return (
    <ToastContainer>
        <Toast delay={3000} onClose={() => setOpen(false)} show={open} autohide>
        <Toast.Header>
            <strong className="me-auto">Logo</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    </ToastContainer>
  )
}

export default Notification;