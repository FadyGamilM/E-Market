import React from 'react'
import Slide from '../components/Slide'
import Categories from "../components/Categories";
import Stores from '../components/Stores';
import Products from '../components/Products';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { fetchAllUsers } from '../apiCalls';

const Home = () => {
    useEffect(()=>{
        // data will be stored into localStorage after the next line
        fetchAllUsers()
      });
    const loggedInUser = localStorage.getItem('userInfo') ;
    useEffect(
        ()=>{

            if(!loggedInUser){
                window.location.href = "/login"
        
            }
        

        }    
            )    

    // useEffect(()=>{
    //     if(localStorage.getItem('anotherUser')){
    //         localStorage.removeItem('anotherUser')
    //     }
    // })

    return (
        <>

            <Slide/>
            <Categories />
            <Stores/>
            {/* <Products/>   */}
        </>
    )
}

export default Home
