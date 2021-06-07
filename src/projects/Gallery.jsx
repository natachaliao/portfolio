import { useEffect, useState } from 'react';
import './gallery.css';
import { Lighthouse } from './Lighthouse';

const Gallery = (props) => {
  const { pictures } = props;
  const [selected, setSelected] = useState(-1);

  const getYoutubeVideoId = (src) => {
    const split = src.split('/');
    return split[split.length-1];
  }

  const displayItem = (index, media, file, id, classname, alt) => {
    switch (media) {
      case "picture":
        return (
          <img 
            alt={alt}
            key={id} 
            className={classname}
            src={require("../assets/" + file).default}
            onClick={() => setSelected(selected => index)}
          >
          </img>
        );
      case "video":
        return (
          <iframe  
            key={id} 
            className={`video ${classname}`}
            src={file} 
            title="YouTube video player" 
            //width="560" height="315" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        );
      case "video-thumbnail":
        const src = "//img.youtube.com/vi/"+ getYoutubeVideoId(file) + "/0.jpg";
        return (
          <div key={id} className={classname} onClick={() => setSelected(selected => index)}>
            <img className="videothumbnail-img" alt={alt} src={src}></img>
            <img alt="play icon" src={require("../assets/utils/play.png").default} className="play-icon"></img>
          </div>

        )
      default:
        break;
    }
  }

  // const setColGallery = (length) => {
  //   if (length >= 3)
  //     document.documentElement.style.setProperty("--colGallery", 3);
  //   else
  //     document.documentElement.style.setProperty("--colGallery", length);
  // }

  useEffect(() => {
    //setColGallery(pictures.length);
  })

  return (
    <div className="gallery">
      {pictures.map((picture, i) => {
        let media = picture.media === "video" ? "video-thumbnail" : picture.media;
        return displayItem(i, media, picture.file, `galleryitem-${i}`, "", "");
      })}

      {selected !== -1 && <Lighthouse 
        pictures={pictures} 
        current={selected} 
        setCurrent={(current) => setSelected(selected => current)} 
        displayItem = {displayItem}
      />}
    </div>
  )
}

export { Gallery };