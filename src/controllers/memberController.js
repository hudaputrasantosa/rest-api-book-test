const Loan = require("../models").Loan;

const Member = require("../models").Member;

const getMembers = async (req, res) => {
  try {
    let members = await Member.findAll();
    if (!members) {
      res
        .status(404)
        .json({ status: "Not Found", message: "Members not found" });
    }
    res.status(200).json({
      status: "OK",
      message: "Success find data",
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};
const getBookByMember = async (req, res) => {
  try {
    const members = await Member.findAll({
      include: {
        model: Loan,
        where: {
          status: "ongoing",
        },
      },
    });

    res.status(200).json({
      status: "OK",
      message: "Success find data",
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};

const createMember = async (req, res) => {
  try {
    await Member.create({
      name: req.body.name,
      sex: req.body.sex,
      address: req.body.address,
      phone: req.body.phone,
    });

    res.status(200).json({
      status: "OK",
      message: "Success add member",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};

module.exports = { getMembers, getBookByMember, createMember };
