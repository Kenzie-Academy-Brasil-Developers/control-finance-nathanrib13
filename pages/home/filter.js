

function filterCategorys (insertedValues) {
    const filtersButtons = document.querySelectorAll(".filter-item")
    const historicLi = document.querySelector(".historic-list")

    console.log(filtersButtons)

    filtersButtons.forEach(button => {
         button.addEventListener("click", () => {
           historicLi.innerText = ""
           const filters = button.innerText
           if(filters === "Todos") {
            renderfiltered (insertedValues)
           } else if (filters == "Entradas"){ 
            const entrysList = insertedValues.filter(item =>item.categoryID == 1)
            renderfiltered(entrysList)

           }else { 
            console.log("cliquei em saids")
            const exitsList = insertedValues.filter(item =>item.categoryID == 2)
            renderfiltered(exitsList)
            console.log(exitsList)
       }
       })
    })

}

filterCategorys(insertedValues)

function renderfiltered(list){ 
const currentValues = document.querySelector(".historic-list")

list.forEach(event => {
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
}
