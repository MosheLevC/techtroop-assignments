const person = {
  hungry: true,

  feed: function (hungry) {
    if (hungry) {
      hungry = false;
      console.log("Im no longer hungry!");
    }
  },
};

person.feed(true); //should log "I'm no longer hungry"
