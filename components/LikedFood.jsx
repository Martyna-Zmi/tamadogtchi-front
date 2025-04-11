export default function LikedFood({likedFoods}){
    if(likedFoods){
        return(
            <>
                <p className="text-text-secondary text-xl">{(likedFoods.length > 0) ? "" : "None yet"}</p>
                <p className="text-text-secondary text-xl">{(likedFoods[0])? likedFoods[0].name: ""}</p>
                <p className="text-text-secondary text-xl">{(likedFoods[1]) ? likedFoods[1].name : ""}</p>
                <p className="text-text-secondary text-xl">{(likedFoods[2]) ? likedFoods[2].name : ""}</p>
            </>
        )
    }

}