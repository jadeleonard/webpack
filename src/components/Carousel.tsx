'use client';
import React from 'react';
import useFetch from './useFetch';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface Shoe {
    id: number;
    price: number;
    name: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    imag5: string;
}

const apiUrl = 'http://localhost:3000/api/shoes';

const CarouselProps: React.FC = () => {
    const { data, error, loading } = useFetch<Shoe[]>(apiUrl);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data && data.map((item) => (
                <Link href={`/product-page/${item.id}`} key={item.id}>
                    <a>
                        <Card className="cursor-pointer">
                            <CardHeader>
                                {item.name}
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    ${item.price}
                                </CardDescription>
                                <Image src={item.image1} width={300} height={300} alt={item.name} />
                            </CardContent>
                        </Card>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default CarouselProps;
