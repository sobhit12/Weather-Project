const city_name=document.getElementById('city_name');

const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
        if(cityVal===""){
        city_name.innerText=`Please Write Name before Search`;
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1c9c71d240cd8ff042512409c4d5d8a9`;
            const response=await fetch(url);
          
            const data= await response.json();
            console.log(data);
            const arrData=[data];
          
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            
            
            temp_status.innerText=arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;
            // console.log(tempMood);
//             //condition to check sunny or cloudy:
if(tempMood=="Clear"){
    temp_status.innerHTML=
    "<i class='fas fa-sun' style='color:#eccc68 ; '></i>";
}
else if(tempMood=="Clouds"){
    temp_status.innerHTML="<i class='fas fa-cloud-moon' style='color:white'>";
}
else if(tempMood=="Rain"){
    temp_status.innerHTML="<i class='fas fa-cloud-rain' style=''></i>";
}else{
    temp_status.innerHTML="<i class='fas fa-cloud ' style='color:#eccc68;'></i>";
}
        }
        catch{
            city_name.innerText=`Please enter the city name Properly`;
        }
    
    

    }
   
   
}
submitBtn.addEventListener('click',getInfo);