import { Box, Flex, Text } from "@chakra-ui/react"

const Footer = () => {
   const date = new Date()
   const year = date.getFullYear()
   return (
      <Box className="container">
      <Flex align={"center"}
         justifyContent={"space-around"} className="navBoxTwo" p={1} m={1} bg={"#fff"} fontFamily={"Lugrasimo"} fontWeight={"bold"} fontSize={{base:"14px", sm:"16px", md:"18px"}}>
         <Box display={{base:"none", sm:"block"}}>
            <Text>#fatfit / Copyright @ {year}</Text>
         </Box>
         <Box>
            <Text>-Aman Singh Rajawat</Text>
         </Box>
      </Flex>
      </Box>
   )
}

export default Footer
