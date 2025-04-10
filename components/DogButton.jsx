export default function DogButton({dog}){
    if(dog){
        return(
            <div className="h-fit mx-5">
                <button
                    className="border-1 border-purple-800 rounded-2xl p-4 bg-violet-700 hover:bg-violet-900">
                    &#128062;
                </button>
            </div>
        )
    }
    return (
        <div className="h-fit mx-5">
            <button
                className="border-1 border-purple-800 rounded-2xl p-4 bg-violet-700 hover:bg-violet-900">
                &#10133;
            </button>
        </div>
    )
}