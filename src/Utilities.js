

function Utilites() {
    let z=useContex2()

    let x=useContext(createContext1)
    console.log(x)
  
  return (
    <div>Utilites
        <p>{x.name}</p>
        <p>{x.age}</p>
        <p>{x.add}</p>
        <h1>i am contex2</h1>
        <p>{z.name}</p>
        {/* <p>{z.age}</p> */}
        <p>{z.add}</p>
    </div>
  )
}

export default Utilites