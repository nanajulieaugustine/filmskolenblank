"use client";
import Kategorier from "./Kateogier";
import { useState } from "react";
import FilmCard from "./FilmCard";

const ListFilm = () => {
     const [activeCategory, setActiveCategory] = useState("vis alle");
    return ( <div className="grid gap-15">
        <Kategorier activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}/>
        <FilmCard activeCategory={activeCategory}/>
    </div> );
}
 
export default ListFilm;