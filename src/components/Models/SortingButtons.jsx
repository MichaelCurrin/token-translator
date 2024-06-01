import './SortingButtons.css';

function SortingButtons({ sortBy, handleOnSortBy }) {
  return (
    <div className="sorting-buttons">
      <span>Sort by: </span>
      <label>
        <input
          type="radio"
          value="providerAndModel"
          checked={sortBy === 'providerAndModel'}
          onChange={() => handleOnSortBy('providerAndModel')}
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          value="tokens"
          checked={sortBy === 'tokens'}
          onChange={() => handleOnSortBy('tokens')}
        />
        Input size (descending)
      </label>
    </div>
  );
}

export default SortingButtons;
