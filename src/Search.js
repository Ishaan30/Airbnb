import React,{useState} from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import "./Search.css"
import {useNavigate} from 'react-router-dom';

function Search() {
    const [startDate,setstartDate]=useState(new Date());
    const [endDate,setendDate]=useState(new Date());
    const nav =useNavigate();

    const selectionRange={
        startDate: startDate,
        endDate:endDate,
        key:"selection"

    };
  const handleSelect =(ranges)=>{
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);

    }
  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
        <h2> Number of Guests <PeopleIcon/></h2>
        
        <input min={0} defaultValue={2} type="Number"/>
        <Button onClick={()=>nav('/search')}> Search Airbnb</Button>


    </div>
  )
}

export default Search