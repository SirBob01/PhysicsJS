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
	this.vector = new Vector(x, y)
	this.width = width
	this.height = height
}

function Circle(x, y, r) {
	this.vector = new Vector(x, y)
	this.r = r
}

function collideAABB(a, b) {
	if(a.vector.x + a.width/2.0 < b.vector.x - b.width/2.0 && a.vector.y + a.height/2.0 < b.vector.y - b.height/2.0) {
		return true
	}
	return false
}

function collideCircle(a, b) {
	vec = a.vector.sub(b.vector)
	d = vec.magnitudeSquared()
	if(d < (a.r*a.r + b.r*b.r)) {
		return true
	}
	return false
}
