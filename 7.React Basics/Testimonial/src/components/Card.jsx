import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Card = (props) => {
    let review = props.review
    return (
        <div className="flex flex-col md:relative">

            <div className="absolute top-[-7rem] mx-auto z-[20]">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={review.image} />
                <div className="rounded-full w-[140px] h-[140px] z-[-10] absolute top-[-0.4rem] right-[-0.57rem] bg-violet-500 "></div>
            </div>

            <div className="text-center mt-7">
                <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
                <p className="uppercase text-violet-300 text-sm">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>

        </div>
    )
}
export default Card