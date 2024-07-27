let button = document.querySelector("button")
let h2 = document.querySelector("h2")
let textarea = document.querySelector("textarea")
button.addEventListener("click",()=>{
    let count = "";
    let text = textarea.value;
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i)
        if(isVowel(char)){
            count++;
        }
    }
    h2.textContent = `Total Vowel's :  ${count}`
})


function isVowel(char){
    let letter = ["a","e","i","o","u"]
    return letter.includes(char)
}