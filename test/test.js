import _ from 'lodash'
import qs from 'qs'
import { wow } from 'okok'

const a = {
  omg: 1,
}

const b = { wowza: 1 }

console.log(a.omg, b)

describe.only('testing something', function () {
  it.only('is something', function () {
    const aThing = 'something'
    expect(aThing).to.equal('something')
  })
})
