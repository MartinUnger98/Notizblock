let notes = [];
let comments = [];
let dates = [];

load();


function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  for (i = 0; i < notes.length; i++) {
    let note = notes[i];
    let comment = comments[i];
    let date = dates[i];

    content.innerHTML += `
        <div class="card">
            <div class="upper">
                <h2 class="task">${note} <br> bis ${date}</h2>
                <div class="del_button" onclick="del(${i})"></div>
            </div>
            <div class="lower">
            <p id="description">${comment}</p>
            </div>
        </div>
        `;
  }
  
}

function addTo(){
    
    let note = document.getElementById('note');
    let comment = document.getElementById('comment');
    let date = document.getElementById('date');
    
    if(note.value==="" || date.value===""){
        alert("Bitte alles ausfüllen!");
    }
    else{
    notes.push(note.value);
    comments.push(comment.value);
    dates.push(date.value);

    document.getElementById('note').value='';
    document.getElementById('comment').value='';
    document.getElementById('date').value='';

    render();
    save();
    }
}

function del(i){
    notes.splice(i, 1);
    comments.splice(i, 1);
    dates.splice(i, 1);
    render();
    save()
}

function save(){
    let notesAsText = JSON.stringify(notes);
    let commentsAsText = JSON.stringify(comments);
    let datesAsText = JSON.stringify(dates);

    localStorage.setItem('notes', notesAsText);
    localStorage.setItem('comments', commentsAsText);
    localStorage.setItem('dates', datesAsText);
}

function load(){
    let notesAsText = localStorage.getItem('notes');
    let commentsAsText = localStorage.getItem('comments');
    let datesAsText = localStorage.getItem('dates');

    if (notesAsText && commentsAsText && datesAsText){
        notes = JSON.parse(notesAsText);
        comments =JSON.parse(commentsAsText);
        dates = JSON.parse(datesAsText);
    }
}

