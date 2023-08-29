const loadMap = async (text, isShow) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShow)
}


const displayPhone = (phones, isShow) => {


    const aboutdiv = document.getElementById('conatiner')
    aboutdiv.textContent = ''
    const showbutton = document.getElementById('showall')
    if (phones.length > 10 && !isShow) {

        showbutton.classList.remove('hidden')
    } else {
        showbutton.classList.add('hidden')
    }

    console.log(isShow)
    if (!isShow) {
        phones = phones.slice(0, 10)
    }



    phones.forEach(phone => {

        const newcreate = document.createElement('div');
        newcreate.classList = 'card w-72 bg-yellow-100 shadow-xl'
        newcreate.innerHTML = `

     <figure><img src="${phone.image}" alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">${phone.phone_name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                        <button onclick="loadMap()" class="btn btn-primary">Explore</button>
                                    </div>
                                </div>

        `;
        aboutdiv.appendChild(newcreate);

    })

    loadingInput(false);

}


const inputButton = (isShow) => {
    const field = document.getElementById('input')
    const values = field.value;
    console.log(values);
    loadingInput(true);
    loadMap(values, isShow)
}



const showallbtn = () => {
    inputButton(true)
}


const loadingInput = (isLoading) => {
    const element = document.getElementById('spinerLoading');
    if (isLoading) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    }
}


const Explore = async (id) => {
    console.log('show me', id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json()
    const phone = data.data
    ShowDetails(phone)
}

const ShowDetails = (phone) => {
    console.log(phone);
    const modal = document.getElementById('heading')
    modal.innerText = phone.name

    const module = document.getElementById('module_detail');

    module.innerHTML = `
    <img src ="${phone.image}" class="user">   
    <p class="font-bold mt-5"><span> Stroage : ${phone.mainFeatures.storage} </span></p>
    <p class="font-bold"><span> Dispaly-size : ${phone.mainFeatures.displaySize} </span></p>
    <p class="font-bold"><span> Chipset : ${phone?.mainFeatures?.chipSet} </span></p>
    <p class="font-bold"><span> Memory : ${phone.mainFeatures.memory} </span></p>
    <p class="font-bold"><span> slug : ${phone.slug} </span></p>
    <p class="font-bold"><span> Release data : ${phone.releaseDate} </span></p>
    <p class="font-bold"><span> Brand : ${phone.brand} </span></p>
    <p class="font-bold"><span> GPS : ${phone?.others?.GPS || 'no gps avaliable'} </span></p>
    
    `




    section_my_modal.showModal()
}

// loadMap()