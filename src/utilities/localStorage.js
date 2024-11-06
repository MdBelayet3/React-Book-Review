

const getBookFromStoredCard = (para) =>{
   const storedBook = localStorage.getItem(para);
   if(storedBook){
    return JSON.parse(storedBook);
   }
   return [];
}
const saveBookToStoredCard = (intId, keyName) =>{ //3
    const storedBook = getBookFromStoredCard(keyName); //2,3,5
    const remaining = storedBook.find(book => book === intId);
    if(!remaining){
        storedBook.push(intId);
        localStorage.setItem(keyName,JSON.stringify(storedBook));
    }
}

export {saveBookToStoredCard,getBookFromStoredCard}; 