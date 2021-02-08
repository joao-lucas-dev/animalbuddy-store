import React from 'react';
import BeautyStars from 'beauty-stars';
import { format, parseISO } from 'date-fns';

import { ReviewArea, Mid, LeftSide, RightArea } from './styles';

import ImageSilder from '../ImageSilder';

interface IItem {
  _id: string;
  name: string;
  stars: number;
  state: string;
  feedback: string;
  updatedAt: string;
  images_url: Array<string>;
}

interface IReview {
  key: string;
  item: IItem;
}

const Review: React.FC<IReview> = ({ item }) => {
  const formattedDate = format(parseISO(item.updatedAt), "dd'/'MM'/'yyyy'");

  return (
    <ReviewArea key={item._id}>
      <Mid>
        <LeftSide>
          <h2>
            {item.name}, {item.state} - Brasil
          </h2>
          <span>{formattedDate}</span>
          <BeautyStars
            value={item.stars}
            gap="5px"
            activeColor="#FFB900"
            inactiveColor="#fce4a1"
            size="15px"
          />
          <p>{item.feedback}</p>
        </LeftSide>

        <RightArea>
          <ImageSilder slides={item.images_url} />
        </RightArea>
      </Mid>
    </ReviewArea>
  );
};

export default Review;
