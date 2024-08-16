"use client";
import { useState } from "react";
import Image from 'next/image';
import templateone from '../../public/template1.jpg';
import templateTwo from '../../public/template2.jpg';

import CrousalShowCard from "@/components/Crousals/CrousalShowCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CarouselCraft = () => {
    const [state, setState] = useState(false);

    const Brand = () => (
        <div className="flex items-center justify-between py-1 w-full pl-0">
  <img
    src="https://ik.imagekit.io/os33grffu/_b88d42a3-dac4-4886-a46a-55c34ee7894c-removebg-preview.png?updatedAt=1723400311093"
    width={80}
    height={30}
    alt="CarouselCraft by Hasan logo"
    className="mr-6"
  />
  <span className="text-3xl font-bold text-orange-500 glow-text flex-grow text-center">CarouselCraft by Hassan</span>
</div>







    );

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <header>
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav
                    className={`pb-5 md:text-sm ${
                        state
                            ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
                            : ""
                    }`}
                >
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div
                            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                                state ? "block" : "hidden"
                            }`}
                        >

                        </div>
                    </div>
                </nav>
            </header>
            <section className="relative flex-1 flex items-center justify-center">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-orange-400  font-extrabold mx-auto md:text-5xl">
                        Spin Your Content to Life With Our Tool!!
                        </h2>
                        <div className="w-full max-w-4xl mx-auto p-4">
  <Card className="w-full max-w-[100%] h-auto transition-transform transform hover:scale-105 duration-300 ease-in-out bg-transparent shadow-none border-none mx-auto">
    <CardHeader className="text-center animate-fade-in">
      {/* Add content here if needed */}
    </CardHeader>
    <CardContent className="flex justify-center overflow-x-auto space-x-4 p-4">
      <CrousalShowCard imgSrc={templateone} pageLink='/TemplateOne' />
      <CrousalShowCard imgSrc={templateTwo} pageLink='/TemplateTwo' />
    </CardContent>
    <div className="border-t-4 border-orange-500 mt-5 py-3 text-center">
      <span className="text-orange-500 font-semibold">Choose Template</span>
    </div>
  </Card>
</div>





                        <p className="max-w-2xl mx-auto text-gray-400">
                        Create stunning and interactive carousels with ease using CarouselCraft. Design visually appealing slideshows and showcase your content in a captivating way.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex"
                        >
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                            />
                            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-orange-400 -200 hover:bg-orange-500 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex">
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                </svg>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                </svg>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                </svg>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                </svg>
                            </div>
                            <span>5.0 out of 5</span>
                            <a
                                href="javascript:void(0)"
                                className="text-sm text-gray-400 hover:text-gray-300"
                            >
                                (based on 45 reviews)
                            </a>
                        </div>
                        <a
                                href="https://hasan-port.vercel.app/"
                                className="text-sm text-gray-400 hover:text-gray-300"
                            >
                                (Xooxs)
                            </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarouselCraft;
