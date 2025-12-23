import "./Category.css";

const Category = ({
  categoryName,
  imgUrl,
  numberOfItems,
  bgcolor,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className="d-flex align-items-center p-3 rounded gap-1 position-relative category-hover"
      style={{ backgroundColor: bgcolor, cursor: "pointer" }}
      onClick={onClick}
    >
      <div style={{ position: "relative", marginRight: "15px" }}>
        <img src={imgUrl} alt={categoryName} className="category-image" />
      </div>
      <div>
        <h6 className="text-white mb-0">{categoryName}</h6>
        <h6 className="text-white mb-0">{numberOfItems} Items</h6>
      </div>
      {isSelected && <div className="active-category"></div>}
    </div>
  );
};

export default Category;
