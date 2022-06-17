import React,{useEffect} from "react";

export default function Home() {
  // 首页
  useEffect(()=>{
    window.electronApi.open();
    console.log("2222 --- spring");
  });

  return (
    <>
      <div>hello world sky</div>
    </>
  );
}
