'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
interface props {
    url:string
}



const useFetch = ({url}:props) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(url);
                setLoading(true);
               setData(response.data);
            
            } catch (error:any) {
                    console.log(error.mesage)
                    setError(error.message)
            }finally {
                setLoading(false);
            }
        };
        fetchData();
    },[url])

  return    {
        data,error,loading
  }
}

export default useFetch
