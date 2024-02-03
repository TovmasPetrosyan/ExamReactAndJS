class Singleton {
 static  #instance;
 
 static getInstance() {
    if(!this.#instance){
        this.#instance = new Singleton();
    }
    return this.#instance;
    
 }

async fectData(apiUrl){
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}


}

