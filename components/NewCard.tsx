import Link from "next/link"

export default function NewsCard(props) {
    return (
        <div className="p-2 mx-auto justify-center border-black border-4  ">
            <h3 className='text-xl text-center '>{props.title}</h3>
            <Link href={`/news/view/${props.slug}`}>
                <button className='flex  p-2 mx-auto w-2/4 text-center hover:text-white border-4 border-blue-700 transition-all duration-50 ease-linear '>
                    <div className="text-center w-max mx-auto ">View</div>
                </button>
            </Link>

        </div>
    )
}