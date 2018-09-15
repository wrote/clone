import { equal } from 'zoroaster/assert'
import Context from '../context'
import clone from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof clone, 'function')
  },
}

export default T