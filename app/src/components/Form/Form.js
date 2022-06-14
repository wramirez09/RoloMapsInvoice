import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
export default function Form({updateInputAddress, inputAddress}) {
  
  return (


    

    <form>
        <p>enter an address</p>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="address" name="address" variant="standard" onChange={(event)=>{
            updateInputAddress({address: event.target.value})
            }}/>
        </Grid>
        </Grid>
        <Grid item xs={12}><TextField id="standard-basic" label="address line 2" variant="standard" 
          onChange={(event)=>{
            updateInputAddress({...inputAddress, address2:event.target.value})
          }}
        /></Grid>
        
        <Grid item xs={12}><TextField id="standard-basic" label="city" variant="standard" 

          onChange={
            (event)=>{
              updateInputAddress({...inputAddress, city:event.target.value})
            }
          }
        /></Grid>
        
        <Grid item xs={12}>
          <TextField id="standard-basic" label="state" variant="standard" 
            onChange={(event)=>{
              updateInputAddress({...inputAddress, state:event.target.value})
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="zip" variant="standard" 
            onChange={(event)=>{
              updateInputAddress({...inputAddress, zip:event.target.value})
            }}
          />
        </Grid>
        
    </form>
  )
}

