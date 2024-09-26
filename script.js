const newNoteBtn = document.querySelector('#nova-nota')
const notesContainer = document.querySelector('.container')
// funções
const CreateNote = () =>{
    const noteInfo = JSON.parse(localStorage.getItem('notes')) || []
    const noteObj = {id: Math.floor(Math.random() * 5000), content: '', clicked: false}

    const newNote = document.createElement('div')
    newNote.classList.add('container-nota')
    newNote.id = noteObj.id
    newNote.innerHTML = `<i class="fa-solid fa-eye"></i>
                         <i class="fa-solid fa-delete-left"></i>
                         <textarea class="nota" id='blurrable'></textarea>`
    notesContainer.insertBefore(newNote, notesContainer.firstChild)

    noteInfo.push(noteObj)
    localStorage.setItem('notes', JSON.stringify(noteInfo))
}
const ShowNotes = () =>{
    const notesToShow = JSON.parse(localStorage.getItem('notes'))
    notesToShow.forEach(note => {
        const newNote = document.createElement('div')
        newNote.classList.add('container-nota')
        newNote.id = note.id
        newNote.innerHTML = `<i class="fa-solid fa-eye"></i>
                         <i class="fa-solid fa-delete-left"></i>
                         <textarea class="nota" id='blurrable'>${note.content}</textarea>`
        notesContainer.insertBefore(newNote, notesContainer.firstChild)
    });
}
newNoteBtn.addEventListener('click', () => {CreateNote()})

notesContainer.addEventListener('click', (e) =>{
    const targetEl = e.target
    const div = targetEl.closest('div')
    const textAreaToBlur = div.querySelector('textarea')
    const textSelectorAll = document.querySelectorAll('.nota')
    if(targetEl.classList.contains('fa-delete-left')){
        div.remove()
        if(!localStorage) return
        const notes = JSON.parse(localStorage.getItem('notes'))
        const i = notes.findIndex(note => note.id == div.id)
        notes.splice(i, 1)
        localStorage.setItem('notes', JSON.stringify(notes))
    }
    if(targetEl.classList.contains('fa-eye') || targetEl.classList.contains('fa-eye-slash')){
        targetEl.classList.toggle('fa-eye')
        targetEl.classList.toggle('fa-eye-slash')
        if(targetEl.classList.contains('fa-eye-slash')){
            textAreaToBlur.classList.add('hide')
        }else{
            textAreaToBlur.classList.remove('hide')
        }
    }
    textSelectorAll.forEach(text =>{
        text.addEventListener('keyup', () =>{
            const getNotes = JSON.parse(localStorage.getItem('notes'))
            const currentNote = getNotes.find(note => note.id == div.id)
            currentNote.content = text.value
            localStorage.setItem('notes', JSON.stringify(getNotes))
        })
    })
})
ShowNotes()