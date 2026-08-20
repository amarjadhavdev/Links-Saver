let myTitle = []
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputURL = document.getElementById("input-url")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage1 = JSON.parse( localStorage.getItem("myLeads") ) || [];
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myTitle") ) || [];
const deleteBtn = document.getElementById("delete-btn")
myLeads = leadsFromLocalStorage1
if (leadsFromLocalStorage) {
    myTitle= leadsFromLocalStorage
    render(myTitle,myLeads)
}

function render(leads1,leads2) {
    let listItems = ""
    for (let i = 0; i < leads1.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads2[i]}'>
                    ${leads1[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myTitle.length = 0
    if (myLeads) {
    myLeads.length = 0;
}
    render(myTitle,myLeads) 
})

inputBtn.addEventListener("click", function() {
    myTitle.push(inputEl.value)
    inputEl.value = ""
    myLeads.push(inputURL.value)
    inputURL.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    localStorage.setItem("myTitle", JSON.stringify(myTitle) )
    render(myTitle,myLeads) 
})
