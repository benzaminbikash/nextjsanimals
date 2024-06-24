import animal from "@/model/Animal"
import category from "@/model/Category"
import { NextResponse } from "next/server"

export async function GET(req: NextResponse, res: any) {
    try {
        const data = await animal.findById(res.params.id).populate({ path: "category", model: category })
        return NextResponse.json({ message: 'Single Animal', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message, status: 'fail' }, { status: 400 })
    }
}


export async function DELETE(req: NextResponse, res: any) {
    try {
        const data = await animal.findByIdAndDelete(res.params.id)
        return NextResponse.json({ message: 'Delete Animal', data, status: 'success' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message, status: 'fail' }, { status: 400 })
    }
}