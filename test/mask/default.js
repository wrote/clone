import { ok, equal, deepEqual } from 'zoroaster/assert'
import { makeTestSuite } from 'zoroaster'
import readDirStructure from '@wrote/read-dir-structure'
import { basename, join } from 'path'
import makePromise from 'makepromise'
import { lstat } from 'fs'
import Context from '../context'
import clone from '../../src'
import TempContext from 'temp-context'

const ts = makeTestSuite('test/result', {
  /**
   * Get results.
   * @param {string} input
   * @param {Context} context
   * @param {TempContext} tempContext
   */
  async getResults(input, { readFixtureStructure }, { TEMP, read }) {
    const s = await makePromise(lstat, input)
    await clone(input, TEMP)
    const p = basename(input)
    const j = join(TEMP, p)

    if (s.isDirectory()) {
      const expected = await readFixtureStructure()
      const res = await readDirStructure(j)
      deepEqual(res, expected)
    } else if (s.isFile()) {
      const expected = await read(input)
      const res = await read(j)
      ok(res)
      equal(res, expected)
    }
  },
  getThrowsConfig(input, ) {
    return {
      fn: clone,
      args: input,
    }
  },
  context: [Context, TempContext],
})

export default ts