import ensurePath from '@wrote/ensure-path'
import readDirStructure from '@wrote/read-dir-structure'
import makePromise from 'makepromise'
import { createReadStream, createWriteStream, lstat } from 'fs'
import { join, basename } from 'path'

/**
 * Clone a file.
 * @param {string} from Path to the file which to clone.
 * @param {string} to Path to the file where to clone.
 */
const cloneFile = async (from, to) => {
  const rs = createReadStream(from)
  const ws = createWriteStream(to)
  rs.pipe(ws)
  await Promise.all([
    new Promise((r, j) => {
      rs.on('close', r).on('error', j)
    }),
    new Promise((r, j) => {
      ws.on('close', r).on('error', j)
    }),
  ])
}

/**
 * Clones a directory.
 * @param {string} from Path of the directory being cloned.
 * @param {string} to Path to the cloned directory (not its parent!).
 */
const cloneDir = async (from, to) => {
  await ensurePath(join(to, 'path.file'))
  const { content } = await readDirStructure(from)
  const pr = Object.keys(content).map(async (k) => {
    const { type } = content[k]
    const p = join(from, k)
    const pt = join(to, k)
    if (type == 'Directory') {
      await cloneDir(p, pt)
    } else if (type == 'File') {
      await cloneFile(p, pt)
    }
  })
  await Promise.all(pr)
}

/**
 * Clone a file or directory.
 * @param {string} path Path to the file or directory to clone.
 * @param {string} to Path to the directory to contain the file or directory being cloned (not the path to the cloned entity).
 */
const clone = async (path, to) => {
  const s = await makePromise(lstat, path)
  const b = basename(path)
  const t = join(to, b)

  if (s.isDirectory()) {
    await cloneDir(path, t)
  } else {
    await ensurePath(t)
    await cloneFile(path, t)
  }
}

export default clone