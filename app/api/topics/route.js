import connectDB from "@/libs/mongodb.js";
import Topic from "@/models/topic.js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connectDB();

  const { title, description } = await req.json();

  try {
    const topic = await Topic.create({ title, description });

    return NextResponse.json({ data: topic, status: 201 });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error.message });
  }
}

export async function GET(req, res) {
  await connectDB();
  try {
    const topic = await Topic.find({});

    return NextResponse.json({ data: topic, status: 201 });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error.message });
  }
}
