import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_BACKEND_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json(); // req ko read karke json banata

    const apiResponse = await fetch(`${BACKEND_URL}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // json ko strign akrke backned bejta
    });
    const data = await apiResponse.json(); // backend ke string response ko .json se json mai convert karta internally .parse karta ye
    return NextResponse.json(data, { status: apiResponse.status });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({
      error: "some error occured",
      details: err?.message || err,
    });
  }
}
