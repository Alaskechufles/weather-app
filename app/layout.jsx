import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className=' w-screen md:w-full md:object-contain flex justify-center items-center bg-[#100E1D]'>
        {children}
      </body>
    </html>
  )
}
