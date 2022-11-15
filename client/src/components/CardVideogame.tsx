import { genreName, PropsCard } from "../interfaces/card.interfaces";

export const CardVideogame = ({
  name,
  genres,
  rating,
  background_image,
  platforms,
}: PropsCard) => {
  return (
    <div>
      <div>
        <picture>
          <img src={background_image} alt={name} width={150} />
        </picture>
        <h2>{name}</h2>
        <h3>{genres.map((e: genreName) => e.name)}</h3>
        <h4>{rating}</h4>
        {/* <h3>{platforms?.map((e) => e)}</h3> */}
      </div>
    </div>
  );
};
