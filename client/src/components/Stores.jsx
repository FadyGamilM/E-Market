// import React, { useState, useEffect } from 'react'
// import styled from "styled-components";
// import { Link } from 'react-router-dom';
// import {StoresData} from '../data';
// import {fetchAllUsers} from '../apiCalls'

// const Container = styled.div`
//     font-family: 'Open Sans', sans-serif;
//   margin: 0 auto;
//   display: grid;
//   padding: 100px;
//   padding-top:0;
//   justify-content: space-between;
//   grid-template-columns: repeat(6, 1fr);
//   gap: 3rem;

// @media (max-width: 996px) {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }


// `;

// const Section = styled.section`
//     padding: 0 0 0.1rem 0;
//     overflow: hidden;
// `;

// const Titleinfo = styled.div`
//     text-align: center;
//     margin-bottom: 5rem;
// `;

// const Title=styled.h1`
//     font-size: 3rem;
//   font-weight: 400;
//   margin-bottom: 1.5rem;
// `;
// const Subtitle =styled.p`
//     color:#828282;
// `;

// const Itemtitle = styled.h3`
// font-family: 'Open Sans', sans-serif;
//   background-color: rgba(1, 0, 0, 0.363);
//   border-radius: 5rem;
//   padding: 0.7rem 1.4rem;
//   font-size: 1.2rem;
//   font-weight: inherit;
//   margin-bottom: 1rem;
//   transition: all 300ms ease-in-out;
//   color:#ffffff;

//   a{
//       color:#ffffff;
//   }
//   :hover a{
//       color:black;
//   }
// `;

// const Item = styled.div`
//   overflow: hidden;
//   position: relative;
//   z-index: 0;

//     svg {
//     object-fit: cover;
//     height: 100%;
//     width: 100%;
//     transition: all 500ms ease-in-out;
//   }
//    :hover ${Itemtitle} {
//     background-color: #ffffff;
//     color: black;
//   }

//   :hover svg {
//     transform: scale(1.2);
//   }

// ::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.4);
//     opacity: 0;
//     visibility: hidden;
//     transition: all 500ms ease-in-out;
//   }

//   :hover::after {
//     visibility: visible;
//     opacity: 1;
//   }


// `;


// const Infocontainer = styled.div`
//    position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%); 
//   text-align: center;
//   z-index: 3;
//   color:black;
// `;

// const Collectionlink = styled(Link)`
//   background-color: rgba(1, 0, 0, 0.363);
//   color:#ffffff;
//     transition: all 300ms ease-in-out;
//   font-size: 1.4rem;

//   :hover {
//     color: #60A5FA;
//   }
// `


// const Stores = () => {
//   // define an empty array to hold the data
//   let users = [];
//   useEffect(()=>{
//     // data will be stored into localStorage after the next line
//     fetchAllUsers()
//   });
//   // now get the data and render it into component
//   users = Object.values(JSON.parse(localStorage.getItem('allUsers')))||[];
//   // console.log(Object.values(users));
//   // rendering...
//     return (
//       <div>
//       <Section>
//           <Titleinfo>
//               <Title>Users & Stores</Title>
//               <Subtitle>Select from the premium product and save plenty money</Subtitle>
//           </Titleinfo>
//       <Container>
//            {users.map((item, index) => (
//                   <Item key={index}>
//                       <Link to={`/profile/${item._id}`}>
//                         {/* <h1 className="pl-5">{item.username}</h1> */}
//                         {/* <img src={item.url} alt={item.label} />  */}
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//                         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//                         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
//                         </svg>
//                         </Link>
//                       <Infocontainer>
//                           <Collectionlink to={`/profile/${item._id}`}>{item.username}</Collectionlink>
//                       </Infocontainer>
//                   </Item>
//               ))}
//       </Container>

//       </Section>
//   </div>
//     )
// }

// export default Stores




import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {StoresData} from '../data';
import {fetchAllUsers} from '../apiCalls'

const Container = styled.div`
    font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  display: grid;
  padding: 100px;
  padding-top:0;
  justify-content: space-between;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem;

@media (max-width: 996px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }


`;

const Section = styled.section`
    padding: 0 0 0.1rem 0;
    overflow: hidden;
`;

const Titleinfo = styled.div`
    text-align: center;
    margin-bottom: 5rem;
`;

const Title=styled.h1`
    font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;
const Subtitle =styled.p`
    color:#828282;
`;

const Itemtitle = styled.h3`
font-family: 'Open Sans', sans-serif;
  background-color: rgba(1, 0, 0, 0.363);
  border-radius: 5rem;
  padding: 0.7rem 1.4rem;
  font-size: 1.2rem;
  font-weight: inherit;
  margin-bottom: 1rem;
  transition: all 300ms ease-in-out;
  color:#ffffff;

  a{
      color:#ffffff;
  }
  :hover a{
      color:black;
  }
`;

const Item = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;

    svg {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in-out;
  }
   :hover ${Itemtitle} {
    background-color: #ffffff;
    color: black;
  }

  :hover svg {
    transform: scale(1.2);
  }

::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 500ms ease-in-out;
  }

  :hover::after {
    visibility: visible;
    opacity: 1;
  }


`;


const Infocontainer = styled.div`
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  text-align: center;
  z-index: 3;
  color:black;
`;

const Collectionlink = styled(Link)`
  background-color: rgba(1, 0, 0, 0.363);
  color:#ffffff;
    transition: all 300ms ease-in-out;
  font-size: 1.4rem;

  :hover {
    color: #60A5FA;
  }
`


const Stores = () => {

  window.onload = function() {
      if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }

  // // define an empty array to hold the data
  // let users = localStorage.getItem('allUsers')? JSON.parse(localStorage.getItem('allUsers')) : [];
  // // let users = [];
  // let visitAnotherUserProfile = (e, itemID) => {
  //   e.preventDefault();
  //   let profileOwnerID  = itemID;
  //   let allUsers = JSON.parse(localStorage.getItem("allUsers"));
  //   let user = allUsers.find(user=>{
  //     if(user._id === profileOwnerID){
  //       return user;
  //     }
  //   })
  //   localStorage.setItem("anotherUser", JSON.stringify(user))
  //   window.location.href = `/profile/${itemID}`
  // }

  useEffect(()=>{
    // data will be stored into localStorage after the next line
    fetchAllUsers()
  });
  const users = localStorage.getItem('allUsers')? Object.values(JSON.parse(localStorage.getItem('allUsers'))):[];
  
  console.log("[Stores component ]: All Users in Store are ", users)
    return (
      <div>
      <Section>
          <Titleinfo>
              <Title>Users & Stores</Title>
              <Subtitle>Select from the premium product and save plenty money</Subtitle>
          </Titleinfo>
      <Container>
           {users.map((item, index) => (
                  <Item key={index}>
                      <Link onClick={e=>{
                        e.preventDefault();
                        window.location.href = `/profile/${item._id}`
                      }} to={`/profile/${item._id}`}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        </Link>
                      <Infocontainer>
                          <Collectionlink onClick={e=>{
                            // visitAnotherUserProfile(e, item._id)
                            e.preventDefault();
                              window.location.href = `/profile/${item._id}`;
                      }}  to={`/profile/${item._id}`}>{item.username}</Collectionlink>
                      </Infocontainer>
                  </Item>
              ))}
      </Container>

      </Section>
  </div>
    )
}

export default Stores

