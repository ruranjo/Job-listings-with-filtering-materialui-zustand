import React from 'react';
import { Card, CardContent, Typography, Chip, Box, SxProps } from '@mui/material';
import { Job } from '../../interfaces/type.interface';
import { useJobStore } from '../../context/JobContext';
import { desaturatedDarkCyan, headingFontWeights, veryDarkGrayishCyan } from '../../styles/variables';

interface JobItemProps {
  job: Job;
}

export interface ItemStyle {
  card: SxProps;
  cardContent: SxProps;
  cardLeft: SxProps;
  cardRight: SxProps;
}

const itemStyle: ItemStyle = {
  card: {
    backgroundColor: 'lightGrayishCyanFilterTablets',
    //border: '1px solid red',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', // Agrega sombra a la tarjeta
  },
  cardContent: {
    //border: '1px solid red',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    '@media (max-width:600px)': {
      flexDirection: 'column', // Cambia a tu nuevo color cuando estás en dispositivos pequeños (menores o iguales a 600px)
      margin:'1rem',
      padding:'1rem',
      //border:'1px solid red'
    },
  },
  cardLeft:{
    display:'flex',
    //border: '1px solid red',
    gap:3,
    minWidth:360,
    '@media (max-width:600px)': {
      flexDirection: 'column', // Cambia a tu nuevo color cuando estás en dispositivos pequeños (menores o iguales a 600px)
      minWidth:260,
    },
  },
  cardRight:{
    
  }
};

const Item: React.FC<JobItemProps> = ({ job }) => {

  const { tagsFilter, setTagsFilter } = useJobStore(); // Obtén tagsFilter y setTagsFilter del contexto

  const scrollToTop = (): void => {
    const scrollInterval = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // Cantidad de píxeles a desplazar en cada iteración
      } else {
        clearInterval(scrollInterval); // Borrar el intervalo cuando alcanzamos la parte superior
      }
    }, 5); // Velocidad de la animación en milisegundos
  };

  const handleTagClick = (tag: string) => {
    if (!tagsFilter.includes(tag)) { // Verifica si el tag ya está en tagsFilter
      setTagsFilter([...tagsFilter, tag]); // Agrega el tag al array tagsFilter
    }
  };

  return (
    <Card sx={itemStyle.card}>
      <CardContent sx={itemStyle.cardContent}>
        <Box sx={itemStyle.cardLeft}>
          <Box>
            <img src={job.icon} alt={job.company}  />
          </Box>
          <Box>
            <Typography variant="h6" component="h2" gutterBottom color={desaturatedDarkCyan} fontWeight={headingFontWeights[1]}>
              {job.company}
              {job.isNew && <Chip label="NEW!" sx={{color:'white', backgroundColor:desaturatedDarkCyan }} size="small" style={{ marginLeft: '0.5rem' }} />}
              {job.isFeatured && <Chip label="FEACTURED" sx={{color:'white', backgroundColor:veryDarkGrayishCyan}} size="small" style={{ marginLeft: '0.5rem' }} />}
            </Typography>
            <Typography variant="body1" gutterBottom color={veryDarkGrayishCyan} fontWeight={headingFontWeights[1]}>
              {job.position}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom fontWeight={headingFontWeights[0]}>
              {`${job.postedAt} • ${job.contract} • ${job.location}`}
            </Typography>
          </Box>
        </Box>
        <Box  sx={itemStyle.cardRight}>
          {job.tag.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                color:desaturatedDarkCyan,
                '&:hover': {
                  backgroundColor:desaturatedDarkCyan,
                  color:'white'
                }
              }}
              style={{ marginRight: '0.5rem', marginBottom: '0.5rem', cursor: 'pointer',  fontWeight: headingFontWeights[1]}}
              onClick={() => {scrollToTop(); handleTagClick(tag);} } // Maneja el clic en el chip del tag
            />
          ))}
        </Box>
        {/* Aquí puedes agregar la lógica para mostrar el ícono */}
        
      </CardContent>
    </Card>
  );
};

export default Item;