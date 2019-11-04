import app from 'server/server'

export const criarTags = async tags => {
  const { Tag } = app.models
  if (tags.length > 0) return Tag.create(tags)
  else return
}
