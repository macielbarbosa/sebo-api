export const montarTagsCriadasMap = ({ tags, idsTagsParaCriar }) => {
  const tagsCriadasIdMap = {}
  if (Array.isArray(tags)) {
    tags.forEach((tag, index) => {
      const idNoFront = idsTagsParaCriar[index]
      tagsCriadasIdMap[idNoFront] = tag.id
    })
  }
  return tagsCriadasIdMap
}
