const actions = [
    {name: "Throw a ball", points: 2},
    {name: "Belly rubs", points: 3},
    {name: "Learn new tricks", points: 2},
    {name: "Play tag", points: 4},
    {name: "Play hide and seek", points: 3},
];
const buttonStyle = "w-full my-1 text-text-primary border-1 border-purple-800 rounded-2xl p-4 bg-violet-700 hover:bg-violet-900";

export default function PlayOptions(){
    return(
        <div className="flex flex-col flex-wrap justify-center">
            {actions.map((action, key) => {
                return (
                    <div key={key}>
                        <button className={buttonStyle}>{action.name}</button>
                    </div>
                )
            })}
        </div>
    )
}