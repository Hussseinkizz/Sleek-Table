import SleekTable from '@/components/sleek-table';
import { vistors } from '@/data/UI_data';
import { $Vistor } from '@/data/data_types';

// vistors table columns
export const columns = [
  {
    dataKey: 'id',
    headerContent: 'No.',
  },
  {
    dataKey: 'vistor_name',
    headerContent: 'Vistor Name',
  },
  {
    dataKey: 'vistor_contact',
    headerContent: 'Vistor Contact',
  },
  {
    dataKey: 'vistor_card_number',
    headerContent: 'Vistors Card',
  },
  {
    dataKey: 'id_verified',
    headerContent: 'ID Verified',
    columnCellsShape: (item: $Vistor) => (item.id_verified ? 'Yes' : 'No'),
  },
  {
    dataKey: 'to_office',
    headerContent: 'Visited Office',
  },
  {
    dataKey: 'visit_purpose',
    headerContent: 'Visiting Agenda',
  },
  {
    dataKey: 'time_in',
    headerContent: 'Time In',
  },
  {
    dataKey: 'time_out',
    headerContent: 'Time Out',
  },
  {
    dataKey: 'was_expected',
    headerContent: 'Expected',
    columnCellsShape: (item: $Vistor) => (item.was_expected ? 'Yes' : 'No'),
  },
];

let dataSchema = {
  id: 'string',
  vistor_card_number: 'string',
  vistor_name: 'string',
  vistor_contact: 'string',
  visiting_date: 'string',
  id_verified: 'boolean',
  to_office: 'string',
  branch_id: 'string',
  visit_purpose: 'string',
  time_in: 'string',
  time_out: 'string',
  was_expected: 'boolean',
};

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-start items-start px-6 py-8">
      {/* The Vistors Table */}
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <SleekTable
          columns={columns}
          data={vistors}
          hasCheckboxes={true}
          hasSearch={true}
          searchSchema={dataSchema}
          sortByColumn="vistor_name"
        />
      </div>
    </section>
  );
}
