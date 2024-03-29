import { Nunito } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar';
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';
import RentModal from '@/components/modals/RentModal';
import ToasterProvider from '@/providers/ToasterProvider';
import getCurrentUser from '@/actions/getCurrentUser';
import SearchModal from '@/components/modals/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <SearchModal />
        <NavBar currentUser={currentUser} />

        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
