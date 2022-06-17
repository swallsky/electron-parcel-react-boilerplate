import React,{useEffect} from "react";

export default function Home() {
  // 首页
  useEffect(()=>{
    window.electronApi.open();
  });

  return (
    <>
      <div>hello world sky!!!</div>
    </>
  );
}
