import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center my-6">
      <input
        className="border-5 border-gray-400 bg-blue-100  h-10 px-5 pr-18 rounded-lg text-sm focus:outline-none"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;