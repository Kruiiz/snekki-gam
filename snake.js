class Snake {
  
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
    this.num =10
    this.bg= [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()] 
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
   
getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(200);
    return Math.floor(Math.random() * (200 - 0 + 1)) + 0;
}
  
  update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head); 
  }
  
  grow(num) {
  	let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
    frameRate(this.num + 3)
    this.num= this.num + 3
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
    background(this.bg)  
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.bg= [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
      this.grow(20);
      return true;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }    
  }
}
