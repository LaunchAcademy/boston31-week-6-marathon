/* eslint-disable no-console */
import { connection } from "../boot.js"

import CategorySeeder from "./seeders/CategorySeeder.js"
import EventSeeder from "./seeders/EventSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding categories...")
    await CategorySeeder.seed()

    console.log("seeding events...")
    await EventSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder