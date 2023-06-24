import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className=' w-screen flex justify-center items-center bg-[#100E1D]'>
        {children}
      </body>
    </html>
  )
}
