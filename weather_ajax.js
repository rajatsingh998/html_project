// $(document).ready(function(){
//         $("#details").click(function(){
//             var city=$("#name").val();
//             if(city.length<1){
//                 alert("Enter Input");
//                 return false;
//             }
//              $.ajax({
//                  url:"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +"&APPID=e1302436dd9710aa6c20c3433ac5c1a0",
//                  type: "GET",
//                  datatType: "jasonp",
//                  success: function(data){
//                      document.getElementById("solution").innerHTML=data.main.temp;
//                  }
//              })
//         })
// });

function loadTemp(){
let city=document.getElementById("name").value;
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +"&APPID=e1302436dd9710aa6c20c3433ac5c1a0")
.then(data=>data.json()).then(function(data){
                document.getElementById("Temprature_val").innerHTML=data.main.temp;
                document.getElementById("Pressure_val").innerHTML=data.main.pressure;
                document.getElementById("Humidity_val").innerHTML=data.main.humidity;
}).catch(err=> document.getElementById("error-message").innerHTML="Enter Input In Right Format");

}
