'use client'
import { Animal } from '@/model/Model';
import { useSession } from 'next-auth/react';
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

export function FetchApiWithToken(url: string) {
    const { data: session } = useSession();
    const [api, setApi] = useState<Animal[]>([])
    const API = async () => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${session?.user.accesstoken}`
            }
        });
        const result = await response.json();
        setApi(result?.data)
    }
    useEffect(() => {
        API()
    }, [])

    return [api]
}