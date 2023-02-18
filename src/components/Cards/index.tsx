import { Grid } from "@mui/material"
import { useState, useEffect } from 'react'
import { getCharacter } from '../../api/characters'
import CharacterCard from "./CharacterCard"
import Search from "./Search"

export interface ICharacter {
  name: string,
  image: string,
  species: string,
  status: string,
  location: { 
    name: string, 
    url: string
  },
  gender: string
}

const Cards = () => {
  const [characters, setCharacters] = useState<Array<ICharacter>>()

  useEffect(() => {
    getCharacter().then((data) => {
      setCharacters(data.results)
    })
  },[])

  console.log(characters)

  return (
    <Grid 
      item 
      container
      sx={{
        disply: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
      }}
    >
      <Search characters={characters}/>
      { characters?.map(card => 
        <Grid 
          container 
          item 
          key={card.name} 
          xl={2} 
          sx={{
            marginRight: '1px', 
            marginTop: '10px',
          }}
        >
          <CharacterCard
            name={card.name} 
            image={card.image} 
            status={card.status} 
          />
        </Grid>
      )}
    </Grid>
  )
}

export default Cards;