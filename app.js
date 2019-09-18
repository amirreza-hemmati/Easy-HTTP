// variable
const easy = new easyHttp();
const cardBody = document.getElementsByClassName("card-body");
const cardGet = cardBody[0];
const cardSet = cardBody[1];
const cardPut = cardBody[2];
const cardDelete = cardBody[3];
const alink = document.getElementsByTagName("a");
const aGet = alink[0];
const aSet = alink[1];
const aPut = alink[2];
const aDelete = alink[3];
const forms = document.forms[0];
const inputNumber = forms[0];
const inputTitle = forms[1];
const inputBody = forms[2];
let sum = 0;

// function

// GET Data
aGet.addEventListener("click", e => {
  e.preventDefault();
  myform.showform();
  myform.hideInput(true, false, false);
  forms.onsubmit = e => {
    e.preventDefault();
    myform.submits(true, false, false, getData);
  };
  e.target.style.display = "none";
  function getData() {
    const vEasyhttp = new easyHttp();
    vEasyhttp.getPosts(
      "https://jsonplaceholder.typicode.com/posts",
      (err, posts) => {
        if (!err) {
          const posts1 = JSON.parse(posts);
          cardGet.innerHTML = "";
          for (let index = 0; index < posts1.length; index++) {
            if (index >= eval(forms[0].value)) {
              break;
            }
            let el = posts1[index];
            cardGet.innerHTML += `
            <br />
              <span class="text-danger">ID:</span> ${index + 1}
              <br /><br />
              <span class="text-danger">Title:</span> ${el.title}
              <br /><br />
              <span class="text-danger">Body:</span> ${el.body}
              <br />
              <br>
            <hr>
          `;
          }
          myform.finishWork();
          aGet.style.display = "block";
        } else {
          console.log(err);
        }
      }
    );
  }
});

// SET Data
aSet.addEventListener("click", e => {
  e.preventDefault();
  myform.showform();
  myform.hideInput(false, true, true);
  forms.onsubmit = e => {
    e.preventDefault();
    myform.submits(false, true, true, putdata);
  };
  e.target.style.display = "none";

  function putdata() {
    const httpSet = new easyHttp();
    const mydata = {title: inputTitle.value, body: inputBody.value };
    httpSet.setPosts(
      "https://jsonplaceholder.typicode.com/posts",
      mydata,
      getpost => {
        let arrGetPost = JSON.parse(getpost)
        cardSet.innerHTML = `
          <br />
          <span class="text-danger">ID:</span> ${arrGetPost.id + sum}
          <br /><br />
          <span class="text-danger">Title:</span> ${arrGetPost.title}
          <br /><br />
          <span class="text-danger">Body:</span> ${arrGetPost.body}
        `
        sum += 1;
      }
      );
    myform.finishWork();
    aSet.style.display = "block";
  }
});

// PUT Data
aPut.addEventListener("click", e => {
  e.preventDefault();
  myform.showform();
  myform.hideInput(true, true, true);
  forms.onsubmit = e => {
    e.preventDefault();
    myform.submits(true, true, true, putdata);
  };
  e.target.style.display = "none";

  function putdata() {
    const easyPost = new easyHttp();
    const putDatas = {title: inputTitle.value , body: inputBody.value};
    easyPost.putData(`https://jsonplaceholder.typicode.com/posts/${inputNumber.value}` , putDatas , posts => {
      let arrGetPost = JSON.parse(posts);
      cardPut.innerHTML = `
        <br />
        <span class="text-danger">ID:</span> ${arrGetPost.id + sum}
        <br /><br />
        <span class="text-danger">Title:</span> ${arrGetPost.title}
        <br /><br />
        <span class="text-danger">Body:</span> ${arrGetPost.body}
      `
    });
    myform.finishWork();
    aPut.style.display = "block";
  }
});

// DELETE Data
aDelete.addEventListener('click' , e => {
  e.preventDefault();
  myform.showform();
  myform.hideInput(true, false, false);
  forms.onsubmit = e => {
    e.preventDefault();
    myform.submits(true, false, false, putdata);
  };
  e.target.style.display = "none";

  function putdata(){
    const easyDelete = new easyHttp();
    easyDelete.deleteData(`https://jsonplaceholder.typicode.com/posts/${inputNumber.value}` , e => {
      cardDelete.innerHTML = `<p class="text-center text-danger">Deleted Data</p>`;
    });
    myform.finishWork();
    aDelete.style.display = "block";
  }
})