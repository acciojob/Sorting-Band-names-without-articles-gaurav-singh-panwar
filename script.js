//your code here

let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Red Hot Chili Peppers', 'Anthrax'];

// Function to remove articles from band names
function removeArticles(name) {
  // Regular expression to match articles: 'a', 'an', 'the'
  const articleRegex = /^(a|an|the)\s/i;
  return name.replace(articleRegex, '');
}

// Sorting the band names in lexicographic order (without articles)
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Creating the HTML list
const ul = document.createElement('ul');
ul.id = 'band';

bandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Appending the list to the document body
document.body.appendChild(ul);
