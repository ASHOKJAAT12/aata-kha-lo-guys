import React from 'react';
import { FormControl,  RadioGroup, FormControlLabel, Radio } from '@mui/material';

function GenderRadioButtons() {


  return (
    <div className='flex flex-col pl-10 '>
      

 
        <FormControl className='w-full  '>
          <RadioGroup className='max-md:flex-col ' row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="On Sale" />
            <FormControlLabel value="male" control={<Radio />} label="Featured" />
            <FormControlLabel value="other" control={<Radio />} label="In Stock" />
            {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" /> */}
          </RadioGroup>
        </FormControl>
    </div>
  );
}

export default GenderRadioButtons;
