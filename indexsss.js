const loadMood = async (text, show) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
    const data = await res.json();
    const phones = data.data
    newCardadd(phones, show)
}

const newCardadd = (phones, show) => {

    const containers = document.getElementById('container');
    containers.textContent = '';

    const showbtn = document.getElementById('show');
    if (phones.length > 12) {
        showbtn.classList.remove('hidden')
    } else {
        showbtn.classList.add('hidden')
    }
    if (!show) {

        phones = phones.slice(0, 12)
    }



    phones.forEach(phone => {
        const creatData = document.createElement('div');
        creatData.classList = 'card w-72 bg-base-100 shadow-xl'
        creatData.innerHTML = ` 
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                    <p class="font-bold text-center"> $999 </p>
                    <div class="card-actions justify-center">
                        <button onclick ="handleButton('${phone.slug}')" class="btn btn-primary">Show Details</button>
                    </div>
                </div>`
        containers.appendChild(creatData);


    });
    loading(false)
}

const handleButton = async (id) => {

    console.log(id)

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data
    moduleBtn(phone)

}

const moduleBtn = (phone) => {




    const lastModule = document.getElementById('last');
    lastModule.innerHTML = `
    <img src="${phone.image}" class="user">
   <h2 class=font-bold> ${phone.name} </h2>
   <p class=font-bold>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
   <h2 class=font-bold> Storage : ${phone.mainFeatures.storage} </h2>
   <h2 class=font-bold> Display Size : ${phone.mainFeatures.displaySize} </h2>
   <h2 class=font-bold> Chipset : ${phone.mainFeatures.chipSet} </h2>
   <h2 class=font-bold> Slug : ${phone.slug} </h2>
   <h2 class=font-bold> Release data :: ${phone.releaseDate} </h2>
   <h2 class=font-bold> Brand  : ${phone.brand} </h2>
   <h2 class=font-bold> GPS : ${phone?.others?.GPS}


   
   
   
    `


    my_modal_5.showModal()

}


const handclick = (show) => {
    const inputfied = document.getElementById('input');
    const values = inputfied.value;
    console.log(values);
    loading(true)
    loadMood(values, show)
}



const lastBtn = () => {
    handclick(true);
}



const loading = (isloading) => {
    const leadinginput = document.getElementById('loading');
    if (isloading) {
        leadinginput.classList.remove('hidden')
    } else {
        leadinginput.classList.add('hidden')
    }
}

// loadMood()