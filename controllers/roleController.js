/** @format */

"use strict";

const Role = require("../models/roleModel");

module.exports = {
  insertView: async (req, res) => {
    const role = await Role.find();
    res.status(200).render("role", {
      layout: "layouts/newadminlayout",
      role,
      title: "Role Management",
    });
  },
  insert: async (req, res) => {
    let permission = [];

    if (req.body.postPermit) {
      permission.push(1);
    }
    if (req.body.categoryPermit) {
      permission.push(2);
    }
    if (req.body.rolePermit) {
      permission.push(3);
    }
    if (req.body.userPermit) {
      permission.push(4);
    }

    const data = new Role({
      role: req.body.role,
      roleId: req.body.roleId,
      permission: permission,
      description: req.body.description,
    });
    data
      .save()
      .then(() => res.redirect("/administrator/insert-role"))
      .catch((err) => console.log(err));
  },
  edit: async (req, res) => {
    let permission = [];

    if (req.body.postPermit) {
      permission.push(1);
    }
    if (req.body.categoryPermit) {
      permission.push(2);
    }
    if (req.body.rolePermit) {
      permission.push(3);
    }
    if (req.body.userPermit) {
      permission.push(4);
    }

    await Role.updateOne(
      { _id: req.body._id },
      {
        role: req.body.role,
        roleId: req.body.roleId,
        permission: permission,
        description: req.body.description,
      }
    );
    res.redirect("/administrator/insert-role");
  },
  delete: async (req, res) => {
    await Role.findByIdAndDelete({
      _id: req.params._id,
    }).exec();
    res.redirect("/administrator/insert-role");
  },  
};
