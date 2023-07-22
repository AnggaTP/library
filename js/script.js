let myLibrary = []
class Book {
    constructor(titleText, authorText, pagesText){
        this.title = titleText
        this.author = authorText
        this.pages = pagesText
    }

    addBooktoLibrary(){
        myLibrary.push({
            title : this.title,
            author : this.author,
            pages : this.pages

        })
        this.render()
    }

    render(){
        let output = document.querySelector('.output')
        output.innerHTML = ''
        for(let i = 0;i<myLibrary.length;i++){
            let getbook = myLibrary[i]
            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.innerHTML = `
            <div class='title'>
                <div>Book Title</div>
                <div class='content'>${getbook.title}</div>
            </div>
            <div class='author'>
                <div>Author</div>
                <div class='content'>${getbook.author}</div>
            </div>
            <div class='totalPages'>
                <div>Total Pages</div>
                <div class='content'>${getbook.pages} Pages</div>
            </div>
            <div class='removeButton'>
                <button onclick=book.removeBook(${i})>Remove</button>
            </div>
            `
            output.append(card)
        }
    }

    removeBook(index){
        myLibrary.splice(index, 1)
        this.render()
    }
}


const showForm = document.querySelector('[add-book]')
const formCard = document.querySelector('.form-card') //for display form
const submitBtn = document.querySelector('[submit-btn]')
const form = document.querySelector('form') // for reset form value

const titleText = document.querySelector('#title')
const authorText = document.querySelector('#author')
const pagesText = document.querySelector('#pages')

const book = new Book()

submitBtn.addEventListener('click', (event)=>{
    book.title = titleText.value
    book.author = authorText.value
    book.pages = pagesText.value 
    book.addBooktoLibrary()
    formCard.style.display = 'none'
    
    form.reset()
    event.preventDefault()
})

showForm.addEventListener('click', ()=>{
    formCard.style.display = 'grid'
})