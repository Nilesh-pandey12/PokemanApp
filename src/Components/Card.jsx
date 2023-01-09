

const Card=({ pokemon,infoPokemon})=> {



  return (
    <>
    {pokemon.map((item)=>{
        return(
        <div className="flex bg-slate-400  border-2 w-72 rounded-xl m-2 shadow-lg shadow-gray-700" key={item.id} onClick={()=>infoPokemon(item)}>
        <h1 className="m-1" >{item.id}</h1>
          <img src={item.sprites.front_default} alt="Pokemon" className="w-32 h-32"  />
          <h1 className="my-12 mx-1 text-xl font-bold" >{item.species.name}</h1>
  </div>)
    })}
      
    </>
  );
}
export default Card;


