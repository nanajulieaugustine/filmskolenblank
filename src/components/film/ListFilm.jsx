"use client";
import Kategorier from "./Kateogier";
import { useState } from "react";
import FilmCard from "./FilmCard";
import film from "@/backend/film.json"
import SelectGenre from "./SelectGenre";

const ListFilm = () => {
     const [activeCategory, setActiveCategory] = useState("vis alle");
     const [activeGenre, setActiveGenre] = useState();

       const filteredFilm = film.filter(film => {
       const matchCategory =
         activeCategory === "vis alle" ||
         film.generation.toLowerCase() === activeCategory.toLowerCase();
     
           const matchGenre =
             !activeGenre ||
             film.genre
               .split(",")
               .map(g => g.trim().toLowerCase())
               .includes(activeGenre);
     
           return matchCategory && matchGenre;
         });
     

    return ( <div className="grid gap-15">
        <Kategorier activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}/>
        <div className="flex flex-col md:flex-row gap-10 justify-between px-(--content-width)">
        <span className="yellow italic">{`// ${filteredFilm.length} ud af ${film.length} udgivede film`}</span>
        <SelectGenre activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}/>
        </div>
        <FilmCard activeGenre={activeGenre} activeCategory={activeCategory}/>
    </div> );
}
 
export default ListFilm;