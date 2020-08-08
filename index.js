let publicKey = '999461d77180e38f9ab13d41927a2d5b';
let privateKey = '59b7a43b148c2d7b4203a3d176324c2a47ab78ee';
let apiURL = 'https://gateway.marvel.com:443/v1/public/characters';

let key = marvelKey(privateKey, publicKey);
console.log(key);

let fullURL = `${apiURL}?${key}`;
let data1 ='';

async function getDataCharacter() {
    let data = await fetch(fullURL);
    let dataJSON = await data.json();
    let results = dataJSON.data.results
    console.log(results);



    for (i = 0; i < results.length; i++) {
        let name = results[i].name
        let available = results[i].comics.available
        let path = results[i].thumbnail.path
        let extension = results[i].thumbnail.extension
        console.log(name, path + '.' + extension, available);

        data1 += `
        <div class="character">
             <img src="${path + '.' + extension}" alt="">
             <h5> Name : ${name}</h5>
             <h6> Comic : ${available}</h6>
         </div>`
    }
    console.log(data1);
    $('#root').html(data1)
}


getDataCharacter();
