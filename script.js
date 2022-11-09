let get = (name) => {
  return document.getElementById(name);
};
//this function will create new elements ul, li, h2, p and append them to the DOM in the correct order
let createPost = (user, post) => {
  //if username is empty,or null, or undefined, or false, or 0, or NaN, or "", or '', or ``, then user is "anonymous"
  if (!user) {
    user = "anonymous";
  }
  //if post is empty,or null, or undefined, or false, or 0, or NaN, or "", or '', or ``, then post is "empty"
  if (!post) {
    post = "empty";
  }
  console.log(user);
  let ul = get("feed");
  let li = document.createElement("li");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  h2.innerText = user;
  p.innerText = post;
  li.appendChild(h2);
  li.appendChild(p);
  ul.appendChild(li);
};

//this code will add the text to the div with id "tweet"
function tweet() {
  inputUser = " user";
  inputTweet = "howdy";
  //console the value of the id "post"
  console.log(get("post").textContent);
  //set the value of the id "post" to the value of the variable input
  get("post").textContent = inputTweet;
  //set the value of the id "user" to the value of the variable input
  get("user").textContent = inputUser;
}

//code that will call function tweet when button is clicked
get("button").addEventListener("click", tweet);

//this will keep the page from refreshing when the form is submitted
document.getElementById("write").addEventListener("submit", (e) => {
  e.preventDefault();
  //this will call the function createPost and pass the values of the variables inputUser and inputTweet
  createPost(get("username".value), get("tweet").value);
});

//a for loop that writes 10 posts to the page with incrementing numbers in the username and tweet
for (let i = 0; i < 20; i++) {
  createPost(i, i);
}
