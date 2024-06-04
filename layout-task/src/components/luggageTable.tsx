import React from 'react';
import { MdLuggage } from "react-icons/md";

const luggageData = [
  { airline: "BLUE AIR", weight: "10 kg", id:1, x:"X", fee:"65€", item:"..."},
  { airline: "EASYJET", weight: "10 kg", id:2 },
  { airline: "ERNEST", weight: "10 kg" , id:3},
  { airline: "EUROWINGS", weight: "10 kg" , id:4},
  { airline: "FLYONE", weight: "10 kg" , id:5},
  { airline: "JET2.COM", weight: "10 kg"  , id:6},
  { airline: "LEVEL", weight: "10 kg" , id:7},
  { airline: "NORWEGIAN AIR", weight: "10 kg"   , id:8},
  { airline: "ONUR AIR", weight: "10 kg" , id:9},
  { airline: "PEGASUS", weight: "10 kg" , id:10},
  { airline: "POBEDA", weight: "10 kg" , id:11},
  { airline: "RYANAIR & LAUDA", weight: "10 kg"  , id:12},
  { airline: "SKYUP (*)", weight: "10 kg" , id:13},
  { airline: "SMARTWINGS (*)", weight: "10 kg" , id:14},
  { airline: "TRANSAVIA", weight: "10 kg"   , id:15},
  { airline: "TUIFLY (*)", weight: "10 kg" , id:16},
  { airline: "VOLTEA", weight: "10 kg" , id:17},
  { airline: "VUELING", weight: "10 kg" , id:18},
  { airline: "WIZZAIR", weight: "10 kg" , id:19},
  { airline: "WOW AIR", weight: "10 kg" , id:20},
];

const LuggageTable = () => {
  return (
    <div className="overflow-x-auto w-full mt-2">
      <table className="min-w-full bg-blue-100 border-x-0">
        <thead>
          <tr className=' border-t-4 border-b-[3px] border-gray-700'>
            <th className=" border-gray-400 diagonalRising h-full w-[24%] border-l-0" colSpan={5}
             style={{}}>
                    <div className='flex flex-col w-full h-full'>
                        <div className=' justify-self-end self-end w-2/5'>European LCC Airlines</div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className=' justify-self-end self-start w-2/5'>Free hand luggage</div>
                    </div> 

            </th>
            <th className=" border-gray-600 px-4 py-2 w-[12%]" colSpan={2}><div className='flex flex-col items-center'><MdLuggage className=' w-5/6 h-5/6'></MdLuggage><br />56 cm<br />45 cm<br />25 cm</div></th>
            <th className=" border-gray-600 px-4 py-2 w-[12%]" colSpan={2}><div className='flex flex-col items-center'><MdLuggage className=' w-5/6 h-5/6'></MdLuggage><br />56 cm<br />45 cm<br />25 cm</div></th>
            <th className=" border-gray-600 px-4 py-2 w-[12%]" colSpan={2}><div className='flex flex-col items-center'><MdLuggage className=' w-5/6 h-5/6'></MdLuggage><br />55 cm<br />40 cm<br />20 cm</div></th>
            <th className=" border-gray-600 px-4 py-2 w-[12%]" colSpan={2}><div className='flex flex-col items-center'><MdLuggage className=' w-5/6 h-5/6'></MdLuggage><br />55 cm<br />40 cm<br />23 cm</div></th>
            <th className=" border-gray-600 px-4 py-2 w-[12%]" colSpan={2}><div className='flex flex-col items-center'><MdLuggage className=' w-5/6 h-5/6'></MdLuggage><br />55 cm<br />40 cm<br />20 cm</div></th>
            <th className=" border-gray-600 px-4 py-2 w-[4%]" colSpan={2}>Extra fee</th>
            <th className=" border-gray-600 px-4 py-2 w-[12%] border-r-0" colSpan={2}>Personal item (small bag)</th>
          </tr>
        </thead>
        <tbody>
          {luggageData.map((item, index) => (
            <tr key={index}>
              <td className=" border-gray-400 px-4 py-2 w-[1%] border-l-0" >{item.id}</td>
              <td className=" border-gray-400 px-4 py-2 w-[16%]" colSpan={2}>{item.airline}</td>
              <td className=" border-gray-400 px-4 py-2 w-[7%]" colSpan={2}>{item.weight}</td>
              <td className=" border-gray-400 px-4 py-2" colSpan={2}></td>
              <td className=" border-gray-400 px-4 py-2"colSpan={2}></td>
              <td className=" border-gray-400 px-4 py-2"colSpan={2}></td>
              <td className=" border-gray-400 px-4 py-2"colSpan={2}><div className='flex flex-row justify-center w-full'>{item.x ? item.x : ""}</div></td>
              <td className=" border-gray-400 px-4 py-2"colSpan={2}></td>
              <td className=" border-gray-400 px-4 py-2"colSpan={2}>{item.fee ? item.fee : ""}</td>
              <td className=" border-gray-400 px-4 py-2 border-r-0">{item.item ? item.item : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LuggageTable;
