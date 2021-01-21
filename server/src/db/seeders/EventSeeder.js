/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Category, Event } from "../../models/index.js"

class EventSeeder {
  static async seed() {
    const birthday = await Category.query().findOne({ name: "Birthday" })
    const wedding = await Category.query().findOne({ name: "Wedding" })

    const eventsData = [
      {
        name: "Maxwell's 50th",
        categoryId: birthday.id
      },
      {
        name: "Rose's First Birthday",
        description: "Celebrate the birthday girl's first birthday!",
        categoryId: birthday.id
      },
      {
        name: "Dana and Sam's Wedding",
        description: "The event of the year!",
        categoryId: wedding.id
      }
    ]

    for (const singleEventData of eventsData) {
      const currentEvent = await Event.query().findOne(singleEventData)
      if (!currentEvent) {
        await Event.query().insert(singleEventData)
      }
    }
  }
}

export default EventSeeder