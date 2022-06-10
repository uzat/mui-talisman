import React from 'react';
import './persona.styles.scss'

import Avatar from '@mui/material/Avatar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

const Persona = ({ persona }) => {
    const { imageUrl, name, age, status, smoker, diet, drinks } = persona;
    return (
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Meet {name}!</Typography>
              <em>{"Age: "}</em><b>{age}</b><br/><em>{"Status: "}</em><b>{status}</b><br/>{' '}
              <em>{"Smoker: "}</em><b>{smoker}</b><br/><em>{"Diet: "}</em><b>{diet}</b><br/>{' '}
              <em>{"Drinks: "}</em><b>{drinks}</b><br/>
            </React.Fragment>
          }
        >
        <Avatar className='av' src={imageUrl} alt='Single male' sx={{ width: 168, height: 168 }} />
        </HtmlTooltip>
    )
}

export default Persona