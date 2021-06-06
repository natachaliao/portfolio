import { useState } from 'react';
import './gallery.css';
import { Lighthouse } from './Lighthouse';

const Gallery = (props) => {
  const { pictures } = props;
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery">
      {pictures.map((picture, i) => {
        if (pictures.length < 3)
          document.documentElement.style.setProperty("--colGallery", 2);
        else
          document.documentElement.style.setProperty("--colGallery", 3);
        return (
          <img 
            alt="" 
            key={`picture-${i}`} 
            src={require("../assets/" + picture).default}
            onClick={() => setSelected(selected => picture)}
          >
          </img>
        );
      })}

      {selected && <Lighthouse pictures={pictures} current={selected} setCurrent={(current) => setSelected(selected => current)} />}
    </div>
  )
}

export { Gallery };