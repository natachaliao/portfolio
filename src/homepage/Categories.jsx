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
    while(i < array.length) {
      if(array[i].name === name) {
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
    <div id="p-categories">
      {categories.map((category) =>
        <span 
          className="p-category"
          id={`p-category-${category.id}`} 
          key={`${category.id}-${category.name}`}
          onClick={() => setSelectedCateg(category.name)}
        >
          {category.name}
        </span>
      )}
    </div>
  )
}

export { Categories };