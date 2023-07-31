import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import Nav from './nav'

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata: Metadata = {
  // title: 'Kurokuchi_Blog',
  title: 'Kurokuchi의 IT-기술-개발 블로그',
  description: 'Kurokuchi의 IT 웹프로그래밍 백앤드프로그래밍 기술 개발 관련 블로그입니다. Next.js, React, JavaScript 등 사용합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={notoSansKr.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
