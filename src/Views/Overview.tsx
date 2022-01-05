function Overview() {
    fetch("https://random-data-api.com/api/beer/random_beer").then((result)=>{
        result.json().then((data)=>{
            console.log(data)})
    });
    return (<div>Overview</div>)
}
export default Overview