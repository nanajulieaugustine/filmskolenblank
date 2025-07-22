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
      backgroundColor: "transparent",
    }),
  };

  return (
    <div>
      <label 
        id="genre-label" 
        htmlFor="genre-select" 
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}
      >
        Vælg genre:
      </label>
      <Select
        inputId="genre-select"
        aria-labelledby="genre-label"
        options={options}
        placeholder="//Vælg genre"
        value={options.find(opt => opt.value === activeGenre)}
        onChange={selected => setActiveGenre(selected ? selected.value : "")}
        isClearable
        styles={customStyles}
      />
    </div>
  );
}

export default SelectGenre;
