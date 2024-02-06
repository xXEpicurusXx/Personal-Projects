var one = $('.one'),
    two = $('.two'), 
    button1 = $('.button1'),
    button2 = $('.button2')
        
var tl = new TimelineMax();

// starting postion
const play = function (){
    tl.to(two, 0.0, {rotation:0})
.to(two, 0, {rotation:0})
.to(two, 0, {rotation:0, marginTop:600})
.to(two, 0.8, {rotation:55})
.to(two, 1, {rotation:20})
.to(two, 1.5, {rotation:60, marginTop:1700})
}

play()
