export async function GET() {
	const res = await fetch("https://api.thecatapi.com/v1/images/search", {
		next: { revalidate: 5 }, // 5秒后重新验证
	});
	const data = await res.json();
	console.log("image", data);
	return Response.json(data);
}
