import Provider from '@/app/provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AuthWrapper from '@/components/wrapper/auth-wrapper';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
import { validateConfig } from '@/lib/config-validator';
import { Inter, Poppins } from 'next/font/google';

// Validate config on app initialization
validateConfig();

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Podclip',
    template: `%s | Podclip`,
  },
  description: 'AI Podcast Summariser',
  // icons: [
  //   { rel: 'icon', url: '/favicon.ico' },
  //   { rel: 'icon', url: '/favicon.png', type: 'image/png' },
  //   { rel: 'apple-touch-icon', url: '/favicon.png' },
  // ],
  openGraph: {
    description: 'AI Podcast Summariser',
    images: [''],
    url: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Titan App',
    description: 'AI Podcast Summariser',
    siteId: '',
    creator: '',
    creatorId: '',
    images: [''],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning className={`dark ${inter.variable} ${poppins.variable}`}>
        <head>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </head>
        <body className={`${GeistSans.className} ${inter.className}`}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  );
}