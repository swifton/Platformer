function line(start, end, color, context) {
  context = context || mainContext;
  drawLine(start[0], start[1], end[0], end[1], color, context);
}

function tetragon(LT, RT, LB, RB, color, context) {
  line(LT, RT, color, context);
  line(LB, RB, color, context);
  line(LT, LB, color, context);
  line(RT, RB, color, context);
}

function rectangle(LT, lent, height, color, context) {
  var LB = add(LT, [0, height]);
  var RB = add(LB, [lent, 0]);
  var RT = add(LT, [lent, 0]);

  tetragon(LT, RT, LB, RB, color, context);
}

// shitty function, rewrite or delete
function grid(diameter, context) {
  for (var i = 0; i <= wid/diameter; i++) {
    drawLine(i * diameter, 0, i * diameter, heit, context);
  }

  for (var i = 0; i < heit/diameter; i++) {
    drawLine(0,i * diameter, wid, i * diameter);
  }
}
