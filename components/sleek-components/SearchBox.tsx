import { useState } from "react";
import { HiSearch } from "react-icons/hi";

type Props = {
  placeholder: string;
  data?: [];
};

type Item = {
  id: number;
  title: string;
};

type Results = Item[] | null;

const Search = ({ placeholder, data }: Props) => {
  const [filteredData, setFilteredData] = useState<Results>([]);
  const [searchWord, setSearchWord] = useState("");

  // console.log('search', filteredData);
  const searchData = [
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
    { id: 3, title: "title 3" },
    { id: 4, title: "title 4" },
    { id: 5, title: "title 5" },
    { id: 6, title: "title 6" },
  ];

  const filterData = (event: any) => {
    let searchValue = event.target.value;
    const results = searchData.filter((item: Item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (results) {
      setFilteredData(results);
    } else {
      setFilteredData(null);
    }
  };

  return (
    <section className="relative flex w-full grow">
      <div className="group relative flex grow items-center justify-between rounded-md">
        {/* The Input */}
        <input
          type="text"
          placeholder={placeholder ? placeholder : "Search..."}
          onChange={filterData}
          className="relative grow truncate rounded-md border-transparent bg-gray-50 pr-12 text-gray-500 outline-none ring-1 ring-indigo-100 transition-colors hover:bg-gray-50 hover:ring-2 hover:ring-indigo-100 focus:border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 group-hover:bg-gray-50"
        />
        {/* The Search Icon */}
        <div className="absolute right-4 text-gray-400">
          <HiSearch className="h-6 w-6 cursor-pointer transition hover:text-indigo-200" />
        </div>
      </div>
      {/* The Results */}
      {filteredData?.length !== 0 && filteredData !== null && (
        <div className="search-results-custom absolute top-full z-10 mt-4 flex flex-col items-center justify-center gap-2 overflow-hidden overflow-y-auto rounded-md bg-white p-2 shadow-lg">
          {filteredData?.map((item: Item, index) => (
            <span key={index}>{item.title}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
