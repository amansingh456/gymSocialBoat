import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import animationData from "../animation_lm7a0u9o.json"
import lottie from "lottie-web"
import "../styles/Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import axios from 'axios'
import ShowData from './ShowData'
import Loader from './Loader'



const Home = () => {
   const [query, setQuery] = useState("gym")
   const [allData, setAllData] = useState([])
   const [loading, setLoading] = useState(true)
   const container = useRef(null)

   const getData = () => {
      axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=10`)
         .then((res) => {
            setAllData(res.data.results)
            setLoading(false)
         })
         .catch((err) => {
            setLoading(true)
            console.log(err)
         })

   }

   useEffect(() => {
      getData()

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
         <Flex flexDirection={{ base: "column", sm: "column", md: "row" }} align={"center"} justifyContent={"space-between"}>
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

         {loading ? <Loader /> : <Box className="cardHolder" mt={{ base: "20px", sm: "30px", md: "10px" }}>
            {allData?.map((item, ind) => <ShowData key={ind} tags={item.tags} title={item.heading} video={item.video} />)}
         </Box>}

      </Box>
   )
}

export default Home
