const Model = require("./Model")

class Invitation extends Model {
  static get tableName(){
    return "invitations"
  }
}

module.exports = Invitation