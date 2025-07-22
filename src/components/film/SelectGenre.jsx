import Select from 'react-select'
import film from "@/backend/film.json"

const SelectGenre = ({ activeGenre, setActiveGenre }) => {
  const allGenres = film.flatMap(f => f.genre.split(',').map(g => g.trim()));

  const uniqueGenres = Array.from(new Set(allGenres));

  const options = uniqueGenres.map(genre => ({
    value: genre.toLowerCase(),
    label: genre
  }));

  const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minWidth: "200px",
    background: "var(--background)",
    borderColor: state.isFocused ? "var(--yellow)" : "var(--background)",
    boxShadow: "2xl",
    "&:hover": {
      borderColor: "var(--yellow)",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused
      ? "var(--red)"
      : "var(--background)",
    color: "var(--yellow)",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--yellow)",
    fontStyle: "italic",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--yellow)",
    fontStyle: "italic",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent", 
    boxShadow: "none",             
    border: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: "transparent", // listen selv
  }),
};

  return (
    <Select
      options={options}
      placeholder="//Vælg genre"
      label="vælg genre"
      value={options.find(opt => opt.value === activeGenre)}
      onChange={selected => setActiveGenre(selected ? selected.value : "")}
      isClearable
      styles={customStyles}
    />
  );
}

export default SelectGenre;
