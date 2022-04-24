import styled from "styled-components";
import { keyframes } from "styled-components";

const moving= keyframes`
  50% {
   width: 100%;
  }
 
  100% {
   width: 0;
   right: 0;
   left: unset;
  }
`

export const Loader= styled.div`
  margin: 0 auto;
 width: 60%;
 height: 4px;
 border-radius: 30px;
 background-color: rgba(0,0,0,0.2);
 position: relative;

 ::before{
  content: "";
 position: absolute;
 background: #0071e2;
 top: 0;
 left: 0;
 width: 0%;
 height: 100%;
 border-radius: 30px;
 animation: ${moving} 1s ease-in-out infinite;
 ;
 }
`
