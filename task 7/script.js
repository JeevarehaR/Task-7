let xhr  = new XMLHttpRequest();
xhr.open('GET',"https://restcountries.com/v3.1/all")

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        let  data = JSON.parse(this.response);
        let AsianCountries = data.filter(d=>d.region=='Asia').map(d=>{return d.name});
        console.log(AsianCountries);
        let population = data.filter(d=>d.population < 200000).map(d=>{return d.name});
        console.log(population);
        data.forEach(element => {
            console.log(element.name);
            console.log(element.capital);
            console.log(element.flag);
        });
        let Totalpopulation = data.filter(d=>d.population).reduce(function(prev,current){
            return prev+current.population;
        },0);
        console.log("Total Population :" + Totalpopulation);
        //let USdollars = data.filter((d)=>(d.currencies.name === "United States dollar"));
        //onsole.log(USdollars);
        //let answer = data.filter((dummy) => (dummy.currencies !== undefined))
        //let realanswer = answer.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
        //console.log(realanswer)
        let answer = data.filter((dummy) => (dummy.currencies !== undefined))
        console.log(answer.length)
        let USdollars = answer.filter((data) =>  {
        for (let key in data.currencies) {
            if(data.currencies[key].name === "United States dollar"){
                return data
            }
        }
        })
        console.log(USdollars.length, USdollars[0].currencies)

    }
}
xhr.send();