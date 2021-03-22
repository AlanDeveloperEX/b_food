import React, {useState} from 'react';
import { SearchContainer, SearchIcon, SearchInp, DropDown } from './SearchInput.elements';
import { useHistory } from "react-router-dom";

function SearchInput({Name, Placeholder, ...props}) {

  const history = useHistory();

  const [showDrop, setShowDrop] = useState(false)
  const [dropValue] = useState('')
  const [items] = useState([
    {city : 'Brasilia', value : '66', state: 'SP', short: 'brasilia'},
    {city : 'São Paulo', value : '67', state: 'SP', short: 'saopaulo'},
    {city : 'Rio de Janeiro', value : '73', state: 'RJ', short: 'riodejaneiro'}
  ])

  const handleDropDown = () => {
    setShowDrop(!showDrop)
  }

  const setCurrentyValue = (currentyIdCity, currentyCity ) => {

    history.push(`/search/${currentyCity}/${currentyIdCity}`);

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
              <p id={key} onClick={() => setCurrentyValue(item.value, item.short)} key={key} value={item.value} city_search={item.short}>
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
