// find time 
function found(){
    // current time - saved times = find time
    // find time to.Fixed(to get 2 number next -(.)- )
    const findTime = new Date().getTime() - window.startTime;
    const findSeconds = (findTime / 1000 ).toFixed(2);
    //alert and call newGame function again.
    alert("Found in " + findSeconds + " seconds")
    newGame()
}

// when page is loaded this function is executed
function newGame(){
    // save start time in milliesecconds
    window.startTime = new Date().getTime() 
    // width and height of web page (body)
    const maxWidth = document.body.clientWidth - 45;
    const maxHeight = document.body.clientHeight -50;
    // random x and y position 
    const x = Math.round(Math.random() * maxWidth);
    const y = Math.round(Math.random() * maxHeight);
    // select image
    const head = document.querySelector('.head');
    // set x and y positions
    head.style.left = x + 'px';
    head.style.top = y + 'px';
}
newGame()


