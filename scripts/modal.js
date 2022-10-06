/* Desenvolva sua lógica aqui */
function showUpModal(){ 

    const modalPage        = document.createElement("section")
    const modalContainer   = document.createElement("main")
    const modalTitleDiv    = document.createElement("div")
    const modalTextTitle   = document.createElement("p")
    const closeModalButton = document.createElement("button")
    const modalDescription = document.createElement("p")
    const form             = document.createElement("form")
    const insertValueDiv   = document.createElement("div")
    const pValue           = document.createElement("p")
    const inputValue       = document.createElement("input")
    const typeOfValue      = document.createElement("section")
    const pValueType       = document.createElement("p")
    const buttonsTypeDiv   = document.createElement("div")
    const inputEntryType        = document.createElement("input")
    const labelEntry       = document.createElement("label")
    const inputExitType         = document.createElement("input")
    const labelExit        = document.createElement("label")
    const chooseModalOption = document.createElement("section")
    const cancelModal      = document.createElement("button")
    const insertValue       = document.createElement("button")

    modalPage.classList.add("modal-page")
    modalContainer.classList.add("modal-container")
    modalTitleDiv.classList.add("title-modal")
    modalTextTitle.classList.add("text-title-modal")
    closeModalButton.classList.add("close-modal")
    modalDescription.classList.add("modal-description")
    form.classList.add("form-modal")
    insertValueDiv.classList.add("insert-value")
    typeOfValue.classList.add("insert-value-type")
    inputEntryType.classList.add("entry-input")
    labelEntry.classList.add("label-1")
    inputExitType.classList.add("exit-input")
    labelExit.classList.add("label-2")
    chooseModalOption.classList.add("choose-option")
    cancelModal.classList.add("cancel-modal")
    insertValue.classList.add("insert-value-button")

    inputValue.name = "value"
    inputValue.type = "number"
    inputValue.placeholder="R$ 00,00"

    inputEntryType.id = "entry"
    inputEntryType.name = "categoryID"
    inputEntryType.type = "radio"
    inputEntryType.value = "1"
    inputEntryType.checked = true
    labelEntry.htmlFor = "entry"
    labelEntry.innerText = "Entrada" 

    inputExitType.id = "exit"
    inputExitType.name = "categoryID"
    inputExitType.type = "radio"
    inputExitType.value = "2"
    labelExit.htmlFor = "exit"
    labelExit.innerText = "Saida" 

    modalTextTitle.innerText = "Registro de valor"
    closeModalButton.innerText = "X"
    modalDescription.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"
    pValue.innerText = "Valor"
    pValueType.innerText = "Tipo de valor:"
    inputEntryType.innerText = "Entrada"
    inputExitType.innerText = "Saida"
    cancelModal.innerText = "Cancelar"

    insertValue.innerText = "Inserir Valor"
    insertValue.type = "submit"
    
    
    modalTitleDiv.append(modalTextTitle, closeModalButton)
    insertValueDiv.append(pValue,inputValue)
    buttonsTypeDiv.append(inputEntryType,labelEntry,inputExitType, labelExit)
    typeOfValue.append(pValueType,buttonsTypeDiv)
    chooseModalOption.append(cancelModal,insertValue)
    form.append(insertValueDiv, typeOfValue, chooseModalOption)
    modalContainer.append(modalTitleDiv, modalDescription,form)
    modalPage.append(modalContainer)
    
    

    form.addEventListener("submit", (event) => {
        event.preventDefault()


        let newValue = {};

        const dataCatch = [...event.target]
       
        dataCatch.forEach((element) => {
            newValue["id"] = insertedValues.length+1
            if(element.value && element.type !== "radio"){
                newValue[element.name] = Number(element.value)
            } else if (element.checked) {
                newValue[element.name] = Number(element.value)
            }
        })
        

      
        
        modalPage.remove()
        
        insertedValues.push(newValue)
    
    } )
    
    return modalPage
    }
    

    


    function catchModalButton (){
    const addValueOpenModal = document.querySelector(".add-value")
    const mainPage = document.querySelector("#app")
    
    addValueOpenModal.addEventListener("click", (event)=>{
        event.preventDefault()
        const creatingModal = showUpModal()
        mainPage.appendChild(creatingModal)
    closeModal()
    creatingLiValues(insertedValues)
    })}
    
    catchModalButton()


    function closeModal(){
    const closeModalButton = document.querySelector(".close-modal")
    const modalPage = document.querySelector(".modal-page")
    
    closeModalButton.addEventListener("click", (event)=>{
        modalPage.remove()
    })
    }

