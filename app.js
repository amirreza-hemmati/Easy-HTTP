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

  // function

    // GET Data
aGet.addEventListener("click", e => {
  e.preventDefault();
  myform.showform();
  myform.hideInput(true,false,false);
  forms.onsubmit = e => {
    e.preventDefault();
    myform.submits(true,false,false,getData);
  }
  aGet.style.display = "none";
  function getData() {
    const vEasyhttp = new easyHttp();
    vEasyhttp.getPosts("https://jsonplaceholder.typicode.com/posts",
      posts => {
        const posts1 = JSON.parse(posts);
        cardGet.innerHTML = "";
        for(let index = 0 ; index < posts1.length ; index++){
          if(index >= eval(forms[0].value)) {
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
      }
    );
  }
});

