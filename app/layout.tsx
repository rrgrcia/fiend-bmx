import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/providers/CartProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fiend BMX - Premium BMX Bikes and Parts',
  description: 'Premium BMX bikes and parts for riders from beginners to pros. Built for performance, designed for passion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

