let notescontainer = document.querySelector('.note-container');
let createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.inp-box');

createBtn.addEventListener('click', () => {
    let note_del = document.createElement('div');
    note_del.className = 'note-del';

    let inputBox = document.createElement('p');
    inputBox.className = 'inp-box';
    inputBox.setAttribute('contenteditable', 'true');


    let delIcon = document.createElement('i');
    delIcon.className = 'ri-delete-bin-line';
    // delIcon.id = 'delete';

    note_del.appendChild(inputBox);
    note_del.appendChild(delIcon);

    notescontainer.appendChild(note_del);
});

notescontainer.addEventListener('click', (argu) => {
    if(argu.target.tagName === 'I'){
        argu.target.parentElement.remove();
    }
});

//when we press the enter button new line appear on the notes;
document.addEventListener("keydown", event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})