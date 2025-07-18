"use client";
import Link from "next/link";

const Hero = ({
     poster,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
    return ( 
         <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', display: 'flex' }}>
      <video
        src="/index/tankespild_index_hero.mp4"
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
        }}
      />
 
      <div className="relative z-10 white flex flex-col justify-between h-full px-(--content-width)">
        <div className="relative top-[10%] md:top-[40%]">
            <h1 className="display">filmskolen blank</h1>
            <div className="flex justify-between">
                <h2 className="red">i holbÆk</h2>
                <h2 className="red">(anno 2021)</h2>
            </div>
        </div>
        <ul className="flex flex-col gap-5 yellow uppercase font-bold pb-25 px-(--content-width-lg) italic">
            <div className="flex justify-between w-full">
            <li className="hover:scale-105 transition-all duration-300">
                <Link href="/om">// om</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
                <Link href="/optag">// optag</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
                <Link href="/elever">// elever</Link>
            </li>
            </div>
            <div className="flex justify-between w-full indent-2">
            <li className="hover:scale-105 transition-all duration-300">
                <Link href="/film">// udgivede film</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-300">
                <Link href="/undervisere">// undervisere</Link>
            </li>
            </div>
        </ul>
      </div>
    </div>
     );
}
 
export default Hero;