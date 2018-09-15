import { resolve, join } from 'path'
import readDirStructure from '@wrote/read-dir-structure'
import ensurePath from '@wrote/ensure-path'
import rm from '@wrote/rm'
import { collect } from 'catchment'
import { createReadStream } from 'fs'

const FIXTURE = resolve(__dirname, '../fixture')

/**
 * A testing context for the package.
 */
export default class Context {
  async readFixtureStructure() {
    const res = await readDirStructure(this.DIR)
    return res
  }
  get DIR() {
    return resolve(FIXTURE, 'dir')
  }
}