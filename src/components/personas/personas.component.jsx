import Stack from '@mui/material/Stack';
import Persona from '../persona.component/persona.component';

import './personas.styles.scss';

const Personas = ({personas}) => {
    return (
        <Stack direction="row" spacing={6} className="stack">
            {personas.map((persona) => (
            <Persona key={persona.id} persona={persona} />
            ))}
        </Stack>
    )
}

export default Personas