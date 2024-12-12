import { redHat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${redHat.className} antialiased`}>
        {children}
        <footer className='bg-blue-400 flex justify-center items-center p-4'>
          Hecho por @Andres-Silva
        </footer>
      </body>
    </html>
  );
}
