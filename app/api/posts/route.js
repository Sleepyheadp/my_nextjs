import { NextResponse } from "next/server";

export async function GET(request, context) {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	console.log("route.js:", request);
	// return Response.json({ data }); // 用Response也可以
	return NextResponse.json({ data }); // Next.js基于Response的封装
}
