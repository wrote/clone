/* yarn example/ */
import clone from '../src'
import readDirStructure from '@wrote/read-dir-structure'

const printContent = async (path) => {
  const ds = await readDirStructure(path)
  console.log(JSON.stringify(ds, null, 2))
}

(async () => {
  // 0. CHECK what is being cloned.
  console.log('Directory being cloned:')
  await printContent('example/dir')

  // 1. CLONE the directory.
  await clone('example/dir', 'example/temp')

  // 1. VALIDATE that the directory was cloned.
  console.log('Temp directory contents:')
  await printContent('example/temp')
})()