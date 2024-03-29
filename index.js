// 1
class Singleton {
    static #instance;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Singleton();
        }
        return this.#instance;

    }

    async #fectData(apiUrl) {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }

    async getData(apiUrl) {
        return this.#fectData(apiUrl);
    }

    ///3
    gropDataByPostId() {
        const data = this.getData('https://jsonplaceholder.typicode.com/posts');

        const grupData = data.reduce((acc, item) => {

            const posId = item.id;
            if (!acc[posId]) {
                acc[posId] = [];
            }
            acc[posId].push(item);
            return acc;
        }, {});

        return grupData;
    }

    getGroupData() {
        return this.gropDataByPostId();
    }
}

const data = Singleton.getInstance();
data.getData('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        console.log(data);
        console.log(data.gropDataByPostId());
    })
    .catch(error => {
        console.log(error.message);
    });


/// 2 

Array.prototype.groupBy = function (val) {
    return this.reduce(function (acc, obj) {
        const key = obj[val];

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
    }, {}
    )
}





