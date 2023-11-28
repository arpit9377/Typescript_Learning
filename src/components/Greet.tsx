
type Greetprop ={
    name:string
    age:number
}


const Greet = (props: Greetprop) => {
  return (
    <div>Hello, i have passed (ur name) {props.name} age {props.age} using props </div>
  )
}

export default Greet