import { genreName, PropsCard } from "../interfaces/card.interfaces";

export const CardVideogame = ({
  name,
  genres,
  rating,
  background_image,
  platforms,
}: PropsCard) => {
  return (
    <div className="card">
      <picture className="card__img">
        <img src={background_image} alt={name} />
      </picture>
      <h3 className="card__name">{name}</h3>
      <h5 className="card__genres">
        {genres.map((e: genreName) => e.name + " ")}
      </h5>
      <h6 className="card__rating">{rating} 🌟</h6>
      {/* <h3>{platforms?.map((e) => e)}</h3> */}
    </div>
  );
};
