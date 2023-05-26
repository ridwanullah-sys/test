import image from "../windows11.jpg";
import acecoinImage from "../Acecoin.png";
import { MdModeEditOutline } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { BiBookmarkAltMinus } from "react-icons/bi";
import { AiFillApple, AiOutlineWifi } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import masterCard from "../Mastercard_2019_logo.svg";
import cardChip from "../cardChip.jpg";

const Page = () => {
  const password = "password";
  return (
    <div className="h-screen flex justify-center px-[4%] text-slate-600 bg-red-900">
      <div
        className="h-fit w-full min-h-screen min-w-[800px] bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-white h-[600px] w-[800px]">
          <div className="flex justify-end h-[5%]">
            <button className="bg-slate-200 px-4 py-1 hover:bg-slate-300">
              x
            </button>
          </div>

          <div className="grid grid-cols-6 h-[95%]">
            {/* Right col */}
            <div className="col-span-4 px-10 pb-10 pt-5 grid grid-rows-7 gap-5">
              {/* Row 1 */}
              <div className="flex justify-between h-10">
                <div className="flex gap-3">
                  <img className="h-full" src={acecoinImage} />
                  <div className="flex items-center">
                    <p className="font-bold">AceCoin</p>
                    <p>Pay</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="time">0</div>
                  <div className="time">1</div>
                  <div className="">:</div>
                  <div className="time">1</div>
                  <div className="time">9</div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex justify-between ">
                <div>
                  <div className="font-bold">Card Number</div>
                  <div className="text-[0.7rem] text-slate-400">
                    Enter the 16-digit card number on the card
                  </div>
                </div>
                <div className="flex items-center font-semibold text-blue-700 gap-2">
                  <div>
                    <MdModeEditOutline />
                  </div>
                  <div>Edit</div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="border-[0.1rem] rounded-lg flex justify-between items-center px-4 py-1">
                <div className="flex gap-3">
                  <img src={masterCard} className="h-[1.5rem]" />
                  <div className="text-slate-400 font-semibold">
                    2412 - 7512 - 3412 - 3456
                  </div>
                </div>
                <div>
                  <HiBadgeCheck className="text-blue-600 text-[1.5rem]" />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2">
                <div>
                  <div className="font-bold">CVV Number</div>
                  <div className="text-[0.7rem] text-slate-400">
                    Enter the 3 or 4 digit number on the card
                  </div>
                </div>
                <div className="border-[1px] rounded-lg flex items-center justify-between px-4">
                  <div></div>
                  <div className="font-bold">327</div>
                  <div className="font-bold text-3xl text-slate-400">
                    <CgMenuGridO />
                  </div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-2">
                <div>
                  <div className="font-bold">Expiry Date</div>
                  <div className="text-[0.7rem] text-slate-400">
                    Enter the expiration date on the card
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="border-[1px] rounded-lg h-full w-1/3 flex justify-center items-center font-bold">
                    09
                  </div>
                  <div className="font-bold">/</div>
                  <div className="border-[2px] border-blue-400 bg-blue-100 rounded-lg h-full w-1/3 flex justify-center items-center font-bold">
                    22
                  </div>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-2">
                <div>
                  <div className="font-bold">Password</div>
                  <div className="text-[0.7rem] text-slate-400">
                    Enter your Dynamic password
                  </div>
                </div>
                <div className="border-[1px] rounded-lg flex items-center justify-between px-4">
                  <div className="font-bold flex text-xl">
                    {[...password].map((letter) => {
                      return <GoPrimitiveDot />;
                    })}
                  </div>
                  <div className="font-bold text-3xl text-slate-400">
                    <CgMenuGridO />
                  </div>
                </div>
              </div>

              {/* Row 7 */}
              <button className="bg-blue-600 hover:bg-blue-800 py-4 rounded-lg text-slate-100 font-bold text-lg">
                Pay Now
              </button>
            </div>

            {/* Left Col */}
            <div className="relative col-span-2 pb-10 pt-5 flex items-end justify-center">
              <div className=" bg-slate-200 h-[87%] w-[75%] rounded-[12px] flex flex-col justify-end ">
                {/* Row 1 */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="cp">
                    <div className="c">Company</div>
                    <div className="p">
                      <div>
                        <AiFillApple />
                      </div>
                      <div className="ml-1">Apple</div>
                    </div>
                  </div>
                  <div className="cp">
                    <div className="c">Order Number</div>
                    <div className="p">1266201</div>
                  </div>
                  <div className="cp">
                    <div className="c">Product</div>
                    <div className="p">MackBook Air</div>
                  </div>
                  <div className="cp">
                    <div className="c">VAT(20%)</div>
                    <div className="p">$100.00</div>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="h-[8%] w-full flex items-center">
                  <div className="rounded-r-full h-full w-[7%] bg-white"></div>
                  <div className="w-[86%] px-1">
                    <hr className=" border-[1.5px] border-dashed border-slate-400" />
                  </div>
                  <div className=" rounded-l-full h-full w-[7%] bg-white"></div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-between w-full p-4 items-center">
                  <div>
                    <div className="font-semibold text-slate-400">
                      You have to Pay
                    </div>
                    <div className="flex items-end">
                      <div className="font-bold text-2xl">549</div>
                      <div className="font-semibold">.99</div>
                      <div className="ml-1 font-semibold text-slate-400">
                        USD
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl">
                    <BiBookmarkAltMinus />
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="absolute top-0 right-[24%] left-[24%] h-[43%] flex flex-col items-center">
                <div className="sticky bg-blue-700 h-[2%] w-[30%] rounded-sm shadow-[0px_20px_30px_10px_rgba(3,102,214,0.3)]"></div>
                <div className="bg-white h-[98%] shadow-2xl rounded-2xl pt-10 pb-7 px-4 flex flex-col justify-between w-full">
                  <div className="flex justify-between items-center">
                    <img src={cardChip} className="h-[30px]" />
                    <AiOutlineWifi className="text-2xl" />
                  </div>
                  <div className="text-[60%]">
                    <div className="mb-2">
                      <div className="font-semibold">Jonathan Micheal</div>
                      <div className="flex items-center font-bold">
                        <GoPrimitiveDot />
                        <GoPrimitiveDot />
                        <GoPrimitiveDot />
                        <GoPrimitiveDot /> 3456
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-semibold">09/22</div>
                      <div className="flex flex-col items-center">
                        <img src={masterCard} className="h-[20px]" />
                        <p className="text-[8px]">mastercard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
