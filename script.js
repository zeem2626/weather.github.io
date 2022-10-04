const icon = document.querySelector(".section2 .data1 img")
const temp = document.querySelector(".section2 .data1 .temp .value");
const condition = document.querySelector(".section2 .data1 .condition");
const time = document.querySelector(".section2 .data1 .time");
const feel_temp = document.querySelector(".section3 .data2 .feel_temp span");        
const humidity = document.querySelector(".section3 .data2 .humidity span");
const uv_index = document.querySelector(".section3 .data2 .uv_index span");
const visibility = document.querySelector(".section3 .data2 .visibility span");
const cloud = document.querySelector(".section3 .data2 .cloud span");
const wind_direction = document.querySelector(".section3 .data2 .wind_direction span");

const search_button = document.querySelector(".search input[type=\"submit\"]")
const search_input = document.querySelector(".search input[type=\"text\"]")
const region_information = document.querySelector(".region_information p")

const URL = "https://api.weatherapi.com/v1/current.json?key=6618d04c643d4cc39c6135432212512&q=jamshedpur&aqi=no"

const getPost = async (API)=>{
    const response = await fetch(API);
    if(response.ok){
        const data = await response.json();
        return data;    
    }
    else{
        const place = region_information.textContent;
        region_information.textContent = `${search_input.value} is not any Place`;
        setTimeout(()=>{
            region_information.textContent = place;
        },3*1000)
    }
}

// !!!!!!!!!!!!!!!!!!!  SEARCHING PLACE   !!!!!!!!!!!!!!!!!!!!!

search_button.addEventListener("click", function(e){
    e.preventDefault()

    if(search_input.value == ""){
        const save_region_detail = region_information.textContent;

        region_information.textContent = "Type a Place";
        
        setTimeout(()=>{
            region_information.textContent = save_region_detail;
        },1.5*1000)
    }
    
    else{     
        const URL2 = `https://api.weatherapi.com/v1/current.json?key=6618d04c643d4cc39c6135432212512&q=${search_input.value}&aqi=no`
        
        getPost(URL2).then(data=>{  

            search_input.value = "" 

            const iconLink = data.current.condition.icon;
            const icon_data = `https:${iconLink}`
            
            const temp_data = data.current.temp_c;
            
            const feel_temp_data = data.current.feelslike_c;
            
            const condition_data = data.current.condition.text;
            
            const uv_index_data = data.current.uv - 1 ;
            
            const city_data = data.location.name;
            
            const visible_data = data.current.vis_km;
            
            const cloud_data = data.current.cloud ;
            
            const humidity_data = data.current.humidity;
            
            const wind_direction_data = data.current.wind_dir;
            
            const country_data = data.location.country;
            
            icon.setAttribute("src", icon_data);
            temp.innerHTML = `${temp_data} `;
            feel_temp.innerHTML = `${feel_temp_data} &#176;C`;
            visibility.innerHTML = `${visible_data} Km`;
            condition.textContent = condition_data;
            uv_index.textContent = uv_index_data;
            humidity.textContent = `${humidity_data} %`;
            cloud.textContent = `${cloud_data} %`;
            wind_direction.textContent = wind_direction_data;
            region_information.textContent = `${city_data}, ${country_data}`;

        })
}
})

// !!!!!!!!!!!!!!!!!!!!!!!!!  DEFAULT PLACE JAMSHEDPUR  !!!!!!!!!!!!!!!!!

getPost(URL).then(data=>{  

    const iconLink = data.current.condition.icon;
    const icon_data = `https:${iconLink}`
    
    const temp_data = data.current.temp_c;
    
    const feel_temp_data = data.current.feelslike_c;
    
    const condition_data = data.current.condition.text;
    
    const uv_index_data = data.current.uv - 1;
    
    const country_data = data.location.country;
    
    const city_data = data.location.name;
    
    const visible_data = data.current.vis_km;
    
    const cloud_data = data.current.cloud;
    
    const humidity_data = data.current.humidity;
    
    const wind_direction_data = data.current.wind_dir;
    
    icon.setAttribute("src", icon_data);
    temp.innerHTML = `${temp_data} `;
    feel_temp.innerHTML = `${feel_temp_data} &#176;C`;
    visibility.innerHTML = `${visible_data} Km`;
    condition.textContent = condition_data;
    uv_index.textContent = uv_index_data;
    humidity.textContent = `${humidity_data} %`;
    cloud.textContent = `${cloud_data} %`;
    wind_direction.textContent = wind_direction_data;
    region_information.textContent = `${city_data}, ${country_data}`;
    
})