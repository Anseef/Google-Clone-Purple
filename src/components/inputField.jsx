import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const InputField = ({ searchTerm, setSearchTerm }) => {
  const clearInput = () => {
    setSearchTerm('');
  };

  return (
    <div className="inputField flex">
      <BiSearch className="icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search with Google"
      />
      {searchTerm !== '' && (
        <button onClick={clearInput} className="grid">
          <AiOutlineClose className="icon" />
        </button>
      )}
    </div>
  );
};

export default InputField;
