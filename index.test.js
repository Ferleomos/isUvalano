var isUvalano = require('./index')

describe('Testing isGeo', function () {
  it('should return true passing Uvalano', function () {
    expect(isUvalano('Uvalano')).toBeTruthy()
  })

  it('should return false passing Google', function () {
    expect(isUvalano('Goolge')).toBeFalsy()
  })
})
