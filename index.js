function dinhdangtime(sogiay) {
    const phut = String(Math.floor(sogiay / 60)).padStart(2, '0');
    const giay = String(sogiay % 60).padStart(2, '0');
    return `${phut}:${giay}`;
}

let hiengio = document.querySelector('.thoi-gian');
function capnhatdongho() {
    hiengio.textContent = dinhdangtime(x);
}

let sbtn = document.getElementById('btn');
let run = true;
let x = 0;
let timer;
let lichsu=document.querySelector('.bang-lich-su');

const testwin = document.querySelector('.gioi-han');
const arrtestwin = Array.from(testwin.children);
const arr=arrtestwin;

function xaotron() {
    const randombox = document.querySelector('.gioi-han');
    const boxs = Array.from(randombox.children);
    for (let i = boxs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [boxs[i], boxs[j]] = [boxs[j], boxs[i]];
    }
    randombox.innerHTML = '';
    boxs.forEach(box => randombox.appendChild(box));
}

sbtn.addEventListener('click', function () {
    if (sbtn.textContent === 'Bắt đầu') {
        for (let i = 1; i <= 100; i++) {
            xaotron();
        }
        if (run) {
            run = false;
            sbtn.textContent = 'Kết thúc';
            timer = setInterval(function () {
                x++;
                capnhatdongho();
            }, 1000);
        }
    } else {
        run = true;
        sbtn.textContent = 'Bắt đầu';
        clearInterval(timer);
        x = 0;
        capnhatdongho();
    }
    boxs = Array.from(dichuyenbtn.children);
});
let vitri=0;
let sobuoc=0;
dichuyenbtn = document.querySelector('.gioi-han');
document.addEventListener('keydown', function (event) {
    if (sbtn.textContent === 'Kết thúc') {
        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].classList.contains('tt12')) {
                vitri = i;
                break;
            }
        }
    let vitrimoi = vitri;
    if (event.key === 'ArrowUp' || event.key === 'w') {
        vitrimoi = vitri - 4;

    } else if (event.key === 'ArrowDown' || event.key === 's') {
        vitrimoi = vitri + 4;
    } else if (event.key === 'ArrowLeft' || event.key === 'a') {
        if (vitri !=0 && vitri !=4 && vitri !=8){
        vitrimoi = vitri - 1;}
    } else if (event.key === 'ArrowRight' || event.key === 'd') {
      if(vitri !=3 && vitri !=7 && vitri !=11){  
        vitrimoi = vitri + 1;}
    }

    if (vitrimoi >= 0 && vitrimoi < boxs.length) {
        if (vitri <0 || vitri >= boxs.length || vitrimoi < 0 || vitrimoi >= boxs.length) {
            return;
        }
        else {
            let tg = boxs[vitri].textContent;
            boxs[vitri].textContent = boxs[vitrimoi].textContent;
            boxs[vitrimoi].textContent = tg;
            let tgclass = boxs[vitri].className;
            boxs[vitri].className = boxs[vitrimoi].className;
            boxs[vitrimoi].className = tgclass;
            vitri=vitrimoi;
            sobuoc++;
            if (boxs.length === arr.length && boxs.every((box, index) => box.textContent === arr[index].textContent)) {
                alert("You win!");
                sbtn.textContent = 'Bắt đầu';
                lichsu.innerHTML += `<tr><td>${lichsu.children.length}</td><td>${sobuoc} bước</td><td>${dinhdangtime(x)}</td></tr>`;
                clearInterval(timer);
                x = 0;
                capnhatdongho();
                run = true;
                sobuoc=0;}
        }
    }
}
});







