import Navbar from './components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Innovate Triumph',
  description: 'A digital web development studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-black`}>
        <Navbar/>
        <div className="w-3/4 mx-auto">
          {children}
        </div>
        
      </body>
    </html>
  )
}
