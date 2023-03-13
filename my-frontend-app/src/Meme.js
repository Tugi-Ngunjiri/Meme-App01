import React from 'react'

export default function Meme(props) {

// using state
 const [appData, setAppData] = React.useState({
   enterfirstline:"hi",
   entersecondline:"hi",
   
memepicture:"https://winter-meteor-106655.postman.co/workspace/adc1b0b2-5820-4ca6-8985-5c4a607c4a0c/api/ed477c69-d666-40e7-97a0-c2d6cd8af0ca/definition/d1bb234f-cb5b-4099-a459-5336a899b425/file/d1bb234f-cb5b-4099-a459-5336a899b425",

 })

// using [Api ImgFlip]
// We are using so its a sideefect need useEffect
 // We need a state to store the data

const [newMemeData,setNewMemeData] = React.useState([])
 React.useEffect(() =>{
  //append point

 fetch("https://winter-meteor-106655.postman.co/workspace/adc1b0b2-5820-4ca6-8985-5c4a607c4a0c/api/ed477c69-d666-40e7-97a0-c2d6cd8af0ca/definition/d1bb234f-cb5b-4099-a459-5336a899b425/file/d1bb234f-cb5b-4099-a459-5336a899b425")
 .then(response => response.json())
 .then((memeData) => setNewMemeData(memeData.data.memes))
})



function getNewMeme(){
 const randomNumber = Math.floor(Math.random(1) *newMemeData.length )
const url = newMemeData[randomNumber].url
console.log(url);
setAppData((prevdata) => {
  return {
    ...prevdata,
    memepicture: url
  }
})
}

function enterline(event){
 setAppData(prevAppData => {
  return ({
    ...prevAppData,
    [event.target.name]: event.target.value
  })

 })

}
 console.log(appData);

return (
    <div className="meme-container">
      <nav className="navbar">
        <img className="memeLOGO" src={props.memeLOGO} alt="memeLOGO" />
        <p className="title">Meme Generator</p>
      </nav>

      <div className="input-field" >
        <input type="text" placeholder="Enter the first line ..." name="firstline" onchange={enterline} value={appData.firstline} />
       <input type="text" placeholder="Enter the second line ..." name="secondline" onchange={enterline} value ={appData.secondline} />
  </div>
   <button className="generateBTN" onClick={getNewMeme}> 
   Generate a new Meme</button>
 <img className="imageMEME"  src= {appData.memepicture} alt="randomMeme" />
 </div>
  )
} 