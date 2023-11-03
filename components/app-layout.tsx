import AppHeader from './app-header';
import { Inter } from 'next/font/google';

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

const AppLayout = (props: Props) => {
  return (
    <main
      className={`flex min-h-screen flex-col bg-neutral-200 items-start justify-start ${inter.className}`}>
      {/* The Header */}
      <AppHeader />
      {/* The Page Content */}
      <section className="w-full flex flex-col justify-start items-start px-6 py-8">
        {props.children}
      </section>
    </main>
  );
};

export default AppLayout;
