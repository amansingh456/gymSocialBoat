import React, { useEffect, useRef } from 'react'
import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, InputRightAddon } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import logo from "../assets/img/dumble.png"
import "../styles/Navbar.css"

const Navbar = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  return (
    <Box  className="header"  ref={headerRef}>
      <Box className='container' >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box className="logo">
            <Box className="logo__img">
              <Image src={logo} alt="" />
            </Box>
            <Heading as={"h2"} letterSpacing={3} fontFamily={"Lugrasimo"}>fatfit</Heading>
          </Box>
          <Box >
            <InputGroup borderRadius={5} size="sm">
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.600" />}
              />
              <Input className='boxShadow' type="text" placeholder="Search..." borderLeftRadius={3.3} />
              <InputRightAddon
                p={0}
                border="none"
              >
                <Button className='button boxShadow' size="sm" borderLeftRadius={0} borderRightRadius={3.3}>
                  Search
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Box>
          <Box className='profileImg'>
            <Image src="https://amansingh456.github.io/static/media/About.693795b0e35b374803a8.jpg" w={{ base: "45px", sm:"45px" ,md: "56px"}} h={{ base: "35px",sm:"45px", md: "56px"}} borderRadius={"50%"} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Navbar
