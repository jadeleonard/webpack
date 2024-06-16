'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import axios from 'axios'

interface Props {
    name: string
    price: number
    description: string
    image1: string
    image2: string
    image3: string
    image4: string
    imag5: string
}

const Upload = () => {
    const [formData, setFormData] = useState<Props>({
        name: '',
        price: 0,
        description: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        imag5: ''
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        
        try {
            const response = await axios.post('/api/upload', formData)  // Add your API endpoint here
            console.log('Upload successful:', response.data)
        } catch (error) {
            console.error('Upload failed:', error)
            setError('Upload failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='py-2 max-w-screen-xl'>
            <div>
                <Card>
                    <CardHeader>Upload Product</CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Input 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder='Name' 
                            />
                            <Input 
                                name="price" 
                                type="number" 
                                value={formData.price} 
                                onChange={handleChange} 
                                placeholder='Price' 
                            />
                            <Input 
                                name="description" 
                                value={formData.description} 
                                onChange={handleChange} 
                                placeholder='Description' 
                            />
                            <Input 
                                name="image1" 
                                value={formData.image1} 
                                onChange={handleChange} 
                                placeholder='Product Image (main image)' 
                            />
                            <br />
                            <CardDescription>
                                (Optional)
                            </CardDescription>
                            <Input 
                                name="image2" 
                                value={formData.image2} 
                                onChange={handleChange} 
                                placeholder='Image2' 
                            />
                            <Input 
                                name="image3" 
                                value={formData.image3} 
                                onChange={handleChange} 
                                placeholder='Image3' 
                            />
                            <Input 
                                name="image4" 
                                value={formData.image4} 
                                onChange={handleChange} 
                                placeholder='Image4' 
                            />
                            <Input 
                                name="image5" 
                                value={formData.imag5} 
                                onChange={handleChange} 
                                placeholder='Image5' 
                            />
                            <Button type='submit' disabled={loading}>
                                {loading ? 'Uploading...' : 'Upload'}
                            </Button>
                        </form>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Upload
