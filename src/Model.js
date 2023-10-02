import React, { useEffect, useState } from 'react'
import Model from './common/Model';
import {createPortal} from 'react-dom'

 
 function Form({arrHandler}) {
   let [error,setError]=useState('')
    let[formdata,setFormData]=useState({title:'',date:'', price:''});
    let [open ,setOpen]=useState(false)
    
    //validation
    
      let[titleError,setTitleError]=useState(false)
      let[priceError,setPriceError]=useState(false);
    
    //validation using debouncing 
    useEffect(()=>{
    let x= setTimeout(() => {
       if(formdata.title.trim().length>0)
       {
         setTitleError(false)
       }
       if(formdata.price.trim().length>0)
       {
         setPriceError(false)
       }
       console.log('hii i am useEffect')
     },1000);
     return ()=>{
        clearTimeout(x)
     }
      
    },[formdata.title,formdata.price])
     
    function commonHandler(event)
    {
          // if(formdata.title.trim().length>0)
          // {
          //   setTitleError(false)
          // }
          // if(formdata.price.trim().length>0)
          // {
          //   setPriceError(false)
          // }
          setFormData((pre)=>{
            return{ ...pre,[event.target.name]:event.target.value}
          })
    }
    function onSubmitHandler()
    {
       //title validation
        if(formdata.title.trim().length==0 )
        {
          // console.log('title field is not validated')
          // setError({title:'title field',content:'title field is not validated'})
          setTitleError(true);
  
          return;
        }
        //price validation
        if(formdata.price.trim().length==0)
        {
          // console.log('price feild is not validated')
          // setError({title:'price field',content:'price field is not validated'})
            setPriceError(true)
     
          return
        }
        else{
          let obj={
            id:new Date().getMilliseconds(),
            title:formdata.title,
            date:formdata.date,
            price:formdata.price
        }
          arrHandler(obj)
          setFormData({title:'',date:'',price:''})
          setOpen(!open)
        }
       
   
        
    }
    //collapse logic
    function clickHandler()
    {
           setOpen(!open)
    }
   return (
     <div>   
    {/* { error&& createPortal(<Model title={error.title} content={error.content} setError={setError}/>,document.getElementById('model')) } */}
      
       <div className='d-flex justify-content-center'>
      <button className='btn btn-primary ' onClick={clickHandler}>open</button>
     </div>
              
              <br/>
              <br/>
              {open&&  <> title <input type="text" placeholder='title' onChange={commonHandler} name="title" value={formdata.title} style={{ border:titleError && '1px solid red'}} />

              {/* {GlobalEroor && titleError ?  <span style={{backgroundColor:"red"}}>error is there*</span> :null } */}
              {
                  titleError && <span style={{backgroundColor:"red"}}>error is there*</span>
              }
              <br/>
        date <input type="date" placeholder='date'  onChange={commonHandler} name='date' value={formdata.date}/>
        <br/>
        price<input type="number" placeholder='nmber' onChange={commonHandler}  name="price" value={formdata.price} 
        style={{ border:priceError && '1px solid red'}}/>
        {
                  priceError && <span style={{backgroundColor:"red"}}>error is there*</span>
              }
        <br/>
        <button onClick={onSubmitHandler}>save</button>
        <button  onClick={clickHandler}>cancel</button></> }
     

     </div>
   )
 }
 
 export default Form 