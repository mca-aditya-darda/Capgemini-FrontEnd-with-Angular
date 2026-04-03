async function getData() {
  let data = await fetch("https://api.escuelajs.co/api/v1/products");
  console.log(data);

  let d = await data.json();
  console.log(d);
}

getData();
