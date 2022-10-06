

function creatingLiValues (listToRender){
    const form = document.querySelector(".form-modal")
    const valueslist = document.querySelector(".historic-list")


    form.addEventListener("submit", (event) => { 
    valueslist.innerText = ""
    listToRender.forEach(event => {
    const ulValuesInserted = document.querySelector(".historic-list")
    const lista = document.createElement("li")
    const valueIserted = document.createElement("p")
    const divTypeTrash = document.createElement("div")
    const typeEntry = document.createElement("p")
    const buttonTrash = document.createElement("button")

    lista.classList.add("values-card")
    valueIserted.classList.add("value-insert")
    typeEntry.classList.add("flux-category")
    buttonTrash.classList.add("button")
    
    valueIserted.innerHTML = `R$${event.value}`
    if(event.categoryID === 1){
    typeEntry.innerText = "Entrada"
    } else {
        typeEntry.innerText = "Saida"
    }
    buttonTrash.innerText = "🗑️"
    buttonTrash.id = event.id

                buttonTrash.addEventListener("click", (event) =>{
                        
                        const idToRemove = event.target.id
                        let index = idToRemove-1
                        insertedValues.splice(index, 1)
                        lista.remove()
                        somaTotal(insertedValues)

                    })


    divTypeTrash.append(typeEntry,buttonTrash)
    lista.append(valueIserted, divTypeTrash)
    ulValuesInserted.appendChild(lista)

    

    return ulValuesInserted
    })



somaTotal(insertedValues)
})
}







const valuesSum = document.querySelector(".values-sum")
const total = document.createElement("p")
valuesSum.appendChild(total)
total.innerText = "R$00,00"

function somaTotal (insertedValues){
    let count = 0 

    insertedValues.forEach((element) => {
        total.innerText = ""
        if (element.categoryID == 1) {
            count += element.value
        } 
        else {
            count -= element.value
        }
        total.innerText = `R$${count}`
    })

    if (insertedValues.length == 0){
        total.innerText = "R$00,00"    }
    return valuesSum
}







 function filterCategorys () {
     const filtersButtons = document.querySelectorAll(".filter-item")
     const historicLi = document.querySelector(".historic-list")

     console.log(filtersButtons)

     filtersButtons.forEach(button => {
        button.addEventListener("click", () => {
            historicLi.innerText = ""
            const filters = button.innerText
            if(filters === "Todos") {
                renderLiFilter(insertedValues)
            } else if (filters == "Entradas"){ 
            const exitsFilter = insertedValues.filter(values => insertedValues.categoryID ===2)
            renderLiFilter(exitsFilter)
            }else { 
            const entrysFilter = insertedValues.filter(values => insertedValues.categoryID ===1)
            renderLiFilter(entrysFilter)
        }
        })
     })

 }

 filterCategorys()

 
