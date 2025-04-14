import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const Singleperson = () =>{
    const { position } = useParams()
    const {store, dispatch}= useGlobalReducer()
    console.log("theID:", position)

const myCharacter= store.people[position]
console.log("my chara ", myCharacter)
    return( 
<div>singlePerson{myCharacter?.name}</div>
);}