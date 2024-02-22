const logger = require("../config/logger");

const Loan = require("../models").Loan;
const Member = require("../models").Member;

const createLoan = async (req, res) => {
  try {
    let checkIsPenalty = 0;
    let member = await Member.findOne({
      where: {
        id: req.body.id_member,
      },
    });

    if (member) {
      checkIsPenalty = member.isPenalty;
    }

    // console.log(checkisPenalty);

    if (checkIsPenalty) {
      res.status(200).json({
        status: "OK",
        message: "Anda masih dalam Hukuman",
      });
    } else {
      const loanMember = await Loan.findAndCountAll({
        where: {
          id_member: req.body.id_member,
          status: "ongoing",
        },
      });

      if (loanMember.count <= 1) {
        await Loan.create({
          id_member: req.body.id_member,
          id_book: req.body.id_book,
          loan_date: new Date(),
          deadline: new Date().setDate(new Date().getDate() + 7),
          status: "ongoing",
        });

        res.status(201).json({
          status: "OK",
          message: "Success loan book",
        });
      } else {
        res.status(200).json({
          status: "OK",
          loan_ongoing: `${loanMember.count} buku`,
          message: "Anda dilarang meminjam buku lebih dari 2",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};

const returnBook = async (req, res) => {
  try {
    const currentDate = new Date();
    let penaltyMessage = "";

    isMemberLoan = await Loan.findOne({
      where: {
        id_member: req.body.id_member,
        id_book: req.body.id_book,
        status: "ongoing",
      },
    });

    if (!isMemberLoan) {
      res.status(200).json({
        status: "OK",
        message: "Anda belum pernah menyewa buku tersebut",
      });
    }

    const checkPenalty = currentDate > isMemberLoan.deadline;
    if (checkPenalty) {
      await Member.update(
        { isPenalty: 1 },
        {
          where: {
            id: req.body.id_member,
          },
        }
      );

      penaltyMessage = "Dan anda terkena penalti/hukuman ";
    }

    await isMemberLoan.update({
      return_date: currentDate,
      status: "done",
    });
    res.status(200).json({
      status: "OK",
      message: `Selesai mengembalikan buku ${penaltyMessage}`,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: `Error at ${error}`,
    });
  }
};

module.exports = { createLoan, returnBook };
