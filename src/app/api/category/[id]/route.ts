import category from "@/model/Category";
import DatabaseConnection from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

DatabaseConnection()

export async function GET(req: NextRequest, res: any) {
    try {
        const data = await category.findById({ _id: res.params.id })
        return NextResponse.json({ message: 'Single Category', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error?.message, status: 'fail' }, { status: 400 })
    }
}
export async function PUT(req: NextRequest, res: any) {
    try {
        const { title } = await req.json()
        if (!title) return NextResponse.json({ message: "Don't you want to update category?", status: 'fail' }, { status: 400 })
        await category.findByIdAndUpdate({ _id: res.params.id }, { $set: { title: title } })
        const data = await category.findById({ _id: res.params.id })
        return NextResponse.json({ message: 'Single Category', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error?.message, status: 'fail' }, { status: 400 })
    }
}

export async function DELETE(req: NextRequest, res: any) {
    try {

        const data = await category.findByIdAndDelete({ _id: res.params.id })
        return NextResponse.json({ message: 'Delete Category', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error?.message, status: 'fail' }, { status: 400 })
    }
}