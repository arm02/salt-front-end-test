export class Network {
  id: number,
  title: string,
  createdBy: number,
  views: number,
  type: string,
  path: string,
  createdAt: date,
  updatedAt: date,
  user: {
    id: number,
    username: string,
    email: string,
    password: string,
    fullName: string,
    profilePhoto: string,
    status: string,
    createdAt: date,
    updatedAt: date
    }
}