import { Animal } from '@/model/Model';
import React, { useEffect, useState } from 'react'

export function FetchApi(url: string) {
    const [api, setApi] = useState<Animal[]>([])
    const API = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setApi(result?.data)
    }
    useEffect(() => {
        API()
    }, [])

    return [api]
}