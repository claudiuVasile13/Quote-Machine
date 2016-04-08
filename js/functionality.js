var quotesObject= {
  "quotes": [
    {
      "quote": "The best preparation for tomorrow is doing your best today.",
      "author": "H. Jackson Brown, Jr."
    },
    {
      "quote": "Nothing is impossible the world itself says 'I'm possible'!",
      "author": "Andrey Hepburn"
    },
    {
      "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind of the present moment.",
      "author": "Buddha"
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      "quote": "Aim for the moon. If you miss, you may hit a star.",
      "author": "W. Clement Stone"
    },
    {
      "quote": "Education is the most powerful weapon which you can use to change world.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "Education is not preparation for life; education is life itself",
      "author": "John Dewey"
    },
    {
      "quote": "The great aim of education is not knowledge but action.",
      "author": "Herbert Spencer"
    },
    {
      "quote": "Life is really simple, but we insist on making it complicated.",
      "author": "Confucius"
    },
    {
      "quote": "Life isn't about finding yourself. Life is about creating yourself.",
      "author": "George Bernard Shaw"
    },
    {
      "quote": "We do not remember days, we remember moments",
      "author": "Cesare Pavese"
    },
    {
      "quote": "Life is not a problem to be solved, but a reality to be experienced.",
      "author": "Soren Kierkegaard"
    },
    {
      "quote": "When you're curious, you find lots of interesting things to do.",
      "author": "Walt Disney"
    },
    {
      "quote": "The only way to have a friend is to be one.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts",
      "author": "Winston Churchill"
    },
    {
      "quote": "Action is the foundational key to all success.",
      "author": "Pablo Picasso"
    },
    {
      "quote": "Try not to become a man of success, but rather try to become a man of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Discipline is the bridge between goals and accomplishment.",
      "author": "Jim Rohn"
    },
    {
      "quote": "The only true wisdom is in knowing you know nothing.",
      "author": "Socrates"
    },
    {
      "quote": "If you change the way you look at things, the things you look at change.",
      "author": "Wayne Dyer"
    }
]};

var random = Math.floor(Math.random()*20);

$(document).ready(function() {
  
  $('#text').html("<i class=\"fa fa-quote-left\"></i>" + quotesObject.quotes[random].quote + "<i class=\"fa fa-quote-right\"></i>");
  $('h4').text(quotesObject.quotes[random].author);  
  
  $('#quote-button').on('click', function() {
    random = Math.floor(Math.random() * 20);
    $('#text').html("<i class=\"fa fa-quote-left\"></i>" + quotesObject.quotes[random].quote + "<i class=\"fa fa-quote-right\"></i>");
  $('h4').text(quotesObject.quotes[random].author);
  });

  $('#twitter').on('click', function() {
      window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + quotesObject.quotes[random].quote + '" - ' +  quotesObject.quotes[random].author);
  });
  
});