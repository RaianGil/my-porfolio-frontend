export const nameGenerator = () => {
  const stringCode = ['r','a','i','n','m','c','h','e','l','g']
  const random = Array.from({length: 3}, () => Math.floor(Math.random() * 1000)).join('')
  
  return `${random}`.split('').map(number => Math.round(Math.random()) ? 
    stringCode[Number(number)] : number).join('')
}