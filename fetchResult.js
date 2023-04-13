async function dataFetch() {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await fetchData.json();
    console.log(data);
  }
  
  dataFetch();