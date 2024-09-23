'use client';
import Image from "next/image";
import { CldUploadButton, CldImage } from 'next-cloudinary';

import { useState } from 'react';

type Upload_result ={
  info: { public_id :string

  }
  event: "success"
}


export default function Home() {

  const [imageid, setimageid] = useState ("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<CldUploadButton 

onUpload={(result:Upload_result)=>{
  // const publicId = result?.info?.public_id || "";
  setimageid(result.info.public_id);
          
} } 
uploadPreset='nuf6pcmo' />
{imageid && ( 

<CldImage
  width="400"
  height="300"
  src={imageid}
  // removeBackground
  crop= "limit"
  // background="skyblue"
  // tint="70:blue:green:purple"

  sizes="100vw"
  alt="Description of my image"
/>
)}
    </main>
  );
}
