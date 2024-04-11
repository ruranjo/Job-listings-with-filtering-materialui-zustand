import { Box, SxProps } from '@mui/material'
import React from 'react'
import { Item } from '../Item'
import { useJobStore } from '../../context/JobContext'
import { IconRemove } from '../../utils/assets'
import { desaturatedDarkCyan } from '../../styles/variables'


export interface ListItemsStyle{
  mainContainer:  SxProps,
  listItemsStyle:  SxProps,
  tagsFilterList:  SxProps,
}

const listItemsStyle : ListItemsStyle = {
  
  mainContainer:{
    //border:'1px solid black',
    width:'80%',
    height:'2000px',
    marginTop:'12rem',
    display:'flex',
    flexDirection:'column',
  },
  tagsFilterList:{
    //border:'1px solid yellow',
    'span':{
      display:'flex',
      alignItems:'center',
    }
  },
  listItemsStyle:{
    //border:'1px solid yellow',
    gap:5,
    display:'flex',
    flexDirection:'column',
    
  }
}


export interface Props {
  
}

const ListItems:React.FC<Props> = () => {
  const { jobsData, tagsFilter, setTagsFilter } = useJobStore();
  
  const handleDelete = (tagToDelete: string) => {
    setTagsFilter(tagsFilter.filter(tag => tag !== tagToDelete));
  };

  const filterJobs = () => {
    

    // If there are no selected tags, return all jobs
    if (tagsFilter.length === 0) {
      return jobsData;
    }
    
    // Filter jobs that contain at least one of the tags in tagsFilter
    return jobsData.filter(job => {
      // Check if any of the job's tags are in tagsFilter
      return job.tag.some(tag => tagsFilter.includes(tag));
    });
  };

  
  
  return (
    <Box sx={listItemsStyle.mainContainer}>
      <Box sx={listItemsStyle.tagsFilterList}>
      {/* Check if tagsFilter has items before mapping */}
      {tagsFilter.length > 0 && tagsFilter.map((tag, index) => (
        <span key={index} style={{ marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block' }}>
        {tag+" "}
        <img
          src={IconRemove}
          alt="delete"
          style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem', cursor: 'pointer', backgroundColor:desaturatedDarkCyan, padding:'0.2rem', borderRadius:'12px'}}
          onClick={() => handleDelete(tag)}
        />
      </span>
      ))
      }
      </Box>
      <Box sx={listItemsStyle.listItemsStyle}>
          {
            filterJobs().map((item, index)=>{
              return (
              <Item job={item} key={index} />
              )
            })
          }
      </Box>
    </Box>
  )
}

export default ListItems