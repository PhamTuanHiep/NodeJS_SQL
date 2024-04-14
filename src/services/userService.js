import db from "../models/index";
import bcrypt from "bcrypt";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};

      let isExist = await checkUserEmail(email);
      if (isExist) {
        //user already exist
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true,
          // attributes: {
          //   // include: ["email", "roleId"], //lay column pros
          //   // exclude: ["password"], //bo column props
          // },
        });
        if (user) {
          //compare password
          //pass truyeefn vao, hash co san
          //password: plain text: chu thuong
          //user.password: encrypt: ma hoa
          // let check = bcrypt.compareSync(password, user.password);
          let check = await bcrypt.compare(password, user.password);

          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Ok";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage =
          "Your's Email isn't exist in your system. Plz try other email";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin,
};
