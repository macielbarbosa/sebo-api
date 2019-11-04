import { InternalError } from 'main/erros'

import { beforeCreatePreset } from './beforeCreatePreset'
import { beforeUpdatePreset } from './beforeUpdatePreset'

const handleOnSavePreset = (entidade, contexto) => {
  if (contexto.data && contexto.currentInstance) beforeUpdatePreset(entidade, contexto)
  else if (contexto.instance) beforeCreatePreset(entidade, contexto)
}

export const OnSavePreset = entidade => (contexto, cb) => {
  try {
    handleOnSavePreset(entidade, contexto)
    cb()
  } catch (error) {
    if (error.status === 422) {
      cb(error)
    } else {
      console.error(error)
      cb(new InternalError())
    }
  }
}
