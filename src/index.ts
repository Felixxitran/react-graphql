import { MikroORM } from '@mikro-orm/core'
import { Post } from './entities/Post'
import mikroconfig from './mikro-orm.config'
const main = async () => {
  const orm = await MikroORM.init(mikroconfig)
  const post = orm.em.create(Post)
  await orm.em.persistAndFlush(post)
  console.log('-----------sql2---------')
  await orm.em.nativeInsert(Post)
}
main().catch((error) => {
  console.log(error)
})
console.log('app run successfully')
