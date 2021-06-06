import { useEffect } from 'react';
import './lighthouse.css';
import arrow from './../assets/utils/arrow.png';
import close from './../assets/utils/close.png';

const Lighthouse = (props) => {
  const { current, pictures, setCurrent } = props;

  useEffect(() => document.body.style.overflow = "hidden", []);

  const onClickThumbnail = (picture) => {
    let i = 0;
    while(i<pictures.length) {
      if(picture === pictures[i]) {
        setCurrent(pictures[i]);
        return
      }
      i++;
    }
  }

  const closeLightHouse = () => {
    setCurrent(null);
    document.body.style.overflow = "inherit";
  }

  return (
    <div className="lighthouse">
      <img className="close" src={close} onClick={closeLightHouse}></img>
      {/* <img className="left-arrow" src={arrow}></img> */}
      {/* <img className="right-arrow" src={arrow}></img> */}
      <img className="currentPicture" src={require("../assets/" + current).default}></img>
      <div className="l-pictures">
        {pictures.map((picture, i) => {
          let currentThumbnail = picture === current ? "currentThumbnail" : "";
          console.log(picture);
          return (<img 
              className={currentThumbnail} 
              key={`l-picture-${i}`} 
              src={require("../assets/" + picture).default}
              onClick={() => onClickThumbnail(picture)}>
            </img>);
        })}
      </div>
    </div>
  )
}

export { Lighthouse };