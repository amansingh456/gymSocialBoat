import React, { useContext } from 'react'
import styled from 'styled-components';
// import '~video-react/styles/scss/video-react'; // or import scss // import css
import { Player } from 'video-react';
import { SendData } from '../provider/StateProvider';

const ShowData = ({ title, video, tags }) => {
   const {query} = useContext(SendData)
   const keyWord = title.split(":")
   const vidSrc = video.slice(4)
   
   return (
      <CardContainer>
         <CardTitle>
            <span>Key : {query}</span>
            <span style={{ fontFamily: "Poppins" }}>{keyWord[1]}</span>
         </CardTitle>
         <CardVideo
            loading='lazy'
            src={`https${vidSrc}`}
            title={title}
            allowFullScreen
         />
         {/* <CardVideo>
            <Player>
               <source src={`https${vidSrc}`} />
            </Player>
         </CardVideo> */}
         <CardBenifit>
            <span style={{ fontWeight: "bold" }}>Benifits:</span>{tags?.map((el, indx) => {
               return (
                  <span key={indx}>{el}</span>
               )
            })}
         </CardBenifit>
      </CardContainer>
   )
}

export default ShowData;

const CardContainer = styled.div`
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.6s, box-shadow 0.3s;
 
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h2`
   display: flex;
   justify-content: space-between;
   align-items: center;
  margin: 0;
  padding: 20px;
  background-color: #fff;
  color: var(--heading-color);
  text-transform: capitalize;
  font-family: "Lugrasimo";
  font-size: 12px;
  font-weight: bold;
`;
const CardBenifit = styled.span`
   display: flex;
   justify-content: space-between;
   align-items: center;
  margin: 0;
  padding: 20px;
  background-color: #fff;
  color: var(--heading-color);
  text-transform: capitalize;
  font-family: "Poppins";
  font-size: 12px;
`;

const CardVideo = styled.iframe`
  width: 100%;
  height: 200px;
  background-color: #fff !important;
`;