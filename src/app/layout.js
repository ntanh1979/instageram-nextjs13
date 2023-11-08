import './globals.css'

import Head from './head'
import NextAuthProvider from './Providers'
import RecoilContextProvider from "./recoilContextProvider";

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
            </RecoilContextProvider>
          </NextAuthProvider>
          
      </body>
    </html>
  )
}
