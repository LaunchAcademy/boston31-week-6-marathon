const Model = require("./Model")

class Invitation extends Model {
  static get tableName(){
    return "invitations"
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        eventId: { type: ["integer", "string"] },
        guestId: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { Event, Guest } = require("./index")

    return {
      event: {
        relation: Model.BelongsToOneRelation,
        modelClass: Event,
        join: {
          from: "invitations.eventId",
          to: "events.id"
        }
      },
      guest: {
        relation: Model.BelongsToOneRelation,
        modelClass: Guest,
        join: {
          from: "invitations.guestId",
          to: "guests.id"
        }
      }
    }
  }
 }

module.exports = Invitation