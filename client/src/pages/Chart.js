import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar,Line, Pie, Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
//import { Stack } from "react-bootstrap";
import { useState } from "react";
import jsPDF from "jspdf";
const Charts = () => {
    const navigate = useNavigate()
    const userLogin = useSelector(state=>state.userLogin);
    let {userInfo} = userLogin;
    console.log("ALl User Info are: ", userInfo);
    let offeredProducts = userInfo.offeredProducts;
    let soldProducts = userInfo.soldProducts;
    let purchasedProducts = userInfo.purchasedProducts;

    let in_store=offeredProducts.length;
    let selled = purchasedProducts.length;
    console.log(in_store);
    console.log(selled);
    let data=[in_store,selled];

 const generate_pdf=()=>{
    var doc = new jsPDF("landscape","pt","a4");
    /*doc.Bar(document.querySelector("#rep1"),{
        callback: function(pdf){
            pdf.save("report.pdf");
    }})*/
    //doc.addFont()
    doc.html(document.querySelector("#rep"),{
        callback: function(pdf){
            pdf.save("report.pdf");
        }
    })
 };
return(
    <div className="w-screen h-screen flex justify-center" >
        <div >
            <div  id ="rep" className="bg-white">
    <div gap={3} className="p-2"> 
        <div className="bg-light border rounded-md border-gray-400 max-w-screen-md  p-4 chart" id="rep1">
        <h1 className="text-center text-3xl p-2 text-blue-900 font-bold">Inventory Report</h1>
        <Bar className="bg-white"
        title="Inventory Report" 
        
        data={{
            
            labels: ['In-store', 'Sold'], 
            datasets: [{
                label:'# of products ',
                data:data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: [  'rgb(75, 192, 192)',  'rgb(153, 102, 255)'],  borderWidth: 1,
                borderRadius: 10
            }]
        }}
        options={{
            
            scales:{y:{beginAtZero:true}}
        }}
        
        
        ></Bar>
            </div>
            </div>
            <div gap={3} className="p-2">
        <div className="bg-light border rounded-md border-gray-400 max-w-screen-md  p-4 chart" id="rep2">
        <h1 className="text-center text-3xl text-blue-900 p-2 font-bold">Sales Monthly Report</h1>
       
       <Line  className="bg-white"
       title="Sales Monthly Report" 
       data={{
           
           labels: ['Jan', 'Feb','Mar','April', 'May', "June", 'July', 'Aug','Oct','Sep','Nov','Dec'], 
           datasets: [{
            label:'# of products ',
              // data:[20, 80,10,50,5,80,75,69,12,15,45,68,10],
               backgroundColor: [
                   'rgba(75, 192, 192, 0.2)'],
               borderColor: [  'rgb(75, 192, 192)'],  borderWidth: 1,
               borderRadius: 10
           }]
       }}
       options={{
           scales:{y:{beginAtZero:true}}
       }}
       ></Line>
        </div>
      
    </div>
    </div>
    <div className="flex justify-center items-center">
        <button type="button" className="py-1 px-3 bg-blue-500 transition hover:bg-blue-900 font-medium inline-flex items-center rounded-md shadow-md text-medium text-white" onClick={generate_pdf}>Download Report</button>
    </div>
    </div>
    
    </div>

)


}

export default Charts;