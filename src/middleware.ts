import {NextRequest,NextResponse} from "next/server";
export function middleware(req:NextRequest){if(req.nextUrl.pathname.startsWith("/admin")&&req.nextUrl.pathname!=="/admin/login"){if(!req.cookies.get("idc_admin_session"))return NextResponse.redirect(new URL("/admin/login",req.url));}return NextResponse.next()}
export const config={matcher:["/admin/:path*"]};