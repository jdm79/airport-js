describe("Feature Test", function() {

  var airport
  var plane

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  })

  it("planes can land", function() {
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  })

  it("planes can take off", function() {
    plane.land(airport)
    plane.takeoff() 
    expect(airport.planes()).not.toContain(plane)
  })
})