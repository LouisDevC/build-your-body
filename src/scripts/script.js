// show and hide do formulario
// variáveis
const newExerciseBtn = document.querySelector('#new-btn')
const formContainer = document.querySelector('.informations')
const closeForm = document.querySelector('#close')
// getform
const exerciseInput = document.querySelector('#ex-input')
const choiceSerie = document.querySelector('#serie-options')
const serie = document.querySelector('#series')
const newSerieInput = document.querySelector('#serie-input')
const day = document.querySelector('#day-select')
// funções

const CreateSerie = (serie) =>{
    if(!serie) return
    console.log(serie)
}
// eventos
newExerciseBtn.addEventListener('click', () =>{
    newExerciseBtn.textContent = 'Inserir treino!'
    formContainer.classList.remove("hide")

    if(newExerciseBtn.textContent === 'Inserir treino!'){
        newExerciseBtn.addEventListener('click', () =>{
            const exercise = exerciseInput.value
            const SerieType = choiceSerie.value
            const newSerieValue = newSerieInput.value
            
            if (!exercise) return

            if(SerieType === 'new-serie'){
                CreateSerie(newSerieValue)
            }
        })
    }
})

closeForm.addEventListener('click', () =>{
    formContainer.classList.add("hide")
    newExerciseBtn.textContent = 'Novo exercício'
})