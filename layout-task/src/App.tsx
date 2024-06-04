import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Logo from './components/logo';
import TwoRectangles from './components/twoRectangles';
import Search from './components/search';
import Bar from './components/bar';
import IconList from './components/iconList';
import AirnewsSection from './components/airnewsSection';
import Reklamy from './components/reklamy';
import Text from './components/text';
import engine from "./img/engine.png";
import LuggageTable from './components/luggageTable';
import SmallLogo from './components/smallLogo';
function App() {

  const firstDivRef = useRef<HTMLDivElement>(null);
  const [topValue, setTopValue] = useState<number>(0);

  const secondDivRef = useRef<HTMLDivElement>(null);
  const [propValue, setPropValue] = useState<number>(0);

  const rectDivRef = useRef<HTMLDivElement>(null);
  const [rectTrans, setRectTrans] = useState<number>(0);

  const secDivRef = useRef<HTMLDivElement>(null);
  const [secTopValue, setSecTopValue] = useState<number>(0);
  const [secHeight, setSecHeight] = useState<number>(0);

  const updateSizes = () => {
    if (firstDivRef.current) {
      setTopValue(firstDivRef.current.clientHeight);
    }
    if (secondDivRef.current) {
      setPropValue(secondDivRef.current.clientHeight*0.7);
    }
    if (rectDivRef.current) {
      setRectTrans(rectDivRef.current.clientWidth*0.5);
    }
    if (secDivRef.current) {
      setSecTopValue(secDivRef.current.offsetTop);
      setSecHeight(secDivRef.current.clientHeight);
    }
  }

  useEffect(() => {
    updateSizes();

    window.addEventListener('resize', updateSizes); // Update on window resize
    return () => window.removeEventListener('resize', updateSizes); // Cleanup on unmount
  }, []);


  return (
    <section className="section bg-white min-h-screen h-fit">
      <div 
      className={`flex flex-row absolute bg-gray-300 w-full z-10`}
      style={{ top: `${topValue}px`, height: `${propValue}px`}}>
      </div>
      <div className="flex flex-col w-4/5 ml-auto mr-auto items-center bg-white h-max">
        <div ref={firstDivRef}  className='flex flex-col items-center  w-full'>
          <TwoRectangles></TwoRectangles>
          <div className='flex flex-row  w-full'>
            <div className=' pl-20 basis-1/2 '>
              <Logo></Logo>
            </div>
            <div className=' basis-1/2    '>
              <Search></Search>
            </div>
          </div>
          <div>
            <p className='text-blue-500 text-2xl'>AIRNEWS  <Bar></Bar>  AIRTRENDS  <Bar></Bar>  AIRCHALLENGES  <Bar></Bar>  KONTAKT</p>
          
          </div>
          <hr className='h-[2px] w-full bg-gray-600 rounded-sm m-2'/>
          <p className='text-gray-600 text-4xl m-2'>WE CHANGE THE AIRWORLD</p>
          <div className='mb-2'>
            <IconList></IconList>
          </div>
        </div>
        <div ref={secondDivRef} className='flex flex-col w-full items-center z-20'>
          <div ref={rectDivRef}>
            <TwoRectangles></TwoRectangles>
          </div>
          
          <p className='text-gray-800 p-2'>
            AIR <span className='font-semibold'>NEWS</span>
            <hr className='h-[2px] w-full bg-black'/>
          </p>
          <div className='flex flex-row flex-wrap justify-center w-full'>
              <AirnewsSection />
              <AirnewsSection />
              <AirnewsSection />
              <AirnewsSection />
          </div>
        </div>
        <Reklamy></Reklamy>
        <div className="bg-plane-air bg-cover h-96 w-full flex flex-col justify-start items-start mb-2">
          <p className=' text-gray-600 self-center text-2xl pt-12'>AIR<span className='font-bold'>TRENDS</span>
            <hr className='w-full bg-black h-[2px] border-none rounded-sm'/>
          </p>
          <div className=' w-5/12 justify-self-end h-full flex flex-col justify-center mb-16'>
            <Text></Text>
          </div>
        </div>
        <Reklamy></Reklamy>
        <div className='flex flex-row w-full relative justify-start mb-2'>
          <div ref={rectDivRef} className='absolute left-1/2 top-[1px]'
          style={{transform: `translateX(-${rectTrans}px)`}}> <TwoRectangles></TwoRectangles></div>
          <img src={engine} alt="engine" className=" w-4/6 shrink-0" />
          <div className='flex flex-col items-start justify-center ml-3 w-full h-full'>
            <p className=' font-bold mb-3'>This is a small text for title</p>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo dicta, consequatur aut quibusdam minima! Repudiandae, debitis ut explicabo fugiat, vero natus.</p>
          </div>
        </div>
        <Reklamy></Reklamy>
        <div ref={secDivRef} className='w-full z-20 pb-8'>
          <LuggageTable></LuggageTable>
        </div>
        <div 
          className={`absolute bg-blue-100 w-full z-10`}
          style={{ top: `${secTopValue+9}px`, height: `${secHeight}px`}}>
        </div>
      </div>
      <div className=' h-20 w-full bg-gray-800 flex flex-row justify-center items-center'>
        <SmallLogo></SmallLogo>
        <p className='text-white text-xs ml-10'>AIRNEWS  <Bar></Bar>  AIRTRENDS  <Bar></Bar>  AIRCHALLENGES  <Bar></Bar>  KONTAKT</p>
      </div>
    </section>
  );
}

export default App;
