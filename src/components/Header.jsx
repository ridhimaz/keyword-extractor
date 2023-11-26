import React from 'react';
import { Heading,Image,Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.png';

const Header=()=>{
  return (
    <>
    <Image src={logo} alt="logo" width={100} marginBottom='1rem' ></Image>
    <Heading color='white'  marginBottom='1rem'>
       Key Extractor
    </Heading>
    <Text fontSize={25}  style={{fontFamily:"Montserrat"}} textAlign='center'>
    Feel free to input your text below, and we'll extract the keywords for you.
    </Text>
    </>
  )
}
export default Header;
