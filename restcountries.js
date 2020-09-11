
fetch("https://restcountries.eu/rest/v2/all")
.then(function(result)
{
    return result.json();
}).then(function(data)
    {

        for(var i=0;i<3;i++)
        {
            if(i==0)
            {
                document.getElementById("fh").innerHTML=data[i].name;
                document.getElementById("fcapital").innerHTML="Capital: "+data[i].capital;
                document.getElementById("fregion").innerHTML="Region: "+data[i].region;
                document.getElementById("fcode").innerHTML="Country Code: "+data[i].alpha3Code;
                var ffimag=document.getElementById("fimg");
                ffimag.src=data[i].flag;

            }
            else if(i==1)
            {          
                document.getElementById("sh").innerHTML=data[i].name;      
                document.getElementById("scapital").innerHTML="Capital: "+data[i].capital;
                document.getElementById("sregion").innerHTML="Region: "+data[i].region;
                document.getElementById("scode").innerHTML="Country Code: "+data[i].alpha3Code;
                var sfimag=document.getElementById("simg");
                sfimag.src=data[i].flag;
            }
            else{
                document.getElementById("th").innerHTML=data[i].name;
                document.getElementById("tcapital").innerHTML="Capital: "+data[i].capital;
                document.getElementById("tregion").innerHTML="Region: "+data[i].region;
                document.getElementById("tcode").innerHTML="Country Code: "+data[i].alpha3Code;
                var tfimag=document.getElementById("timg");
                tfimag.src=data[i].flag;
            }
            
        }
    }
).catch(function(error)
{
    console.log(error)
})


var weather=function(data){
    var idvalue=document.getElementById(data).innerHTML;
    var actualvalue=idvalue.length;
    actualvalue=idvalue.slice(9,actualvalue);
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+actualvalue+"&appid=87537b8fd879289d8397daabde83d6a3")
    .then(function(result)
    {
        return result.json();
    }).then(function(data)
        {
            document.getElementById("newhead").innerHTML="Weather Report"
        

        
            var weatherdata=data.weather[0];
        document.getElementById("desc").innerHTML="Description:  "+ weatherdata.description
        document.getElementById("icon").innerHTML="Icon:  "+ weatherdata.icon
        document.getElementById("ident").innerHTML="Id:  "+ weatherdata.id
        document.getElementById("main").innerHTML="Main:  "+ weatherdata.main
            
            
    
        }
    
    ).catch(function(error)
    {
        console.log(error)
    })
}

