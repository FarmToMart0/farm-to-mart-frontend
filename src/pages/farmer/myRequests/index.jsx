import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BidDetailCard from './card';
import { useNavigate } from 'react-router-dom';
export default function MyRequets() {
  const navigate = useNavigate()
  const user = useSelector((state) => state?.user);
 
  return (
    <BidDetailCard/>
   
  )
}