import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchAndSortBar from "./components/SearchAndSortBar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [sortingType, setSortingType] = useState("");

  const handleSearch = (searchInput) => {
    setSearchValue(searchInput);
  };

  const handleSorting = (sortingInput) => {
    setSortingType(sortingInput);
  };
  return (
    <>
      <Navbar />
      <SearchAndSortBar onSearch={handleSearch} onSorting={handleSorting} />
      <BookList searchWith={searchValue} sortingType={sortingType} />
      <Footer />
    </>
  );
}
