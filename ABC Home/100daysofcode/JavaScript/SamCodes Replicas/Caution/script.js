var one = $('.one'),
    two = $('.two'), 
    button1 = document.querySelector(`button1`)
    // button1 = $('.button1'),
    // button2 = $('.button2'),
    // button3 = $('.button3'),
    // button4 = $('.button4'), 
    // button5 = $('.button5')


var tl = new TimelineMax();

tl.to(two, .8, {rotation:55})
.to(two, 1, {rotation:20})
.to(two, 1.5, {rotation:60, marginTop:700})

tl.pause();

button1.addeventlistener(`click`, () => drop());
// button2.click(replay);
// button3.click(reverse);
// button4.click(pause);
// button5.click(resume);

function drop () {
  tl.button1(); 
}

function replay () {
  tl.restart();
}

function reverse () {
  tl.reverse();
}

function pause () {
  tl.pause();
}

function resume () {
  tl.resume();
}









