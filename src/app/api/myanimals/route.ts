import animal from "@/model/Animal";
import { verifyToken } from "@/utils/generateToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = req.headers.get('authorization')?.split(' ')[1]
        console.log(token)
        if (!token) {
            return NextResponse.json({ message: "No token", status: "fail" }, { status: 400 });
        }
        const decodedToken = verifyToken(token)
        if (!decodedToken) {
            return NextResponse.json({ message: "Unauthorized ", status: "fail" }, { status: 400 });
        }
        const findData = await animal.find({ postBy: decodedToken._id })
        return NextResponse.json({ message: 'Your data.', data: findData, status: 'success' }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message, status: 'fail' }, { status: 400 })
    }
}