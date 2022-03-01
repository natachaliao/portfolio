import './categories.css';
import { useEffect } from 'react';


const Categories = (props) => {

  const { categories, selectedCateg, setSelectedCateg } = props;

  // Selected button 
  const selectCategory = (name, id) => {
    const categoryButton = document.getElementById(`p-category-${id}`);
    const categoryButtons = document.querySelectorAll(".p-category");

    categoryButtons.forEach(button => button.classList.remove("selected"));
    categoryButton.classList.add("selected");
  }

  const getIdFromName = (name, array) => {
    let i = 0;
    while (i < array.length) {
      if (array[i].name === name) {
        return array[i].id;
      }
      i++;
    }
    console.error("name isn't in array");
    return -1
  }

  useEffect(() => {
    const id = getIdFromName(selectedCateg, categories);
    selectCategory(selectCategory, id);
  })

  return (
    <div id="p-categories-wp">
      {/* <button className='dropbtn'>Choose a category</button> */}
      <CategoriesSelect 
        categories={categories} 
        selectedCateg={selectedCateg} 
        setSelectedCateg={setSelectedCateg} 
      />
      <div id="p-categories">
        {categories.map((category) =>
          <button
            className="p-category"
            id={`p-category-${category.id}`}
            key={`${category.id}-${category.name}`}
            onClick={() => setSelectedCateg(category.name)}
          >
            {category.name}
          </button>
        )}        
      </div>

    </div>
  )
}

const CategoriesSelect = (props) => {
  const { categories, selectedCateg, setSelectedCateg } = props;
  
  return (
    <select name="categories" id="categories-select"
      onChange={e => setSelectedCateg(e.target.value)}>
        <option value="">{selectedCateg}</option>
        {categories.map((category) =>
          <option
            value={category.name}
            id={`select-p-category-${category.id}`}
            key={`select-${category.id}-${category.name}`}
          >
            {category.name}
          </option>
        )}  
    </select>
  )
}

export { Categories };