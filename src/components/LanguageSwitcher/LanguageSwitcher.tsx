import { selectLanguage } from "@/redux/language/selector";
import { setLanguage } from "@/redux/language/slice";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import "../../locales/i18n";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const options = [
    { value: "en", label: "EN" },
    { value: "ua", label: "UA" },
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
  };

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === language)}
      onChange={handleChange}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

export default LanguageSwitcher;
