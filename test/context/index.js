import { join } from 'path'
import readDirStructure from '@wrote/read-dir-structure'

const FIXTURE = 'test/fixture'

/**
 * A testing context for the package.
 */
export default class Context {
  async readFixtureStructure() {
    const res = await readDirStructure(this.DIR)
    return res
  }
  get DIR() {
    return join(FIXTURE, 'dir')
  }
}