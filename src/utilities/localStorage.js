

const getBookFromStoredCard = (keyName) =>{
   const storedBook = localStorage.getItem(keyName);
   if(storedBook){
    return JSON.parse(storedBook);
   }
   return [];
}
const saveBookToStoredCard = (intId, keyName) =>{ 
    const storedBook = getBookFromStoredCard(keyName); 
    const remaining = storedBook.find(book => book === intId);
    if(!remaining){
        storedBook.push(intId);
        localStorage.setItem(keyName,JSON.stringify(storedBook));
    }
}

export {saveBookToStoredCard,getBookFromStoredCard}; 