import React from "react";

const Pokemon_info = ({ data }) => {

    return (
        <div className="fixed">
            {
                (!data) ? "" : (
                    <>
                        <div className="border-2 border-slate-600 bg-slate-500 shadow-xl shadow-slate-600  rounded-2xl w-96 h-112 relative left-50 top-10 m-24" >
                            <div className="">
                                <h1 className="text-3xl relative left-32 font-bold">{data.name}</h1>
                                <img src={data.sprites.front_default} alt="pokemoninfo" className="relative bg-cover left-20 my-4 w-32 h-32" />
                                <div className="relative left-0 text-2xl flex my-4">
                                    {
                                        data.abilities.map((p) => {
                                            return(
                                            <div className="border-2 bg-red-400 shadow-lg shadow-slate-900 w-1/2 mr-3 rounded-3xl px-4">
                                                <h1>{p.ability.name}</h1>
                                            </div>)
                                        })
                                    }


                                </div>
                                {
                                    data.stats.map((p)=>{
                                        return(
                                            <div className="relative left-32 text-xl italic rounded-2">
                                                <h3>{p.stat.name}:{p.base_stat}</h3>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Pokemon_info;