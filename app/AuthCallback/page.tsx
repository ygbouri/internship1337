"use client";
import { useVariable } from '@/components/providerVariable';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'



export default function page() {
  const { role, updateRole } = useVariable();
    const router= useRouter()
    useEffect(()=>{
        const query = new URLSearchParams(window.location.search);
        const roleRoute = query.get('role');
        console.log('role', roleRoute)
        const path = query.get('path');
        console.log(path, roleRoute)
        if (roleRoute && path) {
            localStorage.setItem('role', roleRoute as string)
            updateRole()
            router.push(path)
            }
    },[])
  return (
    <div className='flex flex-col items-center justify-center'>Loading...</div>
  )
}
