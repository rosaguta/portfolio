"use client"
import BootScreenAnim from '@/components/BootScreen';

export default function Home() {

  return (
    <div>
      <div className='hidden'>
        <BootScreenAnim />
      </div>
      <div className='h-auto max-w-full'>
        <img className="object-fill"src="/Rosey-stars.png"></img>
      </div>
    </div>
  );
}