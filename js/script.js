let cardsOpened = 0;
let chekResult = 0;
let oldImgId = "";
let image = "";
let imgId = "";
let randEl = 0;
let imgIdName = "";
let newImgId = "";
let imgIdLastChar = "";
let imgName = "";
let oldImgName = "";
const imgArray = ['Ball', 'BasketballBall', 'Bee', 'Cat', 'Coin', 'Dog', 'Fish', 'Telephone', 'Ball', 'BasketballBall',
    'Bee', 'Cat', 'Coin', 'Dog', 'Fish', 'Telephone'];

async function changeImg() {
    //проверка: открывалась ли эта карточка до этого нажатия
    imgId = event.target.id;
    imgIdLastChar = imgId[imgId.length - 1];
    if (imgIdLastChar === '0' || imgIdLastChar === '1' || imgIdLastChar === '2' || imgIdLastChar === '3') {
        randEl = Math.floor(Math.random() * imgArray.length);
        imgIdName = imgArray[randEl];
        document.getElementById(imgId).id = (imgId + imgIdName);
        imgArray.splice(randEl, 1)
    }

    //получение доступа к перевороту карточки
    newImgId = event.target.id;
    image = document.getElementById(newImgId);
    imgName = newImgId;
    imgName = imgName.substring(3);

    //переворот карточки
    changeImgTo('img' + imgName);

    cardsOpened++;

    //проверка двух карточек на схожесть и различие
    if (cardsOpened === 2) {
        if (oldImgName === imgName) {
            if (oldImgId === newImgId) {
                cardsOpened -= 1;
            } else {
                await changeImgToShirt('', '', 'imgTick')
                chekResult++;
            }
        } else {
            await changeImgToShirt('', '', 'shirtForGame')
        }
    }

    //проверка победы
    if (chekResult === 8) {
        alert("YOU WON!!!")
    }

    oldImgId = newImgId;
    oldImgName = imgName;
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
    oldImgName = "";
    imgName = "";
    cardsOpened = 0;
}