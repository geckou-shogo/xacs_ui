export const $contentIconClassName = (contentType: string): string => {
  const type = contentType.split('/')[0]
  switch (type) {
    case 'image':
      return 'bi-card-image'
    case 'documnet':
      return 'bi-file-text'
    case 'pdf':
      return 'bi-file-earmark-pdf'
    default:
      return 'bi-file-earmark'
  }
}

export const $updateDate = (update: string): string => {
  const doubleDigitNumber = (num: number) => `0${num}`.slice(-2)
  const dateData = new Date(update)
  const year     = dateData.getFullYear()
  const month    = doubleDigitNumber(dateData.getMonth() + 1)
  const day      = doubleDigitNumber(dateData.getDate())
  const hours    = doubleDigitNumber(dateData.getHours())
  const minutes  = doubleDigitNumber(dateData.getMinutes())
  const seconds  = doubleDigitNumber(dateData.getSeconds())
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export const $fileSizeUnit = (fileSize: number): string => {
  const kb = 1024
  const mb = Math.pow(kb, 2)
  const gb = Math.pow(kb, 3)
  const tb = Math.pow(kb, 4)
  const pb = Math.pow(kb, 5)
  const round = (unit: number) => {
    return Math.round(fileSize / unit * 100.0) / 100.0
  }

  if (fileSize >= pb) {
    return `${round(pb)}PB`
  } else if (fileSize >= tb) {
    return `${round(tb)}TB`
  } else if (fileSize >= gb) {
    return `${round(gb)}GB`
  } else if (fileSize >= mb) {
    return `${round(mb)}MB`
  } else if (fileSize >= kb) {
    return `${round(kb)}KB`
  } else {
    return `${fileSize}バイト`
  }
}