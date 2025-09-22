function addPost() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const imageInput = document.getElementById("imageUpload");

  if (!name || !comment) {
    alert("Please enter your name and a comment!");
    return;
  }

  let imageUrl = "";
  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imageUrl = e.target.result;
      savePost(name, comment, imageUrl);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    savePost(name, comment, imageUrl);
  }

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  imageInput.value = "";
}

function savePost(name, comment, imageUrl) {
  let posts = JSON.parse(localStorage.getItem("bikePosts")) || [];
  const newPost = { 
    name: name, 
    comment: comment, 
    image: imageUrl, 
    date: new Date().toLocaleString() 
  };
  posts.unshift(newPost); // latest first
  localStorage.setItem("bikePosts", JSON.stringify(posts));

  // Redirect to posts.html after saving
  window.location.href = "posts.html";
}
function addPost() {
  const nameInput = document.getElementById("name").value.trim();
  const name = nameInput ? nameInput : "Anonymous Rider 🚴";
  const comment = document.getElementById("comment").value.trim();
  const imageInput = document.getElementById("imageUpload");

  if (!comment) {
    alert("Please enter a comment!");
    return;
  }

  let imageUrl = "";
  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imageUrl = e.target.result;
      savePost(name, comment, imageUrl);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    savePost(name, comment, imageUrl);
  }

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  imageInput.value = "";
}

function savePost(name, comment, imageUrl) {
  let posts = JSON.parse(localStorage.getItem("bikePosts")) || [];
  const newPost = { 
    name: name, 
    comment: comment, 
    image: imageUrl, 
    date: new Date().toLocaleString() 
  };
  posts.unshift(newPost);
  localStorage.setItem("bikePosts", JSON.stringify(posts));

  // Redirect to posts.html after saving
  window.location.href = "posts.html";
}
