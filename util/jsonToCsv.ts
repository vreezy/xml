// const items = json3.items

const replacer = (key: string, value: string) => value === null ? '' : value // specify how you want to handle null values here


export function jsonToCsv(items: any[]): string {
  const header = Object.keys(items[0])

  const csv = [
    header.join(';'), // header row first
    ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))
  ].join('\r\n')
  
  console.log(csv)

  return csv
}

