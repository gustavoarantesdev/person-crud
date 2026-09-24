import * as personModel from "../models/person.model.js";

export function getAll(req, res) {
  const persons = personModel.findAll();

  res.json(persons);
}
