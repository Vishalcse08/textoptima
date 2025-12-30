import { Copy, RefreshCcw, Sparkles } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const Smarttext = () => {
    const [styleOpen, setStyleOpen] = useState(false);
    const [selectedStyle, setSelectedStyle] = useState("Style");
    const styleRef = useRef(null);


    const [outputText, setOutputText] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Options");

    const dropdownRef = useRef(null);


    const handleCopy = async () => {
        if (!outputText) return;

        await navigator.clipboard.writeText(outputText);
        alert("Text copied to clipboard!");

        useEffect(() => {
            const handleClickOutside = (e) => {
                if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);

    };
    const handleSelect = (option) => {
        setSelectedOption(option);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                (dropdownRef.current && !dropdownRef.current.contains(e.target)) &&
                (styleRef.current && !styleRef.current.contains(e.target))
            ) {
                setOpen(false);
                setStyleOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
        setStyleOpen(false);
    };

    return (
        <>
            <div className='mb-[30px]'>
                <div className='md:w-[90%] w-[100%] mx-auto mt-[30px]'>
                    <div className='md:w-[100%] w-[95%] mx-auto md:text-left text-center'>
                        <h1 className='md:text-[40px] text-[30px] tracking-tighter font-bold'>Smart Text Rewriter</h1>
                        <p>Refine your writting instantly. Paste your text below and choose your style and tone.</p>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] gap-10'>
                        <div className=''>
                            <div className='md:w-[100%] w-[95%] mx-auto '>
                                <h1 className='tracking-tighter mt-[30px] text-[18px] font-medium '>Your Original Text</h1>
                                <textarea className='w-full h-[300px] border-2 border-gray-300 rounded-md mt-[10px] p-3 resize-none bg-gray-100 ' placeholder='Paste your text here...'></textarea>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <h1 className='tracking-tighter mt-[30px] mb-[10px] text-[18px] font-medium '>Tone</h1>
                                        <div className="relative inline-block" ref={dropdownRef}>
                                            {/* Button */}
                                            <button
                                                onClick={() => setOpen(!open)}
                                                className="px-4 py-2 text-black bg-gray-100 rounded-md"
                                            >
                                                {selectedOption} ⌄
                                            </button>

                                            {/* Dropdown */}
                                            {open && (
                                                <div className="absolute mt-2 w-44 bg-white border rounded-md shadow-lg">
                                                    {[
                                                        "Professional",
                                                        "Formal",
                                                        "Friendly",
                                                        "Neutral",
                                                        "Positive",
                                                        "Motivational",
                                                    ].map((option) => (
                                                        <button
                                                            key={option}
                                                            onClick={() => handleSelect(option)}
                                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                    <div className=''>
                                        <h1 className="tracking-tighter mb-[10px] mt-[30px] text-[18px] font-medium">
                                            Style
                                        </h1>

                                        <div className="relative inline-block" ref={styleRef}>
                                            {/* Button */}
                                            <button
                                                type="button"
                                                onClick={() => setStyleOpen(!styleOpen)}
                                                className="px-4 py-2 text-black   bg-gray-100 rounded-md"
                                            >
                                                {selectedStyle} ⌄
                                            </button>

                                            {/* Dropdown */}
                                            {styleOpen && (
                                                <div className="absolute mt-2 w-44 bg-white border rounded-md shadow-lg">
                                                    {[
                                                        "Simple",
                                                        "Detailed",
                                                        "Creative",
                                                        "Concise",
                                                        "Persuasive",
                                                        "Technical",
                                                    ].map((style) => (
                                                        <button
                                                            key={style}
                                                            type="button"
                                                            onClick={() => handleStyleSelect(style)}
                                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                        >
                                                            {style}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center  justify-center gap-[10px] p-[10px] w-[100%] rounded-lg text-white font-medium
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:shadow-lg hover:scale-[1.01]
            transition mt-[20px]'>
                                    <Sparkles className='text-[#fff] ' />
                                    <button className=' md:text-[20px] '> Rewrite Text </button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='md:w-[100%] w-[95%] mx-auto mt-[30px]'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='tracking-tighter  text-[18px] font-medium '>Rewritten Text</h1>

                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex gap-1 items-center cursor-pointer bg-gray-100 p-[5px] rounded-md' onClick={handleCopy}>
                                            <Copy className='w-[15px]' />
                                            <h1 >Copy</h1>
                                        </div>
                                        <div className='flex gap-1 items-center cursor-pointer bg-gray-100 p-[5px] rounded-md'>
                                            <RefreshCcw className='w-[15px]' />
                                            <h1>Regenerate</h1>
                                        </div>
                                    </div>
                                </div>


                                <textarea
                                    className="w-full h-[400px] border-2 border-gray-300 rounded-md mt-[10px] p-3 resize-none bg-gray-100 cursor-not-allowed"
                                    value={outputText}
                                    readOnly placeholder='The output will appear here.Click "Rewrite text" to get start. '
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Smarttext