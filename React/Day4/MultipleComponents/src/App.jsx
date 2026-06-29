// import Card from "./Components/Card"

// const App = () => {
  
//   const People = [
      
//     {
//       "name": "Emma Johnson",
//       "imageSrc": "https://randomuser.me/api/portraits/women/1.jpg"
//     },
//     {
//       "name": "Liam Smith",
//       "imageSrc": "https://randomuser.me/api/portraits/men/2.jpg"
//     },
//     {
//       "name": "Olivia Williams",
//       "imageSrc": "https://randomuser.me/api/portraits/women/3.jpg"
//     },
//     {
//       "name": "Noah Brown",
//       "imageSrc": "https://randomuser.me/api/portraits/men/4.jpg"
//     },
//     {
//       "name": "Sophia Davis",
//       "imageSrc": "https://randomuser.me/api/portraits/women/5.jpg"
//     },
//     {
//       "name": "James Miller",
//       "imageSrc": "https://randomuser.me/api/portraits/men/6.jpg"
//     },
//     {
//       "name": "Isabella Wilson",
//       "imageSrc": "https://randomuser.me/api/portraits/women/7.jpg"
//     },
//     {
//       "name": "Benjamin Moore",
//       "imageSrc": "https://randomuser.me/api/portraits/men/8.jpg"
//     },
//     {
//       "name": "Mia Taylor",
//       "imageSrc": "https://randomuser.me/api/portraits/women/9.jpg"
//     },
//     {
//       "name": "Lucas Anderson",
//       "imageSrc": "https://randomuser.me/api/portraits/men/10.jpg"
//     }
//   ]  

//   return (
//   <div>
//     {
//       People.map((item) => {
//         return <Card name={item.name} imgSrc={item.imageSrc}/>
//       })
//     } 
//   </div>
//   )
// }

// export default App


const App = () => {

  function ClickHandaler()
  {
    console.log("first")
  }
  
  return (
    <div>
      <button onClick={ClickHandaler}>Click me</button>
    </div>
  )
}

export default App
