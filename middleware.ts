import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "de", "fr", "it"];
type Lang = (typeof SUPPORTED)[number];

const pickLang = (req: NextRequest): Lang => {
  // try to get the lang from cookies otherwise use accept-language or use "de"
  const cookieLang = req.cookies.get("lang")?.value;
  if (cookieLang && SUPPORTED.includes(cookieLang)) {
    return cookieLang as Lang;
  }

  const header = req.headers.get("accept-language") || "";
  const match = header.split(",")[0]?.slice(0, 2);
  return (SUPPORTED.includes(match as Lang) ? match : "de") as Lang;
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // check if there already is a locale prefix
  const hasPrefix = SUPPORTED.some((lang) => pathname.startsWith(`/${lang}/`));
  if (hasPrefix) {
    return NextResponse.next();
  }

  const lang = pickLang(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 }); // Set cookie for 1 year
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
