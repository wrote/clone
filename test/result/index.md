// clones a directory
test/fixture/dir

/**/

// clones a file
test/fixture/dir/1.md

/**/

// throws an error when file does not exist
test/fixture/dir/does-not-exist.txt

/* error */
ENOENT: no such file or directory, lstat 'test/fixture/dir/does-not-exist.txt'
/**/