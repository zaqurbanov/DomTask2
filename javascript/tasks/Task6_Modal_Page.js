
const modalRow2 = document.querySelector(".modal-row2");
const modalRow = document.querySelector('.modal-row')
const modal = document.querySelector('.modal');


const modalList = [
    {
        header:"header1",
        title:'title1',
        src:"images/img1.png"
    },
    {
        header:"header2",
        title:'title2',
        src:"images/img2.png"
    },
    {
        header:"header3",
        title:'title3',
        src:"images/img3.png"
    },
    {
        header:"header4",
        title:'title4',
        src:"images/img4.png"
    },
    {
        header:"header5",
        title:'title5',
        src:"images/img5.png"
    },
    {
        header:"header6",
        title:'title6',
        src:"images/img6.png"
    }
]

const resultTask6 = ()=>{

    modalList.forEach((e,index)=>{
        
        const card = renderCard(e.src,e.header,e.title);
        modalRow.appendChild(card)

    })

    
}


    modalRow2.addEventListener("click",(e)=>{

        if(!modal.contains(e.target)){
            modalRow2.style.display ='none'
        }
    })
const renderCard = (src,header,title)=>{
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.addEventListener('click',()=>addModalFunction(src,header,title))
    
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('card-img')

    const img = document.createElement('img');
    img.setAttribute('src',src);
    imgDiv.appendChild(img);

    cardDiv.appendChild(imgDiv)

    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('card-body');
    const h3 = document.createElement('h3');
    h3.textContent = header;
    bodyDiv.appendChild(h3);
    const p = document.createElement("p");
    p.textContent = title
    bodyDiv.appendChild(p);

    cardDiv.appendChild(bodyDiv)

    return cardDiv


}

const addModalFunction = (src,header,title)=>{
    modalRow2.style.display = 'flex'
    modalRow2.querySelector('img').src = src;
    modalRow2.querySelector('h3').textContent = header;
    modalRow2.querySelector('p').textContent = title
}

export default resultTask6