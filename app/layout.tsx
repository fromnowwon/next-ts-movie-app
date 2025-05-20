import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

const notoSansKr = Noto_Sans_KR({ subsets: [] });

export const metadata: Metadata = {
  title: "Next Movie - 최신 영화 정보와 인기 영화 차트",
  description:
    "Next Movie는 최신 영화 정보와 인기 영화 차트를 제공합니다. 영화 상세정보, 검색 기능까지 지원합니다.",
  keywords: ["영화", "영화 정보", "인기 영화", "최신 영화", "영화 검색"],
  openGraph: {
    title: "Next Movie - 최신 영화 정보",
    description: "Next Movie에서 최신 영화와 인기 영화 차트를 확인하세요.",
    url: "https://main.d3kt647779ru59.amplifyapp.com/",
    siteName: "Next Movie",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKr.className}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
