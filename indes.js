const loadMap = async (text, isShow) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
    const data = await res.json();
    const phones = data.data;

    // console.log(phones)
    raodMap(phones, isShow)
}


const raodMap = (phones, isShow) => {
    const element = document.getElementById('conatiner');
    element.textContent = '';
    const lastb = document.getElementById('last')
    if (phones.length > 12) {

        lastb.classList.remove('hidden')

    } else {
        lastb.classList.add('hidden')

    }

    if (!isShow) {

        phones = phones.slice(0, 12)

    }


    phones.forEach(phone => {

        const createElements = document.createElement('div');
        createElements.classList = 'card w-72 bg-base-100 shadow-xl'
        createElements.innerHTML = ` 
          <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p class=font-bold> ${phone.slug}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div> `

        element.appendChild(createElements)

    });
    loadingInput(false);

}


const handclick = (isShow) => {
    const device = document.getElementById('input');
    const values = device.value;
    console.log(values);
    loadingInput(true);
    loadMap(values, isShow)
}

const lastBtn = () => {
    handclick(true)

}


const loadingInput = (isLoading) => {
    const loading = document.getElementById('spam');

    if (isLoading) {
        loading.classList.remove('hidden')
    } else {
        loading.classList.add('hidden')
    }
}





// loadMap()