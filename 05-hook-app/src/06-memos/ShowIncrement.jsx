
export const ShowIncrement = ({increment}) => {
    console.log('Generando');
    
  return (
   <button className="btn btn-primary mt-2" onClick={()=>{
    increment();
   }}>Incrementar</button>
  )
}

