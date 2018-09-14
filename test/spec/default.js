import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import clone from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof clone, 'function')
  },
  async 'calls package without error'() {
    await clone()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await clone({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T