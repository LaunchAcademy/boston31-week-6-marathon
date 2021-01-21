const Model = require("./Model")

class Event extends Model {
  static get tableName() {
    return "events"
  }

  static get relationMappings(){
    const Category = require('./Category.js')
    const Guest = require('./Guest.js')
    const Invitation = require('./Invitation.js')

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'events.categoryId',
          to: 'categories.id'
        }
      },
      guests: {
        relation: Model.ManyToManyRelation,
        modelClass: Guest,
        join: {
          from: "events.id",
          through: {
            from: "invitations.eventId",
            to: "invitations.guestId"
          },
          to: "guests.id"
        }
      },
      invitations: {
        relation: Model.HasManyRelation,
        modelClass: Invitation,
        join: {
          from: "events.id",
          to: "invitations.eventId"
        }
      }
    }
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
