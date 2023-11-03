import * as Stars from "react-icons/fa";

interface Props {
  rating: number;
}
const RatingStars = (props: Props) => {
  let starsArray = [];

  let maxRating = 5;
  let integer = Math.floor(props.rating);
  let fraction = props.rating - integer;
  let numberOfEmptyStars = maxRating - integer;
  let newFullStar = <Stars.FaStar className="h-5 w-5 text-amber-500" />;
  let newHalfStar = <Stars.FaStarHalfAlt className="h-5 w-5 text-amber-500" />;
  let newEmptyStar = <Stars.FaStar className="h-5 w-5 text-slate-300" />;

  if (fraction === 0 && integer !== 0) {
    // all full stars
    for (let i = 0; i < integer; i++) {
      starsArray.push(newFullStar);
    }
    // handle empty stars
    if (numberOfEmptyStars > 0 && integer !== 0) {
      for (let i = 0; i < numberOfEmptyStars; i++) {
        starsArray.push(newEmptyStar);
      }
    }
  } else {
    // all full stars plus half stars
    for (let i = 0; i < integer; i++) {
      starsArray.push(newFullStar);
    }
    starsArray.push(newHalfStar);
    // handle empty stars
    if (numberOfEmptyStars > 0) {
      for (
        let i = 0;
        i < numberOfEmptyStars && starsArray.length < maxRating;
        i++
      ) {
        starsArray.push(newEmptyStar);
      }
    }
  }

  // initial when it is zero
  if (integer === 0) {
    starsArray = [];
    for (let i = 0; i < maxRating; i++) {
      starsArray.push(newEmptyStar);
    }
  }

  return (
    <div className="flex gap-2">
      <span className="flex text-green-600 group-hover:text-green-400">
        {props.rating?.toFixed(1)}
      </span>
      {starsArray.map((star, idx) => (
        <span className="flex" key={idx}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
