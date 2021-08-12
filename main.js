const body= document.getElementById('body')
const img=document.getElementById('img')
const nextBtn=document.getElementById('next')
const prevBtn=document.getElementById('prev')

let imgNum=1
nextBtn.addEventListener('click', () => {
    
    if (imgNum == 35) {
        imgNum=1
    }
    
    else{
        imgNum+=1
    }
    let nextImg=1
    if(imgNum == 35){
        nextImg=1
    }
    else{
        nextImg=imgNum+1
    }

    body.style.background =`url(./images/pic-${nextImg}.jpeg ) no-repeat`
    body.style.backgroundSize =`cover`
    img.src=`./images/pic-${imgNum}.jpeg`

       imgSara.innerText = imgNum
    
})


prevBtn.addEventListener('click', () => {

    if (imgNum == 1) {
        imgNum=35
    }
    else{
        imgNum-=1
    }
    let nextImg=1
    if(imgNum==35){
        nextImg=1
    }
    else{
        nextImg=imgNum+1
    }
       imgSara.innerText = imgNum
    body.style.background =`url(./images/pic-${nextImg}.jpeg ) no-repeat`
    body.style.backgroundSize =`cover`
    img.src=`./images/pic-${imgNum}.jpeg`

})
