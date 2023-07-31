

import Image from 'next/image'
import Link from 'next/link'
// import { useEffect, useState } from 'react';


export default function Nav() {
  // const [dark, setDark] = useState("다크모드"); // 다크모드 있는곳 텍스트 ! 

  // const toggleDarkMode = () => {
  //   if (localStorage.getItem("theme") === "dark") {
  //     // 다크모드 -> 기본모드 
  //     localStorage.removeItem("theme"); // 다크모드 삭제
  //     document.documentElement.classList.remove("dark");  // html class에서 dark클래스 삭제 !  
  //     setDark("기본모드");
  //   } else {
  //     // 기본모드 -> 다크모드
  //     document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 ! 
  //     localStorage.setItem("theme", "dark");  // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 ! 
  //     setDark("다크모드");
  //   }
  // };

  // useEffect(() => {
  //   // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
  //   if (localStorage.getItem("theme") === "dark") {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  return (

    <nav className="">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-wrap items-center justify-evenly">
        {/* <Link href={"/"}>웹프로그래밍</Link> */}
        <div>
          웹프로그래밍
        </div>
        <div>
          <Link href={"/"}>
            <Image
              src="./title.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={24}
              priority
            />
          </Link>
        </div>
        <div>
          <Link href={"/about"}>about_Test</Link>
        </div>
        <div>
          <Link href={"/list"}>List</Link>
        </div>        
      </div>
    </nav>

  )
}
