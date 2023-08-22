import React from 'react';
import { useRouter } from 'next/router'
const NotFound = () => {
  const router=useRouter();

  setTimeout(()=>{
    router.push("/")
  },5000)
  
  
  return (
    <div>
      <img
        alt=''
        src='https://www.pngkit.com/png/detail/930-9306658_404-not-found.png'
        width="100%"
      />
    </div>
  );
};

export default NotFound;
