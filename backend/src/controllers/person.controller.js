import * as personModel from "../models/person.model.js";

export function getAll(req, res) {
  const persons = personModel.findAll();

  res.json(persons);
}

export function getById(req, res) {
  //
}

export function create(req, res) {
  const person = personModel.insert(req.body);

  if (person.changes > 0) {
    return res.status(201).json({ message: "Person created." });
  }

  return res.status(400).json({ message: "Error registerign the person." });
}

export function update(req, res) {
  //
}

export function destroy(req, res) {
  //
}
