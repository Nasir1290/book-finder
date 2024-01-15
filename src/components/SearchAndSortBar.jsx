import React, { useState } from "react";

export default function SearchAndSortBar({ onSearch, onSorting }) {
  const [searchInput, setSearchInput] = useState("");
  const [sortInput, setSortInput] = useState(null);

  const handleChange = (event) => {
    // first assign the value to input and then assign it into setState to update the state immidiately..👉 otherwise it will update ui on next state change (though states are getting asynchronously)
    const input = event.target.value;
    setSearchInput(input);
    onSearch(input);
  };

  const handleSortingOption = (event) => {
    const input = event.target.value;
    setSortInput(input);
    onSorting(input);
  };

  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        {/* <!-- info , title , search --> */}
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>
          {/* <!-- Search Box --> */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex">
              <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                  placeholder="Search Book"
                  required
                  value={searchInput}
                  onChange={handleChange}
                />
                <div className="absolute right-0 top-0 flex h-full items-center">
                  <button
                    type="submit"
                    onClick={() => onSearch(searchInput)}
                    className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                  >
                    <svg
                      className="h-[14px] w-[14px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- Search Box Ends --> */}
        </div>
        {/* <!-- sort - filter --> */}
        <div className="flex items-stretch space-x-3">
          {/* <!-- Sort --> */}
          <select
            onChange={handleSortingOption}
            className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
            name="sortBy"
            id="sortBy"
          >
            <option value="">Sort</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="year_asc">Publication Year (Oldest)</option>
            <option value="year_desc">Publication Year (Newest)</option>
          </select>
        </div>
      </div>
    </header>
  );
}
