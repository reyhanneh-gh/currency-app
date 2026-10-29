function Forms() {
    return (
        <section className="w-11/12 md:w-3/4 lg:w-1/2 h-fit flex flex-wrap justify-center items-center formBg rounded-[10px] p-10 my-5">
            <p className="w-full h-fit text-[18px] text-center text-white">
                Please enter the price of 1 dollar (USD) in rials below.
            </p>
            <div className="w-full h-fit flex justify-center my-5">
                <input type="number" placeholder="ex: 2,500,000" className="w-40 h-fit p-2.5 bg-gray-300 rounded-[10px] text-center text-black placeholder:text-gray-600 placeholder:text-center" />
            </div>
            <p className="w-full h-fit text-[18px] text-center text-white mb-5">
                Now choose a direction and enter an amount.
            </p>

            <div className="w-full h-fit flex justify-center items-center relative my-5">
                <p className="text-white font-bold h-fit w-fit text-[20px]">rials (ريال)</p>
                <span className="changeBtn material-symbols-outlined mx-10 p-5 rounded-full bg-blue-500 text-white text-center text-[20px] border border-gray-700 hover:scale-[.9] hover:bg-blue-400 duration-300 cursor-pointer">sync_alt</span>
                <p className="text-white font-bold h-fit w-fit text-[20px]">dollars ($)</p>
            </div>
            <div className="w-full h-fit flex flex-wrap justify-center items-center relative my-5">
                <input type="number" placeholder="enter the amount" className="w-40 h-fit p-2.5 bg-gray-300 rounded-[10px] text-center text-black placeholder:text-gray-600 placeholder:text-center" />
                <span className="w-full my-5 md:my-0 md:w-fit text-2xl text-white font-extrabold mx-10 text-center">=</span>
                <div className="w-40 h-11 p-2.5 bg-blue-300 rounded-[10px] text-center text-black"></div>
            </div>

            {/* --------------------calc button------------------- */}
            <div className="w-full h-fit flex justify-center mt-5">
                <button className="calcBtn py-2.5 px-5 bg-blue-500 rounded-full text-center text-[20px] text-white border border-gray-700 hover:scale-[.9] hover:bg-blue-400 duration-300 cursor-pointer">Calculate</button>
            </div>
        </section>
    )
}
export default Forms