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
            //alert('oldImgId === text');
            await new Promise(r => setTimeout(r, 1000));
            image = document.getElementById(newImgId);
            image.src="img/imgTick.jpeg";
            image = document.getElementById(oldImgId + '1');
            image.src="img/imgTick.jpeg";
            newImgId = "";
            oldImgId = "";
            elementIndex1 = 0;
            elementIndex0 = 0;
            imgWithIndex1Opened = 0;
            chekResult++;
        }
        if (imgWithIndex1Opened === 1) {
            //alert('imgWithIndex1Opened === 1');

            await new Promise(r => setTimeout(r, 1000));
            image = document.getElementById(newImgId);
            image.src="img/shirtForGame.jpeg";
            image = document.getElementById(oldImgId + '1');
            image.src="img/shirtForGame.jpeg";
            newImgId = "";
            oldImgId = "";
            elementIndex1 = 0;
            elementIndex0 = 0;
            imgWithIndex1Opened = 0;
        }
        if (imgWithIndex1Opened === 2) {
            //alert('imgWithIndex1Opened === 2');
            await new Promise(r => setTimeout(r, 1000));
            image = document.getElementById(newImgId + '1');
            image.src="img/shirtForGame.jpeg";
            image = document.getElementById(oldImgId);
            image.src="img/shirtForGame.jpeg";
            newImgId = "";
            oldImgId = "";
            elementIndex1 = 0;
            elementIndex0 = 0;
            imgWithIndex1Opened = 0;
        }
    }
    if (elementIndex0 === 2) {
        if (newImgId !== oldImgId) {
            //alert('newImgId !== oldImgId elementIndex0 === 2');
            await new Promise(r => setTimeout(r, 1000));
            image = document.getElementById(newImgId);
            image.src = "img/shirtForGame.jpeg";
            image = document.getElementById(oldImgId);
            image.src = "img/shirtForGame.jpeg";
            newImgId = "";
            oldImgId = "";
            elementIndex1 = 0;
            elementIndex0 = 0;
            imgWithIndex1Opened = 0;
        } else {
            elementIndex0 = elementIndex0 - 1;
        }
    }
    if (elementIndex1 === 2) {
        if (newImgId !== oldImgId) {
            //alert('newImgId !== oldImgId elementIndex1 === 2');
            await new Promise(r => setTimeout(r, 1000));
            image = document.getElementById(newImgId + '1');
            image.src = "img/shirtForGame.jpeg";
            image = document.getElementById(oldImgId + '1');
            image.src = "img/shirtForGame.jpeg";
            newImgId = "";
            oldImgId = "";
            elementIndex1 = 0;
            elementIndex0 = 0;
            imgWithIndex1Opened = 0;
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

/*function disableDiv() {
    for (var elementIndex0 = 0; elementIndex0 < allDivArray.length;) {
        document.getElementById(allDivArray[elementIndex0]).style.pointerEvents = "none";
    }
}

function enableDiv() {
    for (var elementIndex0 = 0; elementIndex0 < allDivArray.length;) {
        //document.getElementById(allDivArray[elementIndex0]).style.pointerEvents = "changeImg()";
        $(allDivArray[elementIndex0]).attributes('onClick', changeImg())
    }
}*/