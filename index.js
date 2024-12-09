console.log("-----welcome in JS-----")
const apiKey = "30da20a5816341658f682fe41a687a12";

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=30da20a5816341658f682fe41a687a12";


     async function fetchData (){
        try{
        const response = await fetch(url)
        const data = await response.json() ;
        console.log("data");
        //select element:
        const container = document.getElementById
        ("container");
        for (let i = 0; i< data.articles.length; i++){
            const value = data?.articles[i];
            const h2 = <div>
                <h2>${value.title}</h2>
                <h2>${value.author}</h2>
                </div>;
                container.innerHTML +=h2;
        }
    } catch (error){
        console.log("---- error-----:",error.message);
    }
    }
