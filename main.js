const firstRow= "aaaaaba";
const secondRow = "aaaaabbaaaaa";
function getRow(firstRow, secondRow) {
    let i = 0;
    let count1 = 0;
    let count2 = 0;
    for(i ; i <firstRow.length;i++){
        if(firstRow.charAt(i) == "a"|| firstRow.charAt(i) == "а"){
            count1+=1;
        }
    }
    for(let j = 0 ; j <secondRow.length;j++){
        if(secondRow.charAt(j) == "a" || secondRow.charAt(j) == "а"){
            count2+=1;
        }
    }
    if(count1>count2){
        return firstRow;
    }else if(count2>count1){
        return secondRow;
    }
}
console.log(getRow(firstRow, secondRow));

function formattedPhone(phone) {
    let Nformat = ""  ;
    for(let i = 0 ; i<phone.length;i++){
        if(i == 2){
            Nformat += ' ';
            Nformat += '(';
        }else if(i==5){
            Nformat += ')';
            Nformat += ' ';
        }else if(i==8){
            Nformat += '-';
        }else if(i==10) {
            Nformat += '-';
        }
        Nformat += phone.charAt(i);
    }
    return Nformat;
}
console.log(formattedPhone('+71234567890'));