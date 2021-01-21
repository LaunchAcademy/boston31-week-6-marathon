const Model = require("./Model")

class Category extends Model {
  static get tableName() {
    return "categories"
  }

  static relationMappings(){
    const Event = require('./Event')
    return{
      events: {
        relation: Model.HasManyRelation,
        modelClass: Event,
        join: {
          from: 'categories.id',
          to: 'events.categoryId'
        }
      }
    }
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
