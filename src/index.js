import { debuglog } from 'util'

const LOG = debuglog('@wrote/clone')

/**
 * A package to clone a file or directory.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
export default async function clone(config) {
  const {
    type,
  } = config
  LOG('@wrote/clone called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */
