type Theobjs={
  names: {
    first:string
    last:string
  }[]
}

export const PassObjProp = (props:Theobjs) => {
  return (
    <div>I have passed the objs props here {props.names.map((name) => {
        return(
            <>
             <h1>{name.first} {name.last}</h1>
            </>
           
        )
    })}</div>
  )
}
