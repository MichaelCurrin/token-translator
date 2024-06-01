import './SortingButtons.css';

function SortingButtons({ sortBy, onSort }) {
  return (
    <div className="sorting-buttons">
      <span>Sort by: </span>
      <label>
        <input
          type="radio"
          value="providerAndModel"
          checked={sortBy === 'providerAndModel'}
          onChange={() => onSort('providerAndModel')}
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          value="tokens"
          checked={sortBy === 'tokens'}
          onChange={() => onSort('tokens')}
        />
        Input size (largest first)
      </label>
    </div>
  );
}

export default SortingButtons;
