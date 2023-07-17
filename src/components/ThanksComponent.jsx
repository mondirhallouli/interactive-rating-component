import thanksSvg from '../assets/images/illustration-thank-you.svg'

function ThanksComponent({ rate }) {
    return (
        <div className="w-80 md:w-96 mx-auto mt-40 font-overpass text-center bg-gradient-to-b from-dark-blue to-darker-blue pt-8 px-6 pb-6 rounded-lg">
            <div className="w-32 mx-auto mb-6">
                <img src={thanksSvg} className='w-full h-auto' alt="thank you illustration" />
            </div>

            <p className="bg-light-gray/10 text-orange text-[15px] inline-block h-10 leading-10 px-4 pt-0.5 mb-6 rounded-full">You selected {rate} out of 5</p>

            <h3 className="font-bold text-white text-2xl mb-4">Thank you!</h3>

            <p className="text-light-gray text-[15px]">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don't hesitate to get in touch!
            </p>

        </div>
    )
}

export default ThanksComponent