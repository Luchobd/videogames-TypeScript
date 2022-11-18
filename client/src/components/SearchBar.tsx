import React, { useState } from "react";
import { useCustomDispatch } from "../hooks/redux";
import { getNameVideogame } from "../redux/videogames/videogamesActions";
import { PropsSearch } from "../interfaces/searchbar.interface";
import { BiSearchAlt } from "react-icons/bi";

export function SearchBar({ setCurrentPege }: PropsSearch) {
  const dispatch = useCustomDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(getNameVideogame(name));
    setCurrentPege(1);
    setName("");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => handleInputChange(e)}
          className="form__input"
        />
        <button className="form__btn">
          <i>
            <BiSearchAlt />
          </i>
        </button>
      </form>
    </div>
  );
}
