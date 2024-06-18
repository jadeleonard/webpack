'use client'
import { Card } from "@/components/ui/card";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

interface Shoes {
    id: number;



    price :number
    name: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    imag5: string;
}

export default function ProductPage() {
    const [data,setData] = useState<Shoes | null>(null);

    const router = useRouter();
    const {id} = router.query;
    
    useEffect(() =>{
        const jdata = async () =>{
            try {
                const response = await axios.get(`/http://localhost:3000/api/shoes/${id}`);
                if(router.isReady){
                    setData(response.data);

                    
                }
            } catch (error) {
                console.log("error")
            }
        };
        jdata();
    },[router.isReady,id])
    return(

            <div className=" max-w-screen-xl py-10 p-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center">
            <Card>
               {data?.name}

            
            </Card>
            </div>
            <div>

            </div>

            </div>
   
    )
}