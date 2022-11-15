import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { useParams, Link } from "react-router-dom";
import { getDetailVideogames } from "../redux/videogames/videogamesActions";

export function DetailVideogames() {
  const dispatch = useCustomDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailVideogames(id));
  }, [dispatch, id]);

  const { videogamesDetail } = useCustomSelector((state) => state.videogames);
  console.log(videogamesDetail);

  return (
    <div>
      <div>
        <picture>
          <img
            src={videogamesDetail.background_image}
            alt="img-detail"
            width="200px"
          />
        </picture>

        <div>
          <h2>{videogamesDetail.name}</h2>
          <h3>{videogamesDetail.genres?.map((e) => e.name)}</h3>
          <h3>{videogamesDetail.released}</h3>
          <h3>{videogamesDetail.rating}</h3>
          <h3>{videogamesDetail.platforms?.map((e) => e)}</h3>
          <h6>{videogamesDetail.description}</h6>
        </div>

        <div>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
