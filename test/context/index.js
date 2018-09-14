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
  async _init() {
    await ensurePath(join(this.TEMP, 't.file'))
  }
  async readFixtureStructure() {
    const res = await readDirStructure(this.DIR)
    return res
  }
  get TEMP() {
    return 'test/temp'
  }
  async read(path) {
    const rs = createReadStream(path)
    const res = await collect(rs)
    return res
  }
  get DIR() {
    return resolve(FIXTURE, 'dir')
  }
  async _destroy() {
    await rm(this.TEMP)
  }
}