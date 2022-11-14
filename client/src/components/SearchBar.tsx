import React, { useState } from "react";
import { useCustomDispatch } from "../hooks/redux";
import { getNameVideogame } from "../redux/videogames/videogamesActions";
import { PropsSearch } from "../interfaces/searchbar.interface";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search..."
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button>Click</button>
    </form>
  );
}
