import React from 'react'
import { useState } from 'react'
import citydata from './city.json'

const Form = () => {
    const [data, setData] = useState({name:"", city:"",company:"",age:"",phone:"", message:""})
    const handleChange=(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data, [name]:value})
        

    }

    const [cityid, setCityid]=useState('');
    const [doctor,setDoctor]=useState([]);
    const [doctorid, setDoctorid]=useState('');


    const handlecity=(e)=>{
        const getcityid=e.target.value;
        const getDoctordata=citydata.find(city=>city.city_id===getcityid).doctors;
        setDoctor(getDoctordata);
        //console.log(getcityid);
    }

    const handleSubmit=(e) =>{
        e.preventDefault()
        alert(data)

    }


  return (
    
    <form method="post" onSubmit={handleSubmit}>
        <h1><span>Book Now</span></h1>
        <input type="text" name="name" id=""  onChange={handleChange} value={data.name} placeholder='Enter Name'/>
        
        <input type="text" name="company" id="" onChange={handleChange} value={data.company} placeholder='Enter Company'/>
        
        <input type="number" name="age" id="" onChange={handleChange} value={data.age} placeholder='Enter Age'/>
        
        <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='+91'/>
        <label>Chief Complaints</label><textarea name="message" col="10" row="10"onChange={handleChange} value={data.message} placeholder='Type Here...'></textarea>
        
        
      
        <div className="drop" style={{padding:'2px'}}>
            <label className="form-label">Previously consulted</label>
            <div className="text-dark">
                <select name="Doctors" className='form-control'>
                    <option value="">--select---</option>
                    
                    
                    

                    
                    <option value="101">Yes</option>
                    <option value="102">No</option>

                    </select>
                    </div>
                    </div>
                    



        <div className="drop">
            <label className="form-label">city</label>
            <div className="text-dark">
                <select name="city" className='form-control' onChange={(e)=>handlecity(e)}>
                    <option value="">--select city---</option>
                    {
                        citydata.map((getcity,index)=>(
                            <option value={getcity.city_id} key={index}>{getcity.city_name}</option>
                        ))
                    }
                   
                </select>
            </div>
            </div>


            <div className="drop" style={{padding:'2px'}}>
            <label className="form-label">Doctor</label>
            <div className="text-dark">
                <select name="Doctors" className='form-control'>
                    <option value="">--select Doctor---</option>
                    {
                        doctor.map((getdoctor,index)=>(
                            <option value={getdoctor.doctor_id}key={index}>{getdoctor.doctor_name}</option>
                            

                        ))
}
                    
                    
                </select>
            </div>
            </div>


        
        <button type="submit" style={{padding:'2px'}}>send</button>
        
        

    </form>
  )
}

export default Form
