let myLibrary = []

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

Book.prototype.addBook = function(){
    myLibrary.push({title:this.title,author:this.author,pages:this.pages})
}

function updateDisplay (){
    if(myLibrary[myLibrary.length-1].title===''&& myLibrary[myLibrary.length-1].author==='' && myLibrary[myLibrary.length-1].pages ===''){
        return
    }
    const output = document.querySelector('.output')
    const card = document.createElement('div')
    card.style.padding = '30px'
    card.style.height = '300px'
    card.style.backgroundColor = '#004643'
    card.style.borderRadius = '5px'
    card.style.display = 'grid'
    card.style.gridTemplateRows = 'repeat(4, 1fr)'    
    const titleText = document.createElement('div')
    titleText.textContent = `Book Title : ` + myLibrary[myLibrary.length-1].title
    titleText.style.color = 'whitesmoke'
    const authorText = document.createElement('div')
    authorText.textContent = `Author : ` + myLibrary[myLibrary.length-1].author
    authorText.style.color = 'whitesmoke'
    const pageText = document.createElement('div')
    pageText.textContent = `Total Page : ` + myLibrary[myLibrary.length-1].pages.toString() + ` Pages`
    pageText.style.color = 'whitesmoke'
    const button = document.createElement('button')
    button.textContent = 'Remove'
    button.style.backgroundColor = '#f9bc60'
    button.style.color = '#001e1d'
    button.style.border = 'none'
    button.style.height = '40px'
    card.append(titleText)
    card.append(authorText)
    card.append(pageText)
    card.append(button)
    output.append(card)

}


const showForm = document.querySelector('[add-book]')
const formCard = document.querySelector('.form-card')
const titleText = document.querySelector('#title')
const authorText = document.querySelector('#author')
const pageText = document.querySelector('#pages')
const submitBtn = document.querySelector('[submit-btn]')
const form = document.querySelector('form')



submitBtn.addEventListener('click', (event)=>{
    const book  = new Book(titleText.value, authorText.value, pageText.value)
    book.addBook()
    formCard.style.display = 'none'
    updateDisplay()
    form.reset()
    event.preventDefault()
})

showForm.addEventListener('click', ()=>{
    formCard.style.display = 'grid'
})

