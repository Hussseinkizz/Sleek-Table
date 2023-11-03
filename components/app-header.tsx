import ActiveTime from '@/components/ActiveTime';
import { Button } from '@/components/ui/button';
import { HiBell } from 'react-icons/hi2';
import { BiSolidUserPin } from 'react-icons/bi';
import Link from 'next/link';
import BackButton from './BackButton';

const AppHeader = () => {
  return (
    <header className="flex justify-between items-center w-full border-b border-neutral-300 bg-neutral-100 px-6 py-2">
      <h1 className="flex gap-2 justify-center items-center font-bold text-2xl">
        <BiSolidUserPin className="w-6 h-6 text-orange-500" />
        <span className="flex">E-Vistor</span>
      </h1>
      <div className="flex gap-2 justify-between items-center font-semibold">
        <div className="flex">
          <ActiveTime />
        </div>
        <HiBell className="h-6 w-6 cursor-pointer" />
      </div>
      <div className="flex gap-4 justify-between items-center ">
        <BackButton />
        <Button
          variant="custom"
          className="--bg-neutral-900 --text-orange-400 --hover:bg-neutral-800">
          <Link href="/manage-account" passHref>
            Manage Account
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
