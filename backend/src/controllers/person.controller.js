import * as personModel from "../models/person.model.js";

export function getAll(req, res) {
  const persons = personModel.findAll();

  res.json(persons);
}

export function getById(req, res) {
  //
}

export function create(req, res) {
  //
}

export function update(req, res) {
  //
}

export function destroy(req, res) {
  //
}
