let myLibrary = []

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(){
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value

    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    render()
}

function removeBook(index){
    myLibrary.splice(index, 1)
    render()
}

function render(){
    let output = document.querySelector('.output')
    output.innerHTML = ''
    for(let i = 0;i<myLibrary.length;i++){
        let book = myLibrary[i]
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.innerHTML = `
        <div class='title'>
            <div>Book Title</div>
            <div class='content'>${book.title}</div>
        </div>
        <div class='author'>
            <div>Author</div>
            <div class='content'>${book.author}</div>
        </div>
        <div class='totalPages'>
            <div>Total Pages</div>
            <div class='content'>${book.pages} Pages</div>
        </div>
        <div class='removeButton'>
            <button onclick=removeBook(${i})>Remove</button>
        </div>
        `
        output.append(card)
    }
}

const showForm = document.querySelector('[add-book]')
const formCard = document.querySelector('.form-card') //for display form
const submitBtn = document.querySelector('[submit-btn]')
const form = document.querySelector('form') // for reset form value

submitBtn.addEventListener('click', (event)=>{
    addBookToLibrary()
    formCard.style.display = 'none'
    form.reset()
    event.preventDefault()
})

showForm.addEventListener('click', ()=>{
    formCard.style.display = 'grid'
})