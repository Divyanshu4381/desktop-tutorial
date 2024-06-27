console.log("lets start ........");

let currentSong = new Audio();                   // global varibale to -play music..ke liye 

async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/songs/");
  let response = await a.text();
                                                                                        //step:2

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);                           //this is for printing name in library 

    }
 
     
  }
  return songs;                                // ye ek promise return karega ..

}

// play music ..

const playMusic =(track)=>{

  
  currentSong.src = "/songs/"+track;                      //step5

  
  
  currentSong.play();                                             //ganaa baja 




}
//

async function main() {
  //get the lis of aal the songs 
  let songs = await getSongs();                     //isliye hamlogo ne ek main function banaya hai        //step:1
  console.log(songs);

  let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0];


  for (const song of songs) {                                                           //for printing songs   step:3
    songUl.innerHTML = songUl.innerHTML + `<li>  


                                                                                 
                            <img src="music.svg" alt="music-svg  " class="invert">
                          <div class="info">
                                
                                  <div>${song.replaceAll("%20", " ")} </div>                    
                                 
                                   

                                
            
                            </div>
                            <div class="playnow">
                               

                                <img class="invert" src="play.svg" alt="play">
                            </div>
                           
                       
     </li>`;

  }


  // attach an event listener to each song ...

   Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{               //list of songs of array return karge uslke andar ietrate karenge 
  e.addEventListener("click",(element=>{
    console.log(e.querySelector(".info").firstElementChild.innerHTML);                             // step:4
    playMusic(e.querySelector(".info").firstElementChild.innerHTML);             //hary bhai ne yha trim lagay hai 
                                                                                  //meri fule me trim karne ki zaroorat nhi pa 
  }))


   

 })

//  attach eventlistener to  play previous and next ..

play.addEventListener("click",(e)=>{
  if(currentSong.paused){
    
    


    

  

  }
  else{
    currentSong.pause();
    e.g
  }
})



  
}
 

main();






