import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#333"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
