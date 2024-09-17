const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
      title: 'Book',
      author: 'Name3'
    },
    {
      title: 'Book2',
      author: 'Name4'
    },
    {
      title: 'Book',
      author: 'Name5'
    },
    {
      title: 'Book2',
      author: 'Name6'
    }
  ]

const getTheTitles = function(books) {
    const titles=[]
    books.forEach(element => {
        titles.push(element.title)
    });
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;

console.log(getTheTitles(books))
