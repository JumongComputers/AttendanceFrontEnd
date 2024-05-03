"use client"
import { useState } from "react";
import LoginModal from "./modal/LoginModal";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { HomeProps } from "./utils/types";
// Provider



const Home: React.FC<HomeProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className="relative py-20 md:py-20 lg:py-40">
      <div className="w-full flex flex-col justify-center align-middle text-center mt-20 mx-auto border-3 border-white lg: ">
        <h1 className="text-white text-2xl font-bold md:text-6xl lg:text-8xl">Welcome to Attendy</h1>
        <span className="text-white md:text-2xl lg:text-3xl my-6">Your reliable Attendance App</span>
        <button onClick={openModal} className="bg-white mx-auto my-5 px-5 py-2">Click here to Login</button>
        < Provider store={store}>
          <LoginModal isOpen={isOpen} onRequestClose={closeModal}/>
        </ Provider>
        
      </div>
    </main>
  );
}

export default Home;
