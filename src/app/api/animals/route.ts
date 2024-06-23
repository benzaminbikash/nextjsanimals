import uploadOnCloudinary from "@/utils/cloudinaryManager";
import { NextResponse, NextRequest } from "next/server";
import path from 'path'
import fs from 'fs/promises'

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('image') as unknown as File
        if (!file) return NextResponse.json({ message: "No image is coming", status: 'fail' }, { status: 400 })
        // storing data on local dictionary
        const buffer = await file.arrayBuffer()
        const byte = Buffer.from(buffer)
        const uploadDir = path.join(process.cwd(), 'uploads', `/${file.name}`)
        console.log(uploadDir)
        fs.writeFile(uploadDir, byte)
        // send data to cloud
        const uploadcloud = await uploadOnCloudinary(uploadDir)
        return NextResponse.json({ message: 'file', status: 'success' }, { status: 201 })


    } catch (error: any) {
        return NextResponse.json({ message: error.message, status: 'fail' }, { status: 400 })
    }
}