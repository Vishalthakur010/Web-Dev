const userTab=document.querySelector("[data-userWeather]")
const searchTab=document.querySelector("[data-searchWeather]")
const userContainer=document.querySelector(".weather-container")

const grantAccesscontainer=document.querySelector(".grant-location-container")
const searchForm=document.querySelector("[data-searchForm]")
const loadingScreen=document.querySelector(".loading-container")
const errorScreen=document.querySelector(".error-container")
const userInfoContainer=document.querySelector(".user-info-container")

const API_KEY= "29024bd942cb3ead742a39c33fd8f109";
let currentTab=userTab
currentTab.classList.add("current-Tab")

//function for switching tabs
function switchTab(clickedTab){
    if(currentTab != clickedTab){
        currentTab.classList.remove("current-Tab")
        currentTab=clickedTab
        currentTab.classList.add("current-Tab")

        //if search form container is invisible then make it visible
        if(!searchForm.classList.contains("active")){
            grantAccesscontainer.classList.remove("active")
            userInfoContainer.classList.remove("active")
            searchForm.classList.add("active")
        }
        else{
            // First it was on search tab now switched to your weather tab
            searchForm.classList.remove("active")
            userInfoContainer.classList.remove("active")
            //now i am in your weather tab so i have to display weather also, so let's check local storage first for coordinates if we have them there
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", ()=>{
    switchTab(userTab);
})
searchTab.addEventListener("click", ()=>{
    switchTab(searchTab);
})

// check if coordinates are already present in session storage
function getfromSessionStorage(){
    const localCoordinates=sessionStorage.getItem("user-coordinates")

    // if coordinates are not available then visible grant location
    if(!localCoordinates){
        grantAccesscontainer.classList.add("active")
    }
    else{
        // converting json string into js object
        const coordinates=JSON.parse(localCoordinates)
        fetchuserWeatherInfo(coordinates)
    }
    
}

//latitude and longitude passes through this function
async function fetchuserWeatherInfo(coordinates){
    const {lat,lon}=coordinates
    // make grantaccess container invisible
    grantAccesscontainer.classList.remove("active")
    // make loading screen visible
    loadingScreen.classList.add("active")

    //API call
    try{
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        const data=await response.json()

        loadingScreen.classList.remove("active")
        userInfoContainer.classList.add("active")
        renderweatherinfo(data)
    }
    catch(err){
        loadingScreen.classList.remove("active")
        console.log("Failed to fetch weather information :", err)
        alert("Unable to fetch weather information. Please check your internet connection or try again later.");
    }
}

// for rendering the data on the UI
function renderweatherinfo(weatherInfo){
    //first fetch the elements
    const cityName=document.querySelector("[data-cityName]")
    const countryIcon=document.querySelector("[data-countryIcon]")
    const desc=document.querySelector("[data-weatherDesc]")
    const weatherIcon=document.querySelector("[data-weatherIcon]")
    const temp=document.querySelector("[data-temp]")
    const windSpeed=document.querySelector("[data-windSpeed]")
    const humidity=document.querySelector("[data-humidity]")
    const cloudiness=document.querySelector("[data-cloudiness]")

    //fetching values from weatherInfo object and put it in UI element
    cityName.innerText=weatherInfo?.name
    countryIcon.src= `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png` 
    desc.innerText=weatherInfo?.weather?.[0]?.description
    weatherIcon.src=`https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`
    temp.innerText=`${weatherInfo?.main?.temp} °C`
    windSpeed.innerText=`${weatherInfo?.wind?.speed} m/s`
    humidity.innerText=`${weatherInfo?.main?.humidity} %`
    cloudiness.innerText=`${weatherInfo?.clouds?.all } %`
}

//click on grant Access button
const grantAccessbutton=document.querySelector("[data-grantAccess]")
grantAccessbutton.addEventListener("click",getLocation)

//get current location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition)
    }
    else{
        console.log("Geolocation not supported");
    }
}
function showposition(position){
    const usercoordinates={
        lat:position.coords.latitude,
        lon:position.coords.longitude
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(usercoordinates))
    fetchuserWeatherInfo(usercoordinates)
}


//search weather by city
const searchInput=document.querySelector("[data-searchInput]")

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault() // Prevents the default form submission behavior.
    let cityName=searchInput.value

    if(cityName === "")
        return
    else{
        fetchSearchWeatherInfo(cityName)
    }
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active")
    userInfoContainer.classList.remove("active")
    grantAccesscontainer.classList.remove("active")
    errorScreen.classList.remove("active")

    try{
        const response=await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        const data=await response.json()

        if (!response.ok) {
            loadingScreen.classList.remove("active")
            errorScreen.classList.add("active")
            return
        }

        errorScreen.classList.remove("active")
        loadingScreen.classList.remove("active")
        userInfoContainer.classList.add("active")
        renderweatherinfo(data)
    }
    catch(err){
        errorScreen.classList.add("active")
        loadingScreen.classList.remove("active")
        console.log("failed to fetch weather information :", err)
        alert("Unable to fetch weather information for the city. Please check the city name or try again later.");
    }
}