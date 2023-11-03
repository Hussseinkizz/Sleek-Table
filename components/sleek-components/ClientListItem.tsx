import { useNumberFormat } from "hooks/useNumberFormat";
import Link from "next/link";
import * as Icons from "react-icons/hi";

type $Client = {
  id: string;
  name: string;
  amount: number;
  contact: string;
  location: string;
};

const ClientListItem = (client: $Client) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-slate-50 p-2">
      <Link
        href={`/client/${client.id}`}
        passHref
        className="_hover-settings flex w-full items-center justify-center gap-2 text-slate-500 shadow hover:text-indigo-400"
      >
        <span className="flex">{client.name}</span>
        <span className="flex">{useNumberFormat(client.amount)}</span>
        <Icons.HiChevronRight className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default ClientListItem;
