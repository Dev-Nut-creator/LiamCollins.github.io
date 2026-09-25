// import logo from './logo.svg';
import linus from './assets/Linus.png';
import homer from './assets/homer.gif';
import egg from './assets/egg.png'


import './App.css';

import { useState  } from 'react';

export function Button({name, func, className})
{
  return <button className={className} onClick= {func}>{name}</button>
}

export function ImageButton({name,func,className,imageClassName,image,alt})
{
  return( 
    <div>
    <button className={className} onClick= {func}>
      <img className={imageClassName} src = {image} alt= {alt} ></img>
      <p className='ProjectButtonText'>{name}</p>
    </button>
    </div>
  );
}



export function Image({className,resource,altName})
{
  return <img className={className} src = {resource} alt = {altName}/>;
}  



export function AboutMe()
{
  //write about me page here
  return(
    <div className='AboutMeSection'>
        {/* create the container for the about me section*/}
        <section className ='SquareContainer'>


        </section>
    </div>
  );

}



export function NuttyEngine()
{
  return(
    <>
    </>


  );

}

export function DES315()
{
  return(
    <>
    </>
  );

}

export function DownloadCV()
{


}

export function AllProjects()
{


}


function App() {
  // //make various states for each element that can be conditionally rendered
  const [aboutMeOpen, SetAboutMeOpen] = useState(false);
  const [EngineProjectOpen, SetEngineProjectOpen] = useState(false);
  const [DES315ProjectOpen, SetDES315ProjectOpen] = useState(false);

  



  return (
    <div>
        <section className='ProjectGifSection'>
          <Image className= 'ProjectGifContainer' resource={homer} altName='homer'/>
        </section>
        <section className='ProfileSection'>
          <Image className = 'ProfileContainer' resource = {linus} altName = 'Linus'/>      
        </section>
        {/* //render about me page if about me button clicked  */}
        <section className='AboutMeButtonContainer'>
            <Button className =  "AboutMeButton" name = "About Me" func = {() => SetAboutMeOpen(!aboutMeOpen)}/> 
        </section>
          {aboutMeOpen && <AboutMe/>}

        <section className = 'NavBarSection'>

            <Button className =  "NavBarButton" name = "Donwload CV" func = {() => DownloadCV()}/> 

            <Button className =  "NavBarButton" name = "AllProjects" func = {() => AllProjects()}/> 



        </section>


        <section className='ProjectSection'>
          {/* create buttons that hold a gif to each project and each of their own sections for showing text*/}
          <ImageButton className='NuttyEngineProject' name = 'NuttyEngine' func = {() =>SetEngineProjectOpen(!EngineProjectOpen)} image={egg} imageClassName='ProjectButtonImage' alt = 'NuttyEngine'/>
            {EngineProjectOpen && <NuttyEngine/>}
          
          <ImageButton className='DES315Project' name = 'DES315' func = {() =>SetDES315ProjectOpen(!DES315ProjectOpen)} image={egg} imageClassName='ProjectButtonImage' alt = 'DES315' />
            {DES315ProjectOpen && <DES315/>}
        </section>




    </div>



  

  );
}

export default App;
