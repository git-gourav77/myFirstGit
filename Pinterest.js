var arr = [
  {
    name: "Female with horse",
    url: "https://images.unsplash.com/photo-1629366794937-fb2c3cc69927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "home bed",
    url: "https://plus.unsplash.com/premium_photo-1674676471943-83c8b5b7e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    name: "animal deer",
    url: "https://images.unsplash.com/photo-1712482994282-8613bb4a8690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "animal sea turtle",
    url: "https://images.unsplash.com/photo-1482642302383-7ba0f8012849?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "animal zebra",
    url: "https://plus.unsplash.com/premium_photo-1661830629991-01950d3eba34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "home bag",
    url: "https://images.unsplash.com/photo-1585327969772-17d7940f1a21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    name: "night",
    url: "https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ice",
    url: "https://plus.unsplash.com/premium_photo-1664361479983-2cc6e9d6bbfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Female",
    url: "https://images.unsplash.com/photo-1712260547533-e3e6a0ed7139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "good view scenary",
    url: "https://plus.unsplash.com/premium_photo-1712093079241-5986b3c74f57?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "jungle scenary",
    url: "https://plus.unsplash.com/premium_photo-1673264933445-0112f3cdcb2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "night moon",
    url: "https://images.unsplash.com/photo-1712992510624-3bb00e23fe76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "female black",
    url: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
//Variables
var pin_container = document.getElementById("pin_container");
var inputField = document.querySelector(".searchBox input");
var searchBlur = document.querySelector(".SearchBlur");
var suggestionBox = document.querySelector(".SuggestionsBox");
console.log(inputField);
//Function to render all the images;
function showImages(arr) {
  let tempHTML = "";
  arr.forEach((elem) => {
    tempHTML += `<div class="imgBox">
            <img src=${elem.url} alt="">
        </div>`;
  });
  pin_container.innerHTML = tempHTML;
}
//Function to toggle searchBlur
var flag = 0;
inputField.addEventListener("focus", function () {
  searchBlur.style.display = "block";
  flag = 1;
  showSuggestions(arr);
});
inputField.addEventListener("blur", function () {
  searchBlur.style.display = "none";
  flag = 0;
  showSuggestions(arr);
});

/*  */
//Function for suggestions;
function showSuggestions(arr) {
  let tempHTML = "";
  arr.forEach((element, idx) => {
    tempHTML += `<div class="suggestions items">
                        <i class="ri-search-line"></i> <h5>${element.name}</h5>
                    </div>`;
  });
  suggestionBox.innerHTML = tempHTML;
  if (flag == 1) {
    suggestionBox.style.visibility = "visible";
  } else {
    if (inputField.value == "") {
      suggestionBox.style.visibility = "hidden";
    }
  }
}
//function to Filter...
inputField.addEventListener("input", function () {
  idkJustSearchFilter();
});
function idkJustSearchFilter() {
  let newArr = arr.filter((elem) =>
    elem.name.toLowerCase().startsWith(inputField.value.toLowerCase())
  );

  //So now I have a new array, So I am gonna call the suggestion box function as well as the showImages function using this new array, let's see if it works ro not
  showImages(newArr);
  showSuggestions(newArr);
}
//Just trying something;
suggestionBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("suggestions")) {
    let tempVal = e.target.querySelector("h5");
    console.log(tempVal.innerText);
    inputField.value = tempVal.innerText;
    suggestionBox.style.visibility = "hidden";
    idkJustSearchFilter();
  } else {
    let tempVal = e.target.innerText;
    console.log(tempVal);
    inputField.value = tempVal;
    suggestionBox.style.visibility = "hidden";
    idkJustSearchFilter();
  }
});
showImages(arr);
showSuggestions(arr);
