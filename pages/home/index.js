

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
                        let index = idToRemove
                        insertedValues.splice(index, 1)
                        lista.remove()
                        somaTotal(insertedValues)
                        verificaStatus()


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

function verificaStatus(){ 
const valueslist = document.querySelector(".historic-list")
if(valueslist.children.length == 0){
    const divTexts = document.createElement('div')
    const pText = document.createElement('p')
    const pText2 = document.createElement('p')

    pText.classList.add("ptext-1")
    pText2.classList.add("ptext-2")
    divTexts.classList.add("nodata-div")

    pText.innerText = "Nenhum valor cadastrado"
    pText2.innerText = "Registre um novo valor"

    divTexts.append(pText, pText2)
    valueslist.append(divTexts)

}
}

verificaStatus()


