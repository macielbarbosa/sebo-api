export const getFileString = readStream => {
  return new Promise(resolve => {
    const chunks = []
    readStream.on('data', function (chunk) {
      chunks.push(chunk)
    })
    readStream.on('end', function () {
      const buffer = Buffer.concat(chunks)
      resolve(buffer)
    })
  })
}
