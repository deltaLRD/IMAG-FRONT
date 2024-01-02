import React,{useState} from 'react';
import { LazyLoadImage, trackWindowScroll }from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = (props) => {
  const [imgsrc, handleImageErrored] = useState(props.image);
    return (
    <LazyLoadImage
      alt={imgsrc}
      effect="blur"
      src={imgsrc} 
      scrollPosition={props.scrollPosition}
      width={props.width}
      height={props.height}
      threshold={1}
      onError={()=>{handleImageErrored('../static/avatar/default_avatar.jpg')}}
      // placeholderSrc={props.tinyimage}
      // delayMethod={'debounce'}   
      />
    )
      
};


export default trackWindowScroll(MyImage) 