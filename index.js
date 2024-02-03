class Singleton {
 static  #instance;
 
 static getInstance() {
    if(!this.#instance){
        this.#instance = new Singleton();
    }
    return this.#instance;
 }

}