import React,{ useState } from 'react'

 const Experience = ()=> {
   const [data, setData] = useState({
     fullname: "",
     email: "",
     phone: "",
     msg: ""
   });
   const InputEvent = (event) =>{
     const {name,value} = event.target;

     setData((preval)=>{
       return {
         ...preval,
         [name] : value,
       };
     });
   };
   const formSubmit = (e)=>{
     e.preventDefault();
     alert (
       `my name is ${data.fullname}. my phone number is ${data.phone} and email is ${data.email} my message is ${data.msg}`
     );

   };
      return (
     <>
     <div className = "my-5">
       <h1 className = "text-center"> CONTACT ME</h1>
       </div>
    <div className = "container-contact_div">
            <div className = "row">
                 <div className = "col-md-6 col-10 mx-auto">
                  
                   <form onSubmit = {formSubmit}>
                     <div className = "mb-3">
                     <label className = "form-label" >Enter Name</label>
     <input className="form-control" type="text"
     id ="exampleFormControlInput1"
     name = "fullname"
     value = {data.fullname}
     onChange = {InputEvent}

      placeholder="enter your name"/>
     </div>
     <div className = "mb-3" >
      <label className = "form-label">Enter Email</label>
<input className="form-control" type="email" 
id ="exampleFormControlInput1"
name = "email"
value = {data.email}
onChange = {InputEvent}
placeholder="enter email"/>
</div>
<div className = "mb-3">
  <label className = "form-label">Enter phone no</label>
<input className="form-control " type="number"
name = "phone"
value = {data.phone}
onChange = {InputEvent}
 placeholder="enter phone no"/>
</div>
<div className="mb-3">
    <label className = "form-label" >meassage</label> {" "}<i class="fas fa-comment-alt"></i>
    <textarea className="form-control" id="exampleFormControlTextarea1" 
    rows = "3"
    name = "msg"
    value = {data.msg}
    onChange = {InputEvent}
    ></textarea>
  </div>
  
<div className = "col-12 mt-5">
<button  type="submit" className="btn btn-primary mb-2">submit</button>
</div>
</form>
</div>
</div>
</div>
     </>
   );
 };

export default Experience;