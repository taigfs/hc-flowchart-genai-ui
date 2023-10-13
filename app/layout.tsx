import './globals.css';
import 'reactflow/dist/style.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import Provider from './context/client-provider';
import { authOptions } from './api/auth/[...nextauth]/auth-options';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Flowchart Generator',
  description: 'Created by Hook Captain',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <Provider session={session}>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
