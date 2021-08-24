export const selectStyles = {
  indicatorSeparator: () => {},
  container: (styles, state) => ({
    ...styles,
    borderRadius: 0,
    border: "3px solid #cfe7e5",
    boxShadow: "0px 4px 6px 1px rgba(0,0,0,0.50)",
    padding: 0,
    margin: 0,
    marginTop:"15px",
    borderColor: state.isFocused ? "#a1d2ce" : "#cfe7e5"
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: 0,
    padding:"10px",
    outline: 0,
    border: 0,
    boxShadow: "none",
  }),
  menu: (styles, state) => ({
    ...styles,
    width: "calc(100% + 6px)",
    borderRadius: 0,
    border: "3px solid",
    boxShadow: "0px 4px 6px 1px rgba(0,0,0,0.50)",
    marginLeft: "-3px",
    padding:"0px",
    marginTop: "3px",
    borderTop: 0,
    borderColor: state.isFocused ? "#cfe7e5" : "#a1d2ce",
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    padding:"10px",
    borderBottom: state.data.borderBottom,
    background: "white",
    color: "black",
    fontWeight: state.isSelected ? "600" : "normal",
    "&:hover": {
      background: "#e1f0ef",
    },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: "all .2s ease",
    height: "24px",
    transform: state.selectProps.menuIsOpen ? "rotate(90deg)" : null,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    border: "none",
  }),
  placeholder: (defaultStyles) => {
      return {
          ...defaultStyles,
          color: '#000',
      }
  },
};