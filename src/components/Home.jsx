import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import animationData from "../animation_lm7a0u9o.json"
import lottie from "lottie-web"
import "../styles/Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import ShowData from './ShowData'
import Loader from './Loader'
import { SendData } from '../provider/StateProvider'




const Home = () => {
   const {allData, loading} = useContext(SendData)
   const container = useRef(null)


   useEffect(() => {

      AOS.init({ duration: 1500 })

      lottie.loadAnimation({
         container: container.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: animationData,
      })

   }, [])

   return (
      <Box className='container'>
         <Flex flexDirection={{ base: "column", sm: "column", md: "row" }}  justifyContent={"space-between"}>
            <Box>
               <Text data-aos="fade-up" mt={{ base: 6, sm: 8, md: 20 }} fontFamily={"Poppins"} fontSize={{ base: "18px", sm: "20px", md: "24px", lg: "26px" }}>
                  Our <span style={{ color: "#6765f0" }}>Gym</span> is a unique as you are 😊
               </Text>
               <Text mt={5} fontFamily={"Poppins"} fontSize={{ sm: 20, md: 40 }} fontWeight={"bold"}>
                  Exercise is the key to a <span style={{ color: "#6765f0" }}>Healthy</span> Lifestyle
               </Text>
            </Box>
            <Box ref={container} w={{ sm: "200px", md: "400px" }} >
            </Box>
         </Flex>

         <Text textAlign={"center"} fontFamily={"Lugrasimo"} fontWeight={600} fontSize={{ base: 16, sm: 18, md: 20, lg: 24 }} mb={10} textDecorationLine={"underline"} textUnderlineOffset={"10px"} textDecorationColor={"#6765f0"} textDecorationStyle={"dashed"}>#.. Experience some of our <span style={{ color: "#6765f0" }}>Hits ..#</span> </Text>
         {loading ? <Loader /> : <Box className="cardHolder" mt={{ base: "20px", sm: "30px", md: "10px" }}>
            {allData?.map((item, ind) => <ShowData key={ind} tags={item.tags} title={item.heading} video={item.video} />)}
         </Box>}
      </Box>
     
   )
}

export default Home
