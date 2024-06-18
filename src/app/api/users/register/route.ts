import User from "@/model/UserModel";
import DatabaseConnection from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import * as  bcrypt from 'bcrypt';

DatabaseConnection()
export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<any> {
  try {
    const { name, email, password } = await req.json();
    const existuser = await User.findOne({ email })
    if (existuser) {
      return NextResponse.json(
        { message: 'Email Already Exits', status: "fail" },
        { status: 201 }
      );
    }
    const hashpassword = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hashpassword })
    const finduser = await User.findById(user._id).select('-password -role')
    return NextResponse.json(
      { message: 'User Registration Successfully!', data: finduser, status: "true" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error, status: "fail" },
      { status: 400 }
    );
  }
}
