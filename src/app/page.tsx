import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="md:py-20 lg:py-40">
      <div className="w-7/6 flex flex-col justify-center align-middle text-center my-20 mx-auto border-3 border-white lg: ">
        <h1 className="text-white text-2xl font-bold md:text-6xl lg:text-8xl">Welcome to Attendy</h1>
        <span className="text-white md:text-2xl lg:text-3xl my-6">Your reliable Attendance App</span>
        
          <Link href="#">
           <button className="bg-white mx-auto my-5 px-5 py-2">Click here to Login</button>
          </Link>
        
      </div>
    </main>
  );
}
