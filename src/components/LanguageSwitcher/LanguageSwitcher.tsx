import { selectLanguage } from "@/redux/language/selector";
import { setLanguage } from "@/redux/language/slice";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import "../../locales/i18n";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const options = [
    {
      value: "en",
      label: (
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{ width: "2em", height: "2em" }}
        />
      ),
    },
    {
      value: "ua",
      label: (
        <ReactCountryFlag
          countryCode="UA"
          svg
          style={{ width: "2em", height: "2em" }}
        />
      ),
    },
  ];

  const handleChange = (selectedOption) => {
    dispatch(setLanguage(selectedOption.value));
    i18n.changeLanguage(selectedOption.value);
  };

  const customStyles = {
    indicatorsContainer: (provided) => ({
      ...provided,
      display: "none",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #aaa",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      // Custom styles for options
      backgroundColor: (state.isFocused && "transperrent"),
      color: state.isFocused ? "black" : "black",
      padding: "10px",
    }),
  };

  return (
    <div>
      <Select
        options={options}
        value={options.find((option) => option.value === language)}
        onChange={handleChange}
        isSearchable={false}
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSwitcher;
