
// Import necessary modules and components
import React from 'react';
import { useRouter } from 'next/navigation';
import useFetch from '@/components/useFetch';  // Adjust the path as needed
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';  // Adjust the path as needed
import Image from 'next/image';

// Define the Shoe interface to match your product data structure
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

// Component for the Product Detail Page
const ProductDetailPage: React.FC = () => {
    const router = useRouter();
    const id = router?.query?.id; // Extract the 'id' parameter from the URL

    // Fetch product details using the 'id' parameter
    const apiUrl = `http://localhost:3000/api/shoes/${id}`; // Adjust the API URL accordingly
    const { data, loading, error } = useFetch<Shoe>(apiUrl);

    // Loading state
    if (loading) return <div>Loading...</div>;

    // Error state
    if (error) return <div>Error: {error.message}</div>;

    // No data found state
    if (!data) return <div>No product found</div>;

    // Product detail page UI
    return (
        <div className="max-w-4xl mx-auto py-10">
            <Card>
                <CardHeader>
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                </CardHeader>
                <CardContent>
                    <Image src={data.image1} width={600} height={600} alt={data.name} className="mb-4"/>
                    <CardDescription>
                        <p>{data.description}</p>
                        <p className="text-xl font-semibold">Price: ${data.price.toFixed(2)}</p>
                    </CardDescription>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {data.image2 && <Image src={data.image2} width={300} height={300} alt={`${data.name} image 2`} />}
                        
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductDetailPage;
