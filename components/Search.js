const Search = () => {
  return (
    <div class="input-group mb-3 search-input">
      <input
        type="text"
        class="form-control"
        placeholder="Win Search"

      />
      <div class="input-group-append">
        <button class="btn btn-success" type="button">
          <i className="fal fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
