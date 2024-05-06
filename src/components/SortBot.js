function SortBar({handleSortOption,sortOption}){
   
    return(
        <select className="form-select" aria-label="Default select example" value={sortOption} onChange={handleSortOption}>
          <option >Sort bots by: </option>
          <option value="health">health</option>
          <option value="damage">damage</option>
          <option value="armor">armor</option>
        </select>
    )
}
export default SortBar