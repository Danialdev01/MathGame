let JawapanBetul = 0;
let IdJawapanBetul;
let FinalJawapan;
let rgb = 0;

function randomColor(){
    let rgb1 = Math.floor(Math.random() * 200)+100;
    let rgb2 = Math.floor(Math.random() * 200)+100;
    let rgb3 = Math.floor(Math.random() * 200)+100;
    rgbval1 = 'rgb('+rgb1+','+rgb2+','+rgb3+')';
    rgbval2 = 'rgb('+rgb2+','+rgb1+','+rgb3+')';
    rgbval3 = 'rgb('+rgb3+','+rgb2+','+rgb1+')';

    let buttonColor1 = document.getElementById("btg1");
    let buttonColor2 = document.getElementById("btg2");
    let buttonColor3 = document.getElementById("btg3");
    buttonColor1.style.background = rgbval1;
    buttonColor2.style.background = rgbval2;
    buttonColor3.style.background = rgbval3;
}

// function SetRandomColor(){
//     let buttonColor1 = document.getElementById("btg1");
//     let buttonColor2 = document.getElementById("btg2");
//     let buttonColor3 = document.getElementById("btg3");
//     buttonColor1.style.background = rgbval1;
//     buttonColor2.style.background = rgbval2;
//     buttonColor3.style.background = rgbval3;
// }

//@ Operasi tambah 
function SoalanTambah(){
    let OperationDiv = document.getElementById("questionbox");
    //^ buat nombor random 
    let Nom1 = Math.floor(Math.random() * 100)+1;
    let Nom2 = Math.floor(Math.random() * 100)+1;
    //^ cari jawapan 
    JawapanBetul = Nom1 + Nom2;
    OperationDiv.innerHTML = Nom1 + " + " + Nom2 + " = ?" ;

    //^ jadikan semua butang jawapan salah 
    let JawapanSalah1 = Math.floor(Math.random() * 101) + Math.floor(Math.random() * 101);
    let JawapanSalah2 = Math.floor(Math.random() * 101) + Math.floor(Math.random() * 101);
    let JawapanSalah3 = Math.floor(Math.random() * 101) + Math.floor(Math.random() * 101);
    document.getElementById("btg1").innerHTML = "A. " + JawapanSalah1;
    document.getElementById("btg2").innerHTML = "B. " + JawapanSalah2;
    document.getElementById("btg3").innerHTML = "C. " + JawapanSalah3;

    //^ cari tempat random untuk jadikan jawapan 
    let NomIdeksJawapanBetul = Math.floor(Math.random()*3)+1;
    IdJawapanBetul = "btg" + NomIdeksJawapanBetul;

    //^ untuk tentukan jawapan betul ada list penanda = A. ATAU B. ATAU C.
    let ListSoalan;
    if(NomIdeksJawapanBetul === 1)ListSoalan = "A. "; 
    if(NomIdeksJawapanBetul === 2)ListSoalan = "B. "; 
    if(NomIdeksJawapanBetul === 3)ListSoalan = "C. "; 
    
    //^ tetapkan butang jawapan
    FinalJawapan = ListSoalan + JawapanBetul;
    document.getElementById(IdJawapanBetul).innerHTML = FinalJawapan;
}

//@ Operasi tolak 
function SoalanTolak(){
    let OperationDiv = document.getElementById("questionbox");
    //^ buat nombor random 
    let Nom1 = Math.floor(Math.random() * 100)+1;
    let Nom2 = Math.floor(Math.random() * 100)+1;
    //^ cari jawapan 
    JawapanBetul = Nom1 - Nom2;
    OperationDiv.innerHTML = Nom1 + " - " + Nom2 + " = ?" ;

    //^ jadikan semua butang jawapan salah 
    let JawapanSalah1 = Math.floor(Math.random() * 101) - Math.floor(Math.random() * 101);
    let JawapanSalah2 = Math.floor(Math.random() * 101) - Math.floor(Math.random() * 101);
    let JawapanSalah3 = Math.floor(Math.random() * 101) - Math.floor(Math.random() * 101);
    document.getElementById("btg1").innerHTML = "A. " + JawapanSalah1;
    document.getElementById("btg2").innerHTML = "B. " + JawapanSalah2;
    document.getElementById("btg3").innerHTML = "C. " + JawapanSalah3;

    //^ cari tempat random untuk jadikan jawapan 
    let NomIdeksJawapanBetul = Math.floor(Math.random()*3)+1;
    IdJawapanBetul = "btg" + NomIdeksJawapanBetul;

    //^ untuk tentukan jawapan betul ada list penanda = A. ATAU B. ATAU C.
    let ListSoalan;
    if(NomIdeksJawapanBetul === 1)ListSoalan = "A. "; 
    if(NomIdeksJawapanBetul === 2)ListSoalan = "B. "; 
    if(NomIdeksJawapanBetul === 3)ListSoalan = "C. "; 
    
    //^ tetapkan butang jawapan
    FinalJawapan = ListSoalan + JawapanBetul;
    document.getElementById(IdJawapanBetul).innerHTML = FinalJawapan;
}

//@ Operasi darab
function SoalanDarab(){
    let OperationDiv = document.getElementById("questionbox");
    //^ buat nombor random 
    let Nom1 = Math.floor(Math.random() * 100)+1;
    let Nom2 = Math.floor(Math.random() * 100)+1;
    //^ cari jawapan 
    JawapanBetul = Nom1 * Nom2;
    OperationDiv.innerHTML = Nom1 + " × " + Nom2 + " = ?" ;

    //^ jadikan semua butang jawapan salah 
    let JawapanSalah1 = Math.floor(Math.random() * 101) * Math.floor(Math.random() * 101);
    let JawapanSalah2 = Math.floor(Math.random() * 101) * Math.floor(Math.random() * 101);
    let JawapanSalah3 = Math.floor(Math.random() * 101) * Math.floor(Math.random() * 101);
    document.getElementById("btg1").innerHTML = "A. " + JawapanSalah1;
    document.getElementById("btg2").innerHTML = "B. " + JawapanSalah2;
    document.getElementById("btg3").innerHTML = "C. " + JawapanSalah3;

    //^ cari tempat random untuk jadikan jawapan 
    let NomIdeksJawapanBetul = Math.floor(Math.random()*3)+1;
    IdJawapanBetul = "btg" + NomIdeksJawapanBetul;

    //^ untuk tentukan jawapan betul ada list penanda = A. ATAU B. ATAU C.
    let ListSoalan;
    if(NomIdeksJawapanBetul === 1)ListSoalan = "A. "; 
    if(NomIdeksJawapanBetul === 2)ListSoalan = "B. "; 
    if(NomIdeksJawapanBetul === 3)ListSoalan = "C. "; 
    
    //^ tetapkan butang jawapan
    FinalJawapan = ListSoalan + JawapanBetul;
    document.getElementById(IdJawapanBetul).innerHTML = FinalJawapan;
}


//@ Operasi bahagi
function SoalanBahagi(){
    let OperationDiv = document.getElementById("questionbox");
    //^ buat nombor random 
    let Nom1 = Math.floor(Math.random() * 100)+1;
    let Nom2 = Math.floor(Math.random() * 100)+1;
    //^ cari jawapan 
    JawapanBetul = Nom1 / Nom2;
    OperationDiv.innerHTML = Nom1 + " ÷  " + Nom2 + " = ?" ;

    //^ jadikan semua butang jawapan salah 
    let JawapanSalah1 = Math.floor(Math.random() * 101) / Math.floor(Math.random() * 101);
    let JawapanSalah2 = Math.floor(Math.random() * 101) / Math.floor(Math.random() * 101);
    let JawapanSalah3 = Math.floor(Math.random() * 101) / Math.floor(Math.random() * 101);
    document.getElementById("btg1").innerHTML = "A. " + JawapanSalah1;
    document.getElementById("btg2").innerHTML = "B. " + JawapanSalah2;
    document.getElementById("btg3").innerHTML = "C. " + JawapanSalah3;

    //^ cari tempat random untuk jadikan jawapan 
    let NomIdeksJawapanBetul = Math.floor(Math.random()*3)+1;
    IdJawapanBetul = "btg" + NomIdeksJawapanBetul;

    //^ untuk tentukan jawapan betul ada list penanda = A. ATAU B. ATAU C.
    let ListSoalan;
    if(NomIdeksJawapanBetul === 1)ListSoalan = "A. "; 
    if(NomIdeksJawapanBetul === 2)ListSoalan = "B. "; 
    if(NomIdeksJawapanBetul === 3)ListSoalan = "C. "; 
    
    //^ tetapkan butang jawapan
    FinalJawapan = ListSoalan + JawapanBetul;
    document.getElementById(IdJawapanBetul).innerHTML = FinalJawapan;
}

//@ Tukar color background button
//! Idk what the problem 
// let ButtonBG = document.querySelector('#btg');

// function ChangeColor(){
//     let math1 = Math.floor(Math.random() *236);
//     let math2 = Math.floor(Math.random() *236);
//     let math3 = Math.floor(Math.random() *236);
//     let math4 = Math.floor(Math.random() *236);

//     ButtonBG.style.background = 'rgb(${math1}, ${math2}, ${math3}, ${math4})'
// }

//@ Check jawapan 
function CheckJawapan(butangIndeks){
    let Jawapan = document.getElementById("btg" + butangIndeks).innerHTML;
    console.log(FinalJawapan)
    console.log(Jawapan)
    if (Jawapan === FinalJawapan){
        document.getElementById("btg" + butangIndeks).className = "jawapanbetul";
        setTimeout(function(){
            location.reload();
        },1500);
    }
    if (Jawapan != FinalJawapan){
        document.getElementById("btg" + butangIndeks).className = "jawapansalah";
        setTimeout(function(){
            location.reload();
        },1500);
    }
}
