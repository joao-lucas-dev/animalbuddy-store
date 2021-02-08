import React, {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';

import { Button } from './styles';

interface IImagesArray {
  url: string;
  name: string;
}

interface IImageSlider {
  url: string;
  name: string;
  setImgUrlSelected: Dispatch<SetStateAction<IImagesArray>>;
  imgUrlSelected: IImagesArray;
  applyMarginLeft: boolean;
}

const ImageSlider: React.FC<IImageSlider> = ({
  url,
  name,
  setImgUrlSelected,
  imgUrlSelected,
  applyMarginLeft,
}) => {
  const [imgSelected, setImgSelected] = useState(false);

  const handleClick = useCallback(() => {
    setImgUrlSelected({ url, name });
  }, [url, name, setImgUrlSelected]);

  useEffect(() => {
    if (imgUrlSelected.url === url) {
      setImgSelected(true);
    } else {
      setImgSelected(false);
    }
  }, [imgUrlSelected, url]);

  return (
    <Button
      imgSelected={imgSelected}
      applyMarginLeft={applyMarginLeft}
      type="button"
      onClick={handleClick}
    >
      <img src={url} alt={name} />
    </Button>
  );
};

export default ImageSlider;
