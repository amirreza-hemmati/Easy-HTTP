class easyHttp{
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // Make an HTTP request by GET
    getPosts(url , callback) {
        this.http.open("GET" , url , true);
        this.http.onload = e => {
            if(this.http.status === 200 && this.http.readyState === 4){
                callback(this.http.responseText);
            }
        }
        this.http.send();
    }

    // Make an HTTP request by SET
    setPosts() {

    }
}