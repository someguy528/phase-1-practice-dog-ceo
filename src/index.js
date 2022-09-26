console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl).then(resp=>resp.json()).then(data =>{
    for(let dog of data.message){
        let dogImgs = document.getElementById('dog-image-container');
        let dogImg = document.createElement('img');
        dogImg.src = dog
        dogImgs.appendChild(dogImg)
    }
});
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
fetch(breedUrl).then(resp=>resp.json()).then(data=>{
    breeds = Object.keys(data.message)
    breeds.forEach(breed=>{
        let addBreed = function(breed){
            let dogBreeds = document.getElementById('dog-breeds');
            let dogBreed = document.createElement('li');
            dogBreed.textContent = breed;
            dogBreed.style.cursor = 'pointer'
            let dogBreedClickActive = false
            dogBreed.addEventListener('click', (e)=>{
                if (dogBreedClickActive === true){
                    e.target.style.color='#000000';
                    dogBreedClickActive = false}
                else if(dogBreedClickActive === false){
                    e.target.style.color = '#E93479';
                    dogBreedClickActive = true}
            },
            dogBreeds.appendChild(dogBreed)
        )}
        let breedDropdown = document.getElementById('breed-dropdown');
        let removeChildren = function(element) {
            let child = element.lastElementChild;
            while (child) {
              element.removeChild(child);
              child = element.lastElementChild;
            }
          };
        let updateBreedList = function(breeds){
            removeChildren(document.getElementById('dog-breeds')) ;
            breeds.forEach(breed => addBreed(breed));
        }
        breedDropdown.addEventListener('change', (e)=>{
            updateBreedList(breeds.filter(breed=> breed.startsWith(e.target.value))
            )
        })
    })
    console.log(breeds);
    // console.log(data);
    // for(let dog in data.message){
    //     // console.log(Object.keys(dog))
        // let dogBreeds = document.getElementById('dog-breeds');
        // let dogBreed = document.createElement('li');
    //     dogBreed.textContent = dog;
    //     let DogSubBreed = document.createElement('li');
    //     dogBreeds.appendChild(dogBreed);
    // }
})