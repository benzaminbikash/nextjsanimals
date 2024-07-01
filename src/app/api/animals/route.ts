import path from 'path'
import fs from 'fs/promises'
import { NextResponse, NextRequest } from "next/server";

import animal from '@/model/Animal';
import User from '@/model/UserModel';
import category from '@/model/Category';
import DatabaseConnection from "@/utils/db";
import { verifyToken } from '@/utils/generateToken';
import uploadOnCloudinary from "@/utils/cloudinaryManager";

DatabaseConnection()
export async function POST(req: NextRequest) {
    try {
        const token = req.headers.get('authorization')?.split(" ")[1]
        if (!token) {
            return NextResponse.json({ message: "Unauthorized no token", status: "fail" }, { status: 400 });
        }
        const decodedToken = verifyToken(token);
        if (!decodedToken) {
            return NextResponse.json({ message: "Unauthorized ", status: "fail" }, { status: 400 });
        }
        const formData = await req.formData();
        const file = formData.get('image') as unknown as File
        const name = formData.get('name') as string
        const gender = formData.get('gender') as string
        const phone = formData.get('phone')
        const category = formData.get('category')
        const price = formData.get('price') as number | null
        if (!file) return NextResponse.json({ message: "No image is coming", status: 'fail' }, { status: 400 })
        // storing data on local dictionary
        const buffer = await file.arrayBuffer()
        const byte = Buffer.from(buffer)
        const uploadDir = path.join(process.cwd(), 'uploads', `/${file.name}`)
        fs.writeFile(uploadDir, byte)
        // send data to cloud
        const uploadcloud = await uploadOnCloudinary(uploadDir)
        const data = await animal.create({ name, gender, phone, category, price, image: uploadcloud?.url, postBy: decodedToken?._id })
        return NextResponse.json({ message: 'Animal data is created.', data, status: 'success' }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message, status: 'fail' }, { status: 400 })
    }
}

export async function GET() {
    try {
        const data = await animal.find().populate([
            { path: "category", model: category }
        ])
        return NextResponse.json({ message: 'All Animals', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message, status: 'fail' }, { status: 400 })
    }
}