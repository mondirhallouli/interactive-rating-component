import starIcon from "../assets/images/icon-star.svg"

function RateComponent({ rateHandler }) {
    return (
        <div className="w-80 md:w-96 mx-auto mt-40 font-overpass bg-gradient-to-b from-dark-blue to-darker-blue p-6 rounded-lg">
            <div className="w-10 h-10 p-3 mb-4 flex justify-center items-center rounded-full bg-medium-gray/20">
                <img src={starIcon} alt="star icon" />
            </div>

            <h3 className="font-bold text-white text-2xl mb-4">How did we do?</h3>

            <p className="text-light-gray text-[15px] mb-6">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <form className="" onSubmit={rateHandler}>
                <div className="flex justify-between items-center mb-6">
                    <input
                        className="peer/1star hidden"
                        type="radio"
                        name="rating"
                        id="1star"
                        value={1}
                    />
                    <label htmlFor="1star" className="cursor-pointer bg-dark-blue hover:bg-orange hover:text-white peer-checked/1star:bg-light-gray peer-checked/1star:text-white transition flex justify-center items-center text-light-gray w-10 h-10 rounded-full leading-none">
                        1
                    </label>

                    <input
                        className="peer/2star hidden"
                        type="radio"
                        name="rating"
                        id="2star"
                        value={2}
                    />
                    <label htmlFor="2star" className="cursor-pointer bg-dark-blue hover:bg-orange hover:text-white peer-checked/2star:bg-light-gray peer-checked/2star:text-white transition flex justify-center items-center text-light-gray w-10 h-10 rounded-full leading-none">
                        2
                    </label>

                    <input
                        className="peer/3star hidden"
                        type="radio"
                        name="rating"
                        id="3star"
                        value={3}
                    />
                    <label htmlFor="3star" className="cursor-pointer bg-dark-blue hover:bg-orange hover:text-white peer-checked/3star:bg-light-gray peer-checked/3star:text-white transition flex justify-center items-center text-light-gray w-10 h-10 rounded-full leading-none">
                        3
                    </label>

                    <input
                        className="peer/4star hidden"
                        type="radio"
                        name="rating"
                        id="4star"
                        value={4}
                    />
                    <label htmlFor="4star" className="cursor-pointer bg-dark-blue hover:bg-orange hover:text-white peer-checked/4star:bg-light-gray peer-checked/4star:text-white transition flex justify-center items-center text-light-gray w-10 h-10 rounded-full leading-none">
                        4
                    </label>

                    <input
                        className="peer/5star hidden"
                        type="radio"
                        name="rating"
                        id="5star"
                        value={5}
                    />
                    <label htmlFor="5star" className="cursor-pointer bg-dark-blue hover:bg-orange hover:text-white peer-checked/5star:bg-light-gray peer-checked/5star:text-white transition flex justify-center items-center text-light-gray w-10 h-10 rounded-full leading-none">
                        5
                    </label>
                </div>

                <button type="submit" className="w-full py-3 rounded-full leading-none bg-orange text-[15px] font-bold tracking-wider text-white hover:bg-white hover:text-orange transition">SUBMIT</button>
            </form>

        </div>
    )
}

export default RateComponent