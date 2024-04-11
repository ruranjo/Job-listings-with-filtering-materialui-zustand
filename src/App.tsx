import { Box, SxProps } from '@mui/material'
import './App.css'
import { ListItems } from './components'
import { BgHeaderDesktop } from './utils/assets'
import { desaturatedDarkCyan } from './styles/variables'
import { jobsData } from './utils/data'

export interface AppStyle{
  mainContainer:  SxProps,
  bgContainer:  SxProps,
}

const appStyle : AppStyle = {
  
  mainContainer:{
    //border:'1px solid red',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  bgContainer:{
    position:'absolute',
    zIndex:-10,
    //border:'1px solid red',
    width:'100%',
    height:'20%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: desaturatedDarkCyan,
    backgroundImage: `url(${BgHeaderDesktop})`,
    '@media screen and (max-width: 440px)': {
      backgroundImage: `url(${BgHeaderDesktop})`,
    },
  },
}
// backgroundImage: `url(${bgPatternDesktop})`,

const App = () => {
  

  return (
    <>
    <Box sx={appStyle.bgContainer}>
    </Box>
    <Box sx={appStyle.mainContainer}>
        <ListItems />
    </Box>
    </>
  )
}

export default App
