import './globals.css'

import Head from './head'
import NextAuthProvider from './Providers'

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
            {children}
          </NextAuthProvider>
          
      </body>
    </html>
  )
}
