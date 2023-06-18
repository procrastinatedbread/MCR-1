const Book = ({ book, handleCategoryChange }) => {
  const { id, title, author, category, image } = book;
  const handleSelectChange = (e) => {
    const category = e.target.value;
    handleCategoryChange(id, category);
  };

  return (
    <div className="book">
      <img src={image} alt="kitaabkitasveer" />
      <h3>{title}</h3>
      <p>{author}</p>
      <select value={category} onChange={handleSelectChange}>
        <option value="reading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default Book;
