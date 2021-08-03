import React from "react";

function SearchForm({ value, onSubmit, onChange, onReset }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleReset = () => {
    onReset();
  };

  const handleSearchKeyword = (event) => {
    onChange(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        value={value}
        onChange={handleSearchKeyword}
      />
      {value.length > 0 && <button type="reset" className="btn-reset"></button>}
    </form>
  );
}

export default SearchForm;
