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