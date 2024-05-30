import "./SortingButtons.css";

function SortingButtons({ sortOption, onSort }) {
  return (
    <div className="sorting-buttons">
      <span>Sort by: </span>
      <label>
        <input
          type="radio"
          value="providerAndModel"
          checked={sortOption === "providerAndModel"}
          onChange={() => onSort("providerAndModel")}
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          value="tokens"
          checked={sortOption === "tokens"}
          onChange={() => onSort("tokens")}
        />
        Input size (largest first)
      </label>
    </div>
  );
}

export default SortingButtons;
