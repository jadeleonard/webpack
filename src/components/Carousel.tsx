'use client'
import React from 'react'
import useFetch from './useFetch'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router' 




interface Shoe {
    id: string;



    price :number
    name: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    imag5: string;
}


const   CarouselProps = () => {
    const { data, error, loading } = useFetch<Shoe[]>(process.env.NEXT_PUBLIC_API_SHOES!);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {
            data && data?.map((items,data) =>(
                <Link href={`/product-page/${items.id}`} key={data}>
                <Card>
                    <CardHeader>
                        {items.name}
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            ${items.price}
                        </CardDescription>
                        <Image src={items.image1} width={300} height={300} alt={items.name}/>

                    </CardContent>
                </Card>
                </Link>
            ))
        }
    </div>
  )
}

export default CarouselProps
