function Vector(x, y) {
	this.x = x
	this.y = y
	this.add = function(v) {return new Vector(this.x + v.x, this.y + v.y)}
	this.sub = function(v) {return new Vector(this.x - v.x, this.y - v.y)}
	this.magnitudeSquared = function() {return (this.x*this.x + this.y*this.y)}
	this.magnitude = function() {return Math.sqrt(this.magnitudeSquared())}
	this.return = function() {return [this.x, this.y]}
}

function AABB(x, y, width, height) {
	this.pos = new Vector(x, y)
        this.vel = new Vector(0, 0)
	this.width = width
	this.height = height
}

function Circle(x, y, r) {
	this.pos = new Vector(x, y)
        this.vel = new Vector(0, 0)
	this.r = r
}

function collideAABB(a, b) {
	if(a.pos.x + a.width/2.0 < b.pos.x - b.width/2.0 && a.pos.y + a.height/2.0 < b.pos.y - b.height/2.0) {
		return true
	}
	return false
}

function collideCircle(a, b) {
	vec = a.pos.sub(b.pos)
	d = vec.magnitudeSquared()
	if(d < (a.r*a.r + b.r*b.r)) {
		return true
	}
	return false
}
