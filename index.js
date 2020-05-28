class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return Math.PI * this.diameter 
  }

  get area(){
    return Math.PI * (this.radius ** 2)
  }

  set diameter(newDi){
    this.radius = newDi / 2
  }

  set circumference(newCirc){
    this.radius = (newCirc / Math.PI) / 2
  }
}

// Building on this concept, we're going to build our own shape calculator!

// - First, let's create a `class` of `Circle`
// - `Circle` will accept 1 parameter, `radius`, and use `this.radius` to store the
//   value
// - Use `Math.PI` to get an accurate measurement of [pi][pi] (&pi;)
// - Define getter methods for `diameter`, `circumference`, and `area` which
//   will calculate each value using `this.radius` and pi
// - Define setter methods for `diameter`, `circumference`, and `area` which
//   will accept values for each calculation, calculate the _radius_ based on the
//   input value and _set_ `this.radius` accordingly

// For reference, here are the formulas for calculating diameter, circumference and
// area:

// - Diameter = radius &bull; 2
// - Circumference = &pi; &bull; diameter
// - Area = &pi; &bull; radius<sup>2</sup>

// > Don't forget about [PEMDAS](https://en.wikipedia.org/wiki/Order_of_operations)!

// All instances of `Circle` should be able to calculate the `diameter`,
// `circumference`, and `area` based on the given `radius`. All instances should
// also be able to set `this.radius` by setting a value to `diameter`,
// `circumference`, or `area`.