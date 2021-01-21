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

  static get relationMappings() {
    const { Invitation, Event } = require("./index")

    return {
      events: {
        relation: Model.ManyToManyRelation,
        modelClass: Event,
        join: {
          from: "guests.id",
          through: {
            from: "invitations.guestId",
            to: "invitations.eventId"
          },
          to: "events.id"
        }
      },
      invitations: {
        relation: Model.HasManyRelation,
        modelClass: Invitation,
        join: {
          from: "guests.id",
          to: "invitations.guestId"
        }
      }
    }
  }
}

module.exports = Guest