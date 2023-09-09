import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Component/Navbar';
import Head from 'next/head'; 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>  
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
      </Head>
      <body className={inter.className}>
      <div><Navbar/></div>
   
     < div className='mb-5 mt-5'> {children}</div></body>
    </html>
  )
}
