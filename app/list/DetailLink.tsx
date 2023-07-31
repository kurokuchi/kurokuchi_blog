'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()    //라우트 다양한 기능
    let a = usePathname()       //현재 url 출력
    let b = useSearchParams()   //쿼리 스트리밍 params 출력
    return (
        <div className="">
            <button onClick={() => {router.push('/')}}>버튼</button>
            <button onClick={() => {router.back()}}>뒤로가기</button>
            <button onClick={() => {router.forward()}}>앞으로가기</button>
            <button onClick={() => {router.refresh()}}>새로고침</button>

        </div>
    )
}