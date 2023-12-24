import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Ankush() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const [str, setStr] = useState("abj")
  const [reload, setReload] = useState(false)
  useEffect(()=>{
    if(count != 0)
    {
     setReload(true)
    }
  },[count,value])



  function func()
  {
    setCount(11)
    setValue(12)
    console.log(count)
    setStr("ankush")
    
  }
  return (
    <div>
        {count}<button onClick={func}>play</button>
        {value}
        {str}
        {reload?<Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>:""}
    </div>
  );
}

export default  Ankush;