import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokemon_info from "./Pokemon_info";
import axios from "axios";
const Main = () => {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState(" https://pokeapi.co/api/v2/pokemon");
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

   
   useEffect( ()=>{

    axios.get(url).then(res => {
        setPokeData([])
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        getPokemon(res.data.results)
   
        
    })
    },[url])

    const getPokemon= (res)=>{
        // console.log("i am here",res)
        // setLoading(false)
        res.map(async(item)=>{
            const result =await axios.get(item.url)
            // console.log("ufff here ",result)
            // console.log(JSON.stringify(result))
            setPokeData(state=>{
                state=[...state,result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
            // setLoading(false)

        })

      
    }


    



    // if(loading)return "Loading.."
    

    return (
        <div className="bg-orange-400 flex">
            <div className="w-1/2 mt-24">
                <div className="grid gap-4 grid-cols-2 grid-row-3">
                <Card pokemon={pokeData} infoPokemon={poke=>setPokeDex(poke)} />
                </div>
                <div className="mt-12">
                <button className="border-2 border-slate-700 p-2 rounded-3xl text-xl font-bold bg-green-600 shadow-lg shadow-gray-500 w-32 mr-6" onClick={()=>setUrl(prevUrl)} >Previous</button>
                <button className="border-2 border-slate-700 p-2 rounded-3xl text-xl font-bold bg-green-600 shadow-lg shadow-gray-500 w-32" onClick={()=>setUrl(nextUrl)}>Next</button>
                </div>


            </div>
            <div className="w-1/2">
                <Pokemon_info data={pokeDex} />
            </div>
        </div>
    )
}

export default Main;