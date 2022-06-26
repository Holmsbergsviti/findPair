let elementIndex0 = 0;
let elementIndex1 = 0;
let imgWithIndex1Opened = 0;
let chekResult = 0;
let oldImgId = "";
let image = "";
let imgId = "";
let randEl = 0;
let imgIdName = "";
let newImgId = "";
let lastChar = "";
const imgArray = ['Ball', 'Ball1', 'BasketballBall', 'BasketballBall1', 'Bee', 'Bee1', 'Cat', 'Cat1', 'Coin',
    'Coin1', 'Dog', 'Dog1', 'Fish', 'Fish1', 'Telephone', 'Telephone1'];

async function changeImg() {
    //проверка: открывалась ли эта карточка до этого нажатия
    imgId = event.target.id;
    if (imgId[0] === '1') {
        randEl = Math.floor(Math.random()*imgArray.length);
        imgIdName = imgArray[randEl];
        document.getElementById(imgId).id=(imgIdName);
        imgArray.splice(randEl, 1)
    }

    //получение доступа к перевороту карточки
    newImgId = event.target.id;
    image = document.getElementById(newImgId);
    lastChar = newImgId.charAt(newImgId.length - 1);
    if (lastChar === '1') {
        newImgId = newImgId.substring(0, newImgId.length - 1);
        elementIndex1++;
        if (oldImgId !== "") {
            imgWithIndex1Opened = 2;
        } else {
            imgWithIndex1Opened = 1;
        }
    } else {
        elementIndex0++;
    }

    //переворот карточки
    changeImgTo('img' + newImgId);

    //проверка двух карточек на схожесть и различие
    if (elementIndex1 === 1 && elementIndex0 === 1) {
        if (oldImgId === newImgId) {
            await changeImgToShirt('', '1', 'imgTick')
            chekResult++;
        }
        if (imgWithIndex1Opened === 1) {
            await changeImgToShirt('', '1', 'shirtForGame')
        }
        if (imgWithIndex1Opened === 2) {
            await changeImgToShirt('1', '', 'shirtForGame')
        }
    }
    if (elementIndex0 === 2) {
        if (newImgId !== oldImgId) {
            await changeImgToShirt('', '', 'shirtForGame')
        } else {
            elementIndex0 = elementIndex0 - 1;
        }
    }
    if (elementIndex1 === 2) {
        if (newImgId !== oldImgId) {
            await changeImgToShirt('1', '1', 'shirtForGame')
        } else {
            elementIndex1 = elementIndex1 - 1;
        }
    }

    //проверка победы
    if (chekResult === 8) {
        alert("YOU WON!!!")
    }
    oldImgId = newImgId;
}

function changeImgTo(imgName) {
    image.src=("img/" + imgName + ".jpeg");
}

async function changeImgToShirt(element1, element2, imageName) {
    await new Promise(r => setTimeout(r, 1000));
    image = document.getElementById(newImgId + element1);
    image.src="img/" + imageName +".jpeg";
    image = document.getElementById(oldImgId + element2);
    image.src="img/" + imageName + ".jpeg";
    newImgId = "";
    oldImgId = "";
    elementIndex1 = 0;
    elementIndex0 = 0;
    imgWithIndex1Opened = 0;
}