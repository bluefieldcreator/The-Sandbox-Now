import { response } from '../pages/api/brickplanet-privacy';
export default function PrivacyComponent(props: response) {
    return (
        <div className="mx-auto p-2 bg-black rounded text-white">
            <h3 className='text-xl text-center'>{props.name}</h3>
            <div className='text-center'>
                {props.description}
            </div>
            <ul className='space-y-2 mt-2'>
                {Object.keys(props.data).map((key: string) => {
                    return (
                        <li key={key} className="w-max mx-auto">
                            <div className='inline-block font-bold p-2 w-24'>{key}:</div> <span className='bg-white text-black p-1 italic'>{(props.data[key] == "Unkown" ? "No Data" : props.data[key])}</span>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}