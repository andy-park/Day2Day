function firstKind() {
  console.log("I do stuff.");
}

firstKind();

var secondKind = function() {
  console.log("I also do stuff.");
};

secondKind();

app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/', (req, res, next) => {
  res.render('also_index');
});

var someObject = {
  apple: "Red, gold, or yellow fruit (sometimes green), tasty. Great in lunches.",
  doStuff: function(x) {
    return x + 10;
  }
};

var someBigObj = {
  key: {
    someOtherKey: {
      value: 3
    }
  }
}
someObject.doStuff(10);

var mathObj = {
  add: function(x, y) {
    return x + y;
  },
  sub: function(x, y) {
    return x - y;
  },
  mul: function(x, y) {
    return x * y;
  },
  div: function(x, y) {
    return x / y;
  },
  pi: 3.1415926535
};


mathObj.add(2, 2) * mathObj.pi;