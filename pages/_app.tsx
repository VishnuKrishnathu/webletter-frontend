import '../styles/globals.css';
import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import type { AppProps } from 'next/app'
import React from 'react';
import Notification from '@/components/Notification';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <div className='absolute bottom-0 right-0'>
        <Notification />
      </div>
    </SSRProvider>
  )
}

export default MyApp
