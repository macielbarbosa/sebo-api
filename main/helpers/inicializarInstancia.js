export const inicializarInstancia = (ctx, instance, cb) => {
  ctx.args.instancia = ctx.instance
  cb()
}
