import './globals.css'

import Head from './head'
import NextAuthProvider from './Providers'
import RecoilContextProvider from "./recoilContextProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
          <NextAuthProvider>
            <RecoilContextProvider>
              {children}
              <ToastContainer />
            </RecoilContextProvider>
          </NextAuthProvider>
          
      </body>
    </html>
  )
}
