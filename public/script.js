const url = "https://api.collectapi.com/book/newBook";
const headers = {
  "content-type": "application/json",
  "authorization": "apikey key_buraya",
};



async function veri() {
  try {
    const response = await fetch(url, { headers });
    const data = await response.json();

    // console.log(data);

    data.result.forEach(kitap => {
        // console.log(kitap.title);
        const cards = document.createElement("div");
        document.getElementById("kitap").appendChild(cards); 
        
        const title = document.createElement("h1");
        title.innerHTML = kitap.title;
        cards.appendChild(title);

        const yazar = document.createElement("h2");
        yazar.innerHTML = kitap.yazar;
        cards.appendChild(yazar);

        const yayin = document.createElement("h2");
        yayin.innerHTML = kitap.yayin;
        cards.appendChild(yayin);

        const fiyat = document.createElement("h2");
        fiyat.innerHTML = kitap.fiyat;
        cards.appendChild(fiyat);

        const indirim = document.createElement("h2");
        indirim.innerHTML = kitap.indirim;
        cards.appendChild(indirim);

        const image = document.createElement("img");
        image.src = kitap.image;
        cards.appendChild(image);
    });
    

  } catch (error) {
    console.log(error);
  }
}

veri();
