import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {

    const { locale } = await params;

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}