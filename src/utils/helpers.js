export const textTruncate = (text, num) => {
  if (num >= text.length) return text
  let result = ""
  const words = text.split(" ")

  let i = 0
  while (i < words.length) {
    if (result.length + words[i].length + 1 > num) {
      break
    } else {
      result += ` ${words[i]}`
    }
    i++
  }
  if (result[result.length - 1] === ".") {
    result += ".."
  } else {
    result += "..."
  }
  return result
}

export const addDays = (date, days) => {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}
