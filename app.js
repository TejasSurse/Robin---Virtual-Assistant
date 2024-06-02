
// Robin setUp 
// We are using browser local storage https://www.w3schools.com/jsref/prop_win_localstorage.asp
// in browser we  can go in application -> in the console and then we can see local storage and session stoorage we can save data in it ans session storage 

// make widndow small
const bLevel = document.querySelector("#battery");
const netStatus = document.querySelector("#internet");
const Time = document.querySelector("#Time");
navigator.getBattery().then(function(battery) {

     bLevel.innerHTML = `${battery.level*100} %`;

    
});

if(window.navigator.onLine == true){
    netStatus.innerHTML = "Online";
}else{
    netStatus.innerHTML = "Offline";
}

const uname = document.querySelector(".MyName2");


let Today = new Date();
let hours = Today.getHours();
let miniuts = Today.getMinutes();

Time.innerHTML = `${hours} : ${miniuts}`;


// userinfo func
function userInfo(){
    let setInfo = {
        name: setUp.querySelectorAll("input")[0].value,
        Github :  setUp.querySelectorAll("input")[1].value,
        Linkedin :  setUp.querySelectorAll("input")[2].value,
        Instagram :  setUp.querySelectorAll("input")[3].value,
        Location :  setUp.querySelectorAll("input")[4].value,
    }
    let testingArray = [];
    setUp.querySelectorAll("input").forEach((e)=>{
        testingArray.push(e.value);
    });
    if(testingArray.includes("")){
        readOut("Please Enter Your Complete Information ");
    }else{
        localStorage.clear();
        localStorage.setItem("ronbin_setUp",JSON.stringify(setInfo));
        setUp.style.display = "none";
        
    }
    
    console.log("Information is saved in Localstorage ")
    

}
function setName(){
    uname.innerHTML = `Hello ${setUp.querySelectorAll("input")[0].value} I am Your Virtual Assistant Robin`
}
// robin info setup 
const setUp = document.querySelector(".ronbin_setUp");
const suB = document.querySelector(".sub");
setUp.style.display = "none";
if(localStorage.getItem("ronbin_setUp") === null){
    setUp.style.display = "block";
    suB.addEventListener("click", userInfo, setName);

}

let userData = localStorage.getItem("ronbin_setUp");
weather(`${JSON.parse(userData).Location}`)

// buttons 
const startBtn = document.querySelector("#start");
//const stopBtn = document.querySelector("#stop");
//const speakbtn = document.querySelector("#speak")
// Speech Recognition 

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition(); // variable to create new speech recognization


// For contineous Recognization we use 
recognition.continuous = true;

// traking what wr are speaking;
recognition.onresult = function(event){
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    console.log(`My words -> ${transcript}`);
    // transcript is important for further exectuion
    transcript = transcript.toLowerCase();
    let userData = localStorage.getItem("ronbin_setUp");
    // we have to lowercase all transcript

    if(transcript.includes("hey robin")){
        readOut("Hi Sir");
    }
    // Google
    if(transcript.includes("open google")){
        readOut("Opening Google Sir");
        window.open("https://www.google.com/")
    }
    if(transcript.includes("search for")){
        readOut("Ok Bosss");
        let input = transcript.split("");// split = seperates each word with "whatever in this"
        input.splice(0,11);// splice removes all the occerences of 0 to < 11
        input.pop();// = To remove last dot;
        input = input.join("").split(" ").join("+");// seperating form space and adding by join
        window.open(`https://www.google.com/search?q=${input}`);
        

    }
    // vr stop
    if(transcript.includes("stop")){
        readOut("Voice Recognization is Stop");
        recognition.stop();
    }


    // Youtube
    if(transcript.includes("open youtube")){
        readOut("Opening Youtube Sir");
        window.open("https://www.youtube.com/")
    }
    if(transcript.includes("search for youtube")){
        readOut("Ok Bosss");
        let input = transcript.split("");// split = seperates each word with "whatever in this"
        input.splice(0,19);// splice removes all the occerences of 0 to < 11
        input.pop();// = To remove last dot;
        input = input.join("").split(" ").join("+");// seperating form space and adding by join
        window.open(`https://www.youtube.com/results?search_query=${input}`);
        console.log(input);

    }
    if(transcript.includes("open my github")){
        readOut("Opening github profile");
        window.open(`${JSON.parse(userData).Github}`);
    }
    if(transcript.includes("open my linkedin")){
        readOut("Opening Linkedin Profile");
        window.open(`${JSON.parse(userData).Linkedin}`)
    }
    if(transcript.includes("open my instagram")){
        readOut("Opening Instagram Profile");
        window.open(`${JSON.parse(userData).Instagram}`)
    }
    if(transcript.includes("open sheet")){
        readOut("Opening Google Spread Sheet");
        window.open(`https://docs.google.com/spreadsheets/`);
        readOut("Login and Start Working Good Luck ");
    }
    if(transcript.includes("calculator")){
        readOut("");
        window.open('Calcularor:///');
        
    }
    if(transcript.includes("news technology")){
        readOut("Here are todays latest technology news ");
        window.open("https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen");
    }
    if(transcript.includes("news politics")){
        readOut("todays political news ");
        window.open("https://www.lokmat.com/topics/politics/")
    }
    if(transcript.includes("latest news" || "todays news")){
        readOut("Here are todays news ");
        window.open("https://timesofindia.indiatimes.com/news");
    }
    if(transcript.includes("open gemini")){
        readOut("opening Google's gemini ai chatbot");
        window.open("https://gemini.google.com/?hl=en");
        readOut("you have to signin to use gemini");
    }
    if(transcript.includes("open chatgpt")){
        readOut("Opening OpenAi's chatgpt");
        window.open("https://chatgpt.com/")
    }
    if(transcript.includes("generate")){
        readOut("See Ai Generated answer of your Question ");
        let input = transcript.split("");// split = seperates each word with "whatever in this"
        //https://www.bing.com/search?q=write+programm+to+sum+all+even+numbers+from+1+to+100
        input.splice(0,9);// splice removes all the occerences of 0 to < 11
        input.pop();// = To remove last dot;
        input = input.join("").split(" ").join("+");// seperating form space and adding by join
        window.open(`https://www.bing.com/search?q=${input}`);
        readOut("here is Your Ai generated answer and also revalent websites")
        console.log(input);
    }
    if(transcript.includes("show commands")){
        window.open("file:///D:/Code/Projects/Virtual%20Asistant/commands.html");
        readOut("here are all commands ");
    }
    if(transcript.includes("back to robin")){
        window.open("http://127.0.0.1:5500/index.html");

    }
    if(transcript.includes("make me small")){
        Minimize();
    }
    if(transcript.includes("open my weather app")){
        window.open("https://tejassurse.github.io/Weather-APP/");
        readOut("Here is your weather app search city name to get weather ");
    }
    if(transcript.includes("play memory game")){
        window.open("https://tejassurse.github.io/Simon-Game/");
        readOut("here is your memory game try to reach heigh level ")
    }

    
}
startBtn.addEventListener("click" ,()=>{
    recognition.start();
});
// sr start 
recognition.onstart =  function(){
    console.log("Hello Sir");

}

//sr end
recognition.onend = function(){
    console.log("Vr deactive");
}



//stopBtn.addEventListener("click", ()=>{
  //  recognition.stop();
//});


// For Robin speak
function readOut(message){
    // api for speech -new SpeechSynthesisUtterance();
    const speech = new SpeechSynthesisUtterance();

    // getting different voices 
    const allVoices = speechSynthesis.getVoices();
    speech.voice = allVoices[2];
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech); // To Speak 
    console.log("Speaking Out");
}

//speakbtn.addEventListener("click", ()=>{
  //  let message = "Gauri";
   // readOut(message);
//});

window.onload = function(){
    readOut("Hello, I am Your Virtual Assistant Robin ");
}


// Weather SetUP
const minT = document.querySelector("#minT");
const maxT = document.querySelector("#maxT");
const pressure = document.querySelector("#pressure");
const Humidity = document.querySelector("#Humidity");
const WindSpeed = document.querySelector("#WindSpeed"); 
const weatherImg = document.querySelector("#img");
const cityName = document.querySelector("#location");

const weatherT = document.querySelector("#weatherT");
const weatherD = document.querySelector("#weatherD");
const oTemp = document.querySelector("#oTemp");
const feellikeTemp = document.querySelector("#feelsLikeTemp");

function weather(location) {
    let loc = location;
    const apiKey = '0af979fdc28f0ea1eb074f789a5a8735';
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            cityName.innerHTML = `Location : ${data.name}`; 
            weatherT.innerHTML = `Weather type : ${data.weather[0].main}`;
            weatherD.innerHTML = `Weather description : ${data.weather[0].description}`;
            weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            oTemp.innerHTML = `Original Temperature : ${data.main.temp}`;
            Humidity.innerHTML = `Humidity = ${data.main.humidity}`;
            minT.innerHTML = `Min Temp = ${data.main.temp_min}`
            maxT.innerHTML = `Max Temp = ${data.main.temp_max}`
            WindSpeed.innerHTML =  `Wind Speed = ${data.wind.speed}`
           // feellikeTemp.innerHTML = `Feel like temp = ${data.main.feels_like}`;
          //document.querySelector(".searchBox").classList.add("onSearch");
            // document.querySelector(".content").classList.add("onContent");
            // console.log(data);

        } else {
            alert('Some error occured');
        }
    }

    xhr.send();
}






