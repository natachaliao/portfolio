import { useEffect } from 'react';
import './lighthouse.css';
import arrow from './../assets/utils/arrow.png';
import close from './../assets/utils/close.png';

const Lighthouse = (props) => {
  const { current, pictures, setCurrent, displayItem } = props;

  useEffect(() => document.body.style.overflow = "hidden", []);

  const onArrowClick = (type, current, pictures) => {
    const s = type === "next" ? 1 : -1;
    const index = (current+s+Math.max(pictures.length*(-s+current), 0))%pictures.length;
    if(index >= pictures.length && index < 0) {
      console.error("index out of bound");
      setCurrent(-1);
      return;
    }
    setCurrent(index);
  }

  const closeLightHouse = () => {
    document.querySelector(".lighthouse").style.animationPlayState = "running";
    setTimeout(() => {
      setCurrent(-1);
      document.body.style.overflow = "initial";
    }, 300);
  }

  return (
    <div className="lighthouse">
      <img className="close" alt="close" src={close} onClick={closeLightHouse}></img>
      <img className="left-arrow" alt="previous" src={arrow} onClick={() => onArrowClick("previous", current, pictures)}></img>
      <img className="right-arrow" alt="next" src={arrow} onClick={() => onArrowClick("next", current, pictures)}></img>
      <div className="currentPicture">
        {displayItem(current, pictures[current].media, pictures[current].file, "", "", "current")}
      </div>
      <div className="l-items">
        {pictures.map((picture, i) => {
          let currentThumbnail = i === current ? "currentThumbnail" : "";
          let media = picture.media === "video" ? "video-thumbnail" : picture.media;
          return displayItem(i, media, picture.file, `l-item-${i}`, currentThumbnail, "thumbnail");
        })}
      </div>
    </div>
  )
}

export { Lighthouse };