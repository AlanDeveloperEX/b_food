import React, {useState} from 'react';
import { SearchContainer, SearchIcon, SearchInp, DropDown } from './SearchInput.elements';
import { useHistory } from "react-router-dom";

function SearchInput({Name, Placeholder, ...props}) {

  const history = useHistory();

  const [showDrop, setShowDrop] = useState(false)
  const [dropValue] = useState('')
  const [items] = useState([
    {city : 'Brasilia', value : '66', state: 'SP'},
    {city : 'São Paulo', value : '67', state: 'SP'},
    {city : 'Rio de Janeiro', value : '73', state: 'RJ'}
  ])

  const handleDropDown = () => {
    setShowDrop(!showDrop)
  }

  const setCurrentyValue = (currentyCity, currentyIdCity) => {
    console.log(currentyCity, currentyIdCity)
    history.push(`/search/saopaulo/67`);

    setShowDrop(!showDrop)
  }

  return (
    <SearchContainer>
      <SearchIcon/>
      <SearchInp
        name={Name}
        placeholder={Placeholder}
        onClick={handleDropDown}
      />
      
      {
        showDrop ?
        <DropDown value={dropValue} >
          {
            items.map((item, key) => 
              <p id={key} onClick={(id) => setCurrentyValue(id.value, id.city_search)} key={key} value={item.value} city_search={item.city}>
                {item.city} - {item.state}
              </p>
            )
          }
        </DropDown> 
        : ''
      }
      
        
      
    </SearchContainer>
  )
}

export default SearchInput
