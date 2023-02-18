import { Autocomplete, Grid, TextField } from "@mui/material"
import { useMemo, useState } from "react"
import CharacterCard from "../CharacterCard"
import { ICharacter } from ".."


// interface ICharacter {
//   name: string,
//   image: string,
//   species: string,
//   status: string
// }

interface AutocompleteOption {
  label: string,
  image: string,
  species: string,
  status: string,
  location: { 
    name: string, 
    url: string
  },
  gender: string
}

const Search = ({characters}: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const [character, setCharacter] = useState<AutocompleteOption>()

  const options:Array<AutocompleteOption> = useMemo(() => {
    let options: Array<AutocompleteOption> = []
    characters?.forEach((character: ICharacter) => {
      options.push({
        label: character.name,
        image: character.image,
        species: character.species,
        status: character.status,
        location: character.location,
        gender: character.gender
      })
    })
    return options
  }, [characters])

  const showCharacter = (character:AutocompleteOption | null) => {
    if (character !== null) {
      setIsVisible(true)
      setCharacter(character)
    } else 
      setIsVisible(false)
  }

  return (
    <Grid container sx={{ bgcolor: '#b437Ea', padding: '10px'}}>
      <Grid container item>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 400, margin: '0 auto' }}
          onChange={(event,value) => {showCharacter(value)}}
          renderInput={(params) => <TextField {...params} label="Search..." />}
        />
      </Grid>
      { isVisible 
        ? 
          <Grid 
            container 
            item 
            sx={{
              alignSelf: 'center', 
              height: 'fit-content', 
              width: 'fit-content',
              margin: '10px auto'
            }}
          >
            <CharacterCard 
              name={character?.label} 
              image={character?.image} 
              species={character?.species} 
              status={character?.status} 
              location={character?.location.name} 
              gender={character?.gender}
            />
          </Grid>
        : 
          <></>
      }
    </Grid>
  )
}

export default Search