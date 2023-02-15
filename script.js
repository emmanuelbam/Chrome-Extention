

let myLeads = [  ]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )



inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   renderLeads()
   inputEl.value = ""
}) 
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems

}























































































































































































// let countEl = document.getElementById(count-el)

// let count = 0
 
// count += 1
 
// function increment() {
//     count += 1
//     countEl.innerText = count
// }