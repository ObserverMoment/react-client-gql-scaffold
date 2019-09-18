// Takes a snake case js variable name and makes it normal.
// Won't work with acronyms...
function unSnakeText(variable) {
  const text = variable
    .replace( /([A-Z])/g, " $1" )
    .toLowerCase()
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export { unSnakeText }
