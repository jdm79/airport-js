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
    spyOn(airport, 'isStormy').and.returnValue(false)
    plane.land(airport)
    plane.takeoff() 
    expect(airport.planes()).not.toContain(plane)
  })

  it("blocks takeoff when weather is stormy", function() {
    plane.land(airport)
    spyOn(airport, 'isStormy').and.returnValue(true)
    expect(function() {plane.takeoff()}).toThrowError('cannot take off during storm')
    expect(airport.planes()).toContain(plane)
  })
})