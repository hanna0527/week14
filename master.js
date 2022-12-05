var Links = {
  setColor: function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};

var Body = {
  setColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  setBGColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }

};

function linkButton(word1, word2) {
  if (night_day2.value == word1) {
    night_day2.value = word2;
  }
  if (night_day.value == word1) {
    night_day.value = word2;
  }
}



function nightDayHandler(self) {
  if (self.value == 'night') {
    Body.setBGColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
    linkButton('night', 'day');


  } else {
    Body.setBGColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
    linkButton('day', 'night');


  }
}
