export const transformArrayObjectToArrayString = (items: Array<Object>) => {
  return items.map((item: any) => {
    return item.url
  })
}
