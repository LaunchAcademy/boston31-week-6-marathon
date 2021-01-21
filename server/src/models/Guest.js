const Model = require("./Model")

class Guest extends Model {
  static get tableName(){
    return "guests"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { type: "string"},
        lastName: { type: "string"}
      }
    }
  }
}

module.exports = Guest