const Model = require("./Model")

class Event extends Model {
  static get tableName() {
    return "events"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 255 },
        categoryId: { type: ["integer", "string"] }
      }
    }
  }
}

module.exports = Event
