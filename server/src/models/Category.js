const Model = require("./Model")

class Category extends Model {
  static get tableName() {
    return "categories"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 50 },
      }
    }
  }
}

module.exports = Category
