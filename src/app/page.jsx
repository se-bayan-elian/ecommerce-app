"use client";
import { redirect } from "next/navigation";
import useAuth from "../hooks/useAUth";
import { useEffect } from "react";

export default function Home() {
  const {token} = useAuth()
  useEffect(()=>{
    if(token){
      redirect('/home')
    }
    else {
      redirect('/login')
    }
  },[token])
  return (
    <main>
      
    </main>
  );
}
