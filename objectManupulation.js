
 const getData = async() =>{
 try {
    let fetchData = await fetch('https://fakestoreapi.com/products')
     const dataJson = await fetchData.json();
     return dataJson;
 } catch (error) {
    
 }
 }

async function dataManupulation () {
 cloudData1 = await getData().then(
    data =>            
     {
        // const findData = data.find((obj) => obj.id === 1)
        //  const mappedData =data.map((obj) => obj.id = obj.id *10)     
        //  const filteredData = data.filter((obj) => obj.id ===20)

        const reducedData = data.reduce((acc, curVal) => (
             acc + curVal.price 
        ), 0)

         console.log(reducedData)

 }).catch(err => err)

}
dataManupulation()

//  const cloudData = getData().then( reslut => console.log(reslut)) // I am getting data in this line [I think promise is resolve, right?]

