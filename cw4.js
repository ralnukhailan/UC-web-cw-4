alert('مرحبا بك في موقعي! انا رزان، وسوف احسب درجتك')
let grade = prompt("ادخل درجتك")
console.log("%c درجتك  " + grade, "color:purple")
if (100 >= grade && grade >= 90) {
    console.log("لقد حصلت على امتياز 🥳")
} else if (89 >= grade && grade >= 80) {
    console.log("لقد حصلت على جيد جداً🤩")
} else if (79 >= grade && grade >= 70) {
    console.log("لقد حصلت على جيد🙂")
} else if (69 >= grade && grade >= 60) {
    console.log("لقد حصلت على مقبول😕")
} else if (59 >= grade && grade >= 50){
    console.log("لقد حصلت على ضعيف☹️")
} else if (0 <= grade && grade < 50){
    console.log("راسب💔")
} else{
    console.log("درجه غير معرفة")
    console.log("حاول مرة اخرى")
}
console.log("%c بالتوفيق اعزائنا الطلبة", "color:green")
// جافاسكربت ليست جافا 