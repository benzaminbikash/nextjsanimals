import category from "@/model/Category";
import DatabaseConnection from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

DatabaseConnection()
export async function POST(req: NextRequest, res: any) {
    try {
        const { title } = await req.json()
        if (!title) return NextResponse.json({ message: 'Title is required.', status: 'fail' }, { status: 400 })
        const data = await category.create({ title: title })
        return NextResponse.json({ message: 'Category create successfully!', data, status: 'success' }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ message: error?.message, status: 'fail' }, { status: 400 })
    }
}
export async function GET(req: NextRequest, res: any) {
    try {

        const data = await category.find()
        return NextResponse.json({ message: 'All category.', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error?.message, status: 'fail' }, { status: 400 })
    }
}