function Input() {
    return (
        <section className="w-full h-fit
         border border-white flex flex-wrap justify-center items-center">
            <h4 className="w-full h-fit mb-5 text-[18px] text-center text-white">
                Please enter the price of 1 dollar (USD) in rials below.
            </h4>
            <div className="w-full h-fit flex justify-center relative">
                <input type="number" placeholder="ex: 2,500,000" className="w-40 h-fit p-2.5 bg-gray-300 rounded-[10px] text-center text-black placeholder:text-gray-600 placeholder:text-center" />
            </div>
            <h4 className="w-full h-fit mb-5 text-[14px] text-center text-white">
                Now enter .
            </h4>
        </section>
    )
}
export default Input