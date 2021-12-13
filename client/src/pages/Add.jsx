import React, { useEffect, useState } from "react";
import './add.css';
import { addNewProduct } from "../apiCalls";
import FileBase64 from 'react-file-base64';



const Add = () => {
    const[img,setimg]=useState("");
    const[name,setname]=useState("");
    const[stock,setstock]=useState("");
    const [category, setCategory] = useState("")
    const[price,setprice]=useState("");
    const[list,setlist]=useState("");
    const [image, setImage] = useState("")

    // useEffect(()=>{
    //   if(localStorage.getItem('anotherUser')){
    //     localStorage.removeItem('anotherUser');
    //   }
    // })
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(image)
    addNewProduct({name, price, category, image})
    setname("")
    setCategory("")
    setprice("")
    setImage("")
  }



    return(
        <div className="container">
        
        <div className="newProduct">
      <h1 className="addProductTitle">Create New Product</h1>
      <form onSubmit={e=>handleSubmit(e)} className="addProductForm" >
        
        {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" value={img} onChange={(e)=>setimg(e.target.value)}/>
        </div> */}
        <FileBase64
          type="file"
          multiple={false}
          value={image}
          onDone={({ base64 }) => setImage(base64)}
        />
        
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Product Name" 
          value={name} required onChange={(e)=>setname(e.target.value)}/>
        </div>
        
        <div className="addProductItem">
          {/* <label>category</label>
          <input type="text" placeholder="category" value={category} required onChange={(e)=>setCategory(e.target.value)}/> */}
          <select required onChange={(e)=>{setCategory(e.target.value)}}>
<option value={"shoes"}>Shoes</option>

<option value={"electronics"}>Electronics</option>

<option value={"men"}>Men</option>

<option value={"women"}>Women</option>

<option value={"bags"}>Bags</option>

<option value={"watches"}>Watches</option>

</select>
        </div>
        
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="$" value={price} requied onChange={(e)=>setprice(e.target.value)}/>
        </div>
        
        <button className="addProductButton" type="submit" >Create</button>
      </form>
      <img src={img}/>
    </div>
    </div>
    )
}
export default Add;