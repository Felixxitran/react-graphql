import { Post } from './entities/Post'
import { MikroORM } from '@mikro-orm/core'
import path from 'path'
//setting configuration of mikroORM
export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'lireddit',
  type: 'postgresql',
  debug: process.env.NODE_ENV !== 'production',
} as Parameters<typeof MikroORM.init>[0] //setting type to MikroORM.init
