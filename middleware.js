import { NextRequest } from "next/server";

export function middleward(request) {
	NextRequest.redirect(new Url("/home", request.url));
}

// 设置匹配路径
export const config = {
	matcher: "/about/:path*",
};
