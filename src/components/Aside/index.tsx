import { Grid, styled, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Aside = () => {

  const StyledAccordion = styled(Accordion)`
    height: fit-content; 
    background-color: #ef5b5b; 
    margin: 6px 0;
    border: 2px solid black;
    border-radius: 0;
  `
  return (
    <Grid 
      container 
      item 
      sx={{ 
        bgcolor: '#ef5b5b',
        width: '100%', 
        marginLeft: '10px'
      }}
    >
      <Grid>
        <Typography sx={{ textAlign: 'center', margin: '10px 0'}}>
          ASIDE
        </Typography>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Article 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Article 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </Grid>
    </Grid>
  )
}

export default Aside;