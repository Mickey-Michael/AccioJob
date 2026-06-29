import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <MainContent/>
      <Footer/>

      {Navbar()}
      {MainContent()}
      {Footer()}
      
    </>
  )
}


function Navbar()
{
  return (
    <nav>
      Mickey
    </nav>
  )
}

function MainContent()
{
  return (
    <main>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolore velit est, neque aut voluptatem exercitationem adipisci ullam, saepe repudiandae facere cumque repellendus mollitia tenetur! Soluta, quis nemo. Possimus, animi!
      Cum reiciendis similique itaque consequuntur dolorum quo voluptate cumque, incidunt libero quis debitis adipisci harum mollitia cupiditate omnis. Rem iusto nihil porro perferendis corporis quis culpa illum non ducimus eos?
      Fuga temporibus iusto, exercitationem, blanditiis ullam voluptas possimus saepe itaque quibusdam, amet nihil veniam nostrum facere consequatur velit voluptatum! Beatae voluptatum accusantium fugiat quia nostrum quas ut harum autem corrupti.
      Doloribus hic accusamus ipsum nam, temporibus harum modi dolorum, quia labore dolore expedita quas iste libero culpa tempora voluptatum alias atque quis facere perspiciatis quam voluptates eos amet. Quas, fugit.
    </main>
  )
}

function Footer()
{
  return (
    <footer>
      Singh
    </footer>
  )
}

export default App
