import React, {useState} from 'react';

export const FilterContext = React.createContext({});

export const FilterProvider = (props) => {

  const [checkedStars, setCheckedStars] = useState(0);
  const [isCheck, setIsCheck] = useState(0);

  return (
    <FilterContext.Provider value={{ checkedStars, setCheckedStars, isCheck, setIsCheck }}>
      {props.children}
    </FilterContext.Provider>
  )
};

export const useFilter = () => React.useContext(FilterContext);