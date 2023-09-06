import React from 'react'
import styled from 'styled-components';

const ShowData = ({ title, video , tags}) => {
   const keyWord = title.split(":")
   return (
      <CardContainer>
         <CardTitle>
            <span>Key : {keyWord[0]}</span>
            <span style={{fontFamily:"Poppins"}}>{keyWord[1]}</span>
         </CardTitle>
         <CardVideo
            src={video}
            title={title}
            allowFullScreen
         />
         <CardBenifit>
            <span style={{fontWeight:"bold"}}>Benifits:</span>{tags?.map((el,indx)=>{
               return(
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