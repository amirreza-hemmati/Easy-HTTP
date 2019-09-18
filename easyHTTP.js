class easyHttp{
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // Make an HTTP request by GET
    getPosts(url , callback) {
        this.http.open("GET" , url , true);
        this.http.onload = e => {
            if(this.http.status === 200 && this.http.readyState === 4){
                callback(null,this.http.responseText);
            }
            else{
                callback(`Error: ${this.http.status}`);
            }
        }
        this.http.send();
    }

    // Make an HTTP request by SET
    setPosts(url , data , callback) {
        this.http.open("POST" , url , true);
        this.http.setRequestHeader('Content-type' , 'application/json');
        this.http.onload = () => {
            if(this.http.status == 201 || this.http == 200 && this.http.readyState === 4){
                callback(this.http.responseText);
            }
            else{
                alert(`Error: ${this.http.status}`);
            }
        };
        this.http.send(JSON.stringify(data));
    }

    // Make an HTTP request by PUT
    putData(url , data , callback){
        this.http.open("PUT" , url , true);
        this.http.setRequestHeader('Content-type' , 'application/json')
        this.http.onload = e => {
            callback(this.http.responseText);
        }
        this.http.send(JSON.stringify(data));
    }

    // Make an HTTP request by PUT
    deleteData(url , callback){
        this.http.open("DELETE" , url , true);
        this.http.onload = e => {
            if(this.http.status === 200){
                callback();
            }else{
                console.log(`Error: ${this.http.status}`)
            }
        }
        this.http.send();
    }
};