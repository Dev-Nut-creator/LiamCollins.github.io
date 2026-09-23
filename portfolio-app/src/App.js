// import logo from './logo.svg';
import linus from './assets/Linus.png';

import './App.css';

export function Button()
{
  return <button>Im A Button</button>
}

export function Profile()
{
  return <img className = "ProfilePicture" src = {linus} alt = "linus" width = {300} height = {400}></img>;
}  


export function AboutMe()
{
  return(
  <>
  <h1 className = "MainHeader"> About Me</h1>
    <p>Hello There. i am liam</p>
  </>
  );
}


function App() {
  return (
    <div className="App">
        <Profile/>      
      <section>
          <h1 >Liam Collins</h1>
            <Button/>
      </section>


    <section>
      <AboutMe/>
    </section>

    </div>
  );
}

export default App;
