import React from 'react';
import { SideContainer, SideColumn } from './SideBarFilter.elements';
import { FilterGroup, Checkbox } from '../index';
import { useFilter } from '../../providers/filterContext';

const SideBarFilter = () => {

  const { checkedStars, setCheckedStars, isCheck, setIsCheck } = useFilter();

  const toogleStars = (target) => {

    if (target === checkedStars) {
      setCheckedStars(0)
    } else {
      setCheckedStars(target)
    }

  }

  const toogleChecked = (target) => {

    if (target === isCheck) {
      setIsCheck(0)
    } else {
      setIsCheck(target)
    }

  }

  return (
    <SideContainer>
      <SideColumn>

        <FilterGroup
          title = "NOTE"
          typeStars
        >

          <Checkbox
            stars = "1"
            trigger={() => toogleStars(1)}
            status = {checkedStars === 1 ? true : false}
          />

          <Checkbox
            stars = "2"
            trigger={() => toogleStars(2)}
            status = {checkedStars === 2 ? true : false}
          />

          <Checkbox
            stars = "3"
            trigger={() => toogleStars(3)}
            status = {checkedStars === 3 ? true : false}
          />

          <Checkbox
            stars = "4"
            trigger={() => toogleStars(4)}
            status = {checkedStars === 4 ? true : false}
          />

          <Checkbox
            stars = "5"
            trigger={() => toogleStars(5)}
            status = {checkedStars === 5 ? true : false}
          />

        </FilterGroup>

        <FilterGroup
          title = "COST"
        >
          
          <Checkbox 
            trigger={() => toogleChecked(1)} 
            status = {isCheck === 1 ? true : false}
          >
            <span>
              R$ 50.00
            </span>
          </Checkbox>

          <Checkbox 
            trigger={() => toogleChecked(2)} 
            status = {isCheck === 2 ? true : false}
          >
            <span>
              R$ 50.00 A R$ 80.00
            </span>
          </Checkbox>

          <Checkbox 
            trigger={() => toogleChecked(3)} 
            status = {isCheck === 3 ? true : false}
          >
            <span>
              R$ 80.00 A R$ 110.00
            </span>
          </Checkbox>

          <Checkbox 
            trigger={() => toogleChecked(4)} 
            status = {isCheck === 4 ? true : false}
          >
            <span>
              R$ 110.00 OU MAIOR
            </span>
          </Checkbox>

        </FilterGroup>

      </SideColumn>
    </SideContainer>
  )
}

export default SideBarFilter;
