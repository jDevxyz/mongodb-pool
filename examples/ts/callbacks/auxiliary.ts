import { Mongo } from '../../../mongodb-pool/callback_api'

// Runs the serverStatus command against MongoDB and looks at
// the current connections. Notice how the current connections
// never exceed our previously given pool size of 3.
export function helper() {
  Array(10).fill(0).forEach(_ => {
    getMongoServerStatus()
  })
}

function getMongoServerStatus() {
  const db = Mongo.getDb()
  db.command({ serverStatus: 1 }, (err, status) => {
    console.log(status.connections)
  })
}
