import React from 'react';
import { GroupContainer } from './FilterGroup.elements';

const FilterGroup = ({title, children}) => {

  return (
    <GroupContainer>
        <h3>{title}</h3>
        {children}
    </GroupContainer>
  )
}

export default FilterGroup;
