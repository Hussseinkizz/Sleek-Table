import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from './ui/calendar';
import { useState } from 'react';
import { Button } from './ui/button';
import { format } from 'date-fns';

type Props = {};

const DateSelector = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateChanged, setDateChanged] = useState(false);

  const changeDate = (date: any) => {
    setSelectedDate(date);
    setDateChanged(true);
    // console.log(format(selectedDate, 'PPP'));
  };

  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {dateChanged && selectedDate
              ? format(selectedDate, 'PPP')
              : 'Change Date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={changeDate}
            disabled={(date) =>
              date > new Date() || date < new Date('1900-01-01')
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateSelector;
