import React, { useEffect } from 'react'
import styled from "styled-components";
import Badge from '@mui/material/Badge';
//import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import {RefreshLoggedInUserInfo} from '../apiCalls'



const Container = styled.div`
    height:60px;
`;
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Input = styled.input`
    width:95%;
    border: none;
`;


const Right = styled.div`
  height: 3rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image =styled.img`
    height:48px;
    width:48px;
    overflow:hidden;
`;

const Logo =styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 23px;
    line-height: 38px;
    margin-left: 12px;
    color:#1E3A8A;
    margin-top:5px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Button =styled.button`

    font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  padding:0 5px;
  border:none;
  height:100%;
  background-color:transparent;
  :hover {
    background-color: #F3F4F6;
  }
` 
const Navbar = () => {

  //* get the userInfo from userLogin from state and make this component depends on it
	// get part of the state 
	const userLogin = useSelector(state=>state.userLogin);
	let {userInfo} = userLogin;
  // const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  //* define dispatch to dispatch logout action
  const dispatch = useDispatch()
  // useEffect(()=>{},[userInfo])
  const navigate = useNavigate();
  const handleLogOut = (e)=>{
    e.preventDefault();
    dispatch(logout())
    // localStorage.removeItem("anotherUser")
    // localStorage.removeItem("allUsers");
    // localStorage.removeItem('userInfo')
    // userInfo = null;
    navigate("/login")
  }
  const FetchLoggedInUserInfo= (e)=>{
    e.preventDefault();
    RefreshLoggedInUserInfo(userInfo.id);
    navigate("/profile")
  }
    return (
        <Container>
            <Wrapper>
              <Link to="/">
                <Left>
                    <Image alt="logo" src="/assets/logo.png"/>
                    <Logo>E-MARKET</Logo>
                </Left>
              </Link>
{/* 
                 <Center>
                     <SearchContainer>
                         <Input type="text" name="search_bar" placeholder="Search"/>
                         <Search style={{ color: "gray", fontSize: 16 }} />
                     </SearchContainer>
                 </Center> */}

                 <Right>
                   {
                     userInfo?
                     <div>
<i class="bi bi-person-circle"></i>
                     <Link to="/profile" onClick={e=>FetchLoggedInUserInfo(e)}>
                       {userInfo.username}
                     </Link>
                     <Link onClick={e=>handleLogOut(e)} to="/">
                       <Button>

                       Logout
                       </Button>
                     </Link>
                     </div>
                     :
                    <Link  to="/login" >
                     <Button>Log in</Button>
                    </Link>
                   }



<Link onClick={e=>{e.preventDefault(); window.location.href="/cart"}} to="/cart">
                     <IconButton aria-label="cart" >
                        <Badge badgeContent={0} color="primary">
                             <ShoppingCartOutlined />
                         </Badge>
                    </IconButton>
</Link>
                 </Right>

            </Wrapper>
        </Container>
    );
}

export default Navbar
