console.log('%c HI', 'color: firebrick')
const breedContainer = document.querySelector('#dog-breeds')
const dropdown = document.querySelector('#breed-dropdown')

fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((resp) => resp.json())
    .then((images) => {
        images.message.forEach(image => {
            const img = document.createElement('img')
            img.src = image
            const imgContainer = document.querySelector('#dog-image-container')
            imgContainer.appendChild(img)
        });
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        const breedArray = Object.keys(data.message)
        let dropdownValue = 'a'
        dropdown.addEventListener('change', (e) => {
            dropdownValue = e.target.value
            let filterBreedArray = breedArray.filter(dog => dog.startsWith(dropdownValue))
            breedContainer.textContent = ''
            filterBreedArray.forEach(breed => {
            const breedLi = document.createElement('li')
            breedLi.innerText = breed
            breedContainer.appendChild(breedLi)
            breedLi.addEventListener('click', () => {
                breedLi.style.color = 'purple'
            })
        })
        })
        let filterBreedArray = breedArray.filter(dog => dog.startsWith(dropdownValue))
        filterBreedArray.forEach(breed => {
            const breedLi = document.createElement('li')
            breedLi.innerText = breed
            breedContainer.appendChild(breedLi)
            breedLi.addEventListener('click', () => {
                breedLi.style.color = 'purple'
            })
        })
    })







