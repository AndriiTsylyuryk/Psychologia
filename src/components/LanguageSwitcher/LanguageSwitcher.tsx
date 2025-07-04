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
      value: "uk",
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
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #aaa",
      },
    }),
    menu: (provided) => ({
      ...provided,
       zIndex: 9999,
      // display: "none", 
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  return (
    <div >
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
