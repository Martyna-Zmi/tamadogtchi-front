export default function DogImage({dog}){
    if(dog){
        return (<img alt="A magical tamadog" src={`var${dog.variant}.png`} width="900px" height="auto"/>)
    }
}