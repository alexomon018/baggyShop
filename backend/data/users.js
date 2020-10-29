import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aleksa Mitic',
    email: 'aleksa@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Andjelija Vasovic',
    email: 'andja@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Aleksandar Santai',
    email: 'santa@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
