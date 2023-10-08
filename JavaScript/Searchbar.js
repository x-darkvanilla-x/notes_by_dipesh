const searchBar = document.getElementById("search-bar");
const books = document.querySelectorAll(".book");

searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();

    books.forEach(book => {
        if (book.id.includes(searchTerm)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});

function new_search()
{
  const searchTerm = searchBar.value.toLowerCase();

    books.forEach(book => {
        if (book.id.includes(searchTerm)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

const profile = [
    'https://64.media.tumblr.com/6f4960c7917ac771c875599fee14fb28/278ce70e95e440e1-dc/s640x960/e63b2e18ce8c685537da2a42f951b1b097cde443.jpg',
    'https://64.media.tumblr.com/7d9e61454c04e6bc61ef85d87a6a990c/278ce70e95e440e1-49/s640x960/21227b5a2c1c6a75160c578dfb28bea8d6b7ed0e.jpg',
    'https://64.media.tumblr.com/3a4d5a28458e21ac778b240d58ab085a/5c496296287b15e4-78/s640x960/4fa1b50c499d3b7c2b05ba14e7a670381ead0ed4.jpg'
];

function change_dp()
{
    let r =  Math.floor(Math.random() * 3);
    document.getElementById('dp').style.backgroundImage =  `url(${profile[r]})`;
}

setInterval(change_dp, 2000)



// search bar auto correct

function autocomplete(inp, arr) {

  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              new_search();
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var countries = ['python', 'html','css','javascript','operating system', 'computer networks','database','powerpoint','excel','word'];

autocomplete(document.getElementById("search-bar"), countries);
