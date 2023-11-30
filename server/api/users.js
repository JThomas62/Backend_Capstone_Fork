const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { requireUser } = require("./utils");
const {
  getAllUsers,
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUserById,
  getUserByUsername,
} = require("../db");

usersRouter.post("/", async (req, res, next) => {
  const { name, email, username, password, status } = req.body;

  const userData = {};
  userData.name = name;
  userData.email = email;
  userData.username = username;
  userData.password = password;
  userData.status = status;

  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    console.log(`Trying to createUser ${userData}`);
    const queriedUser = await getUserByUsername(username);
    if (queriedUser) {
      res.status(401);
      next({
        name: "UserExistsError",
        message: "A user by that username already exists",
      });
    } else if (password.length < 8) {
      res.status(401);
      next({
        name: "PasswordLengthError",
        message: "Password Too Short!",
      });
    } else {
      const user = await createUser(userData);
      if (!user) {
        next({
          name: "UserCreationError",
          message: "There was a problem registering you. Please try again.",
        });
      } else {
        const token = jwt.sign(
          { id: user.id, username: user.username },
          JWT_SECRET,
          { expiresIn: "1w" }
        );
        res.send({ user, message: "you're signed up!", token });
      }
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await getAllUsers();

    res.send({
      allUsers,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);

    res.send({ user });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, email, username, password, status } = req.body;

  try {
    const updatedUser = await updateUser(
      id,
      name,
      email,
      username,
      password,
      status
    );

    res.send({ user: updatedUser });
  } catch ({ name, message }) {
    console.error({ name, message });
    next({ name, message });
  }
});

usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await deleteUserById(id);

    if (!user) {
      next({
        name: "NotFound",
        message: `Cannot find user with ID ${user_id} to delete.`,
      });
    } else {
      res.send({ success: true, user });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both username & password
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUser({ username, password });
    if (!user) {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    } else {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1w" }
      );
      res.send({
        success: true,
        status: user.status,
        user_id: user.user_id,
        message: "you're logged in!",
        token,
        user_id: user.user_id,
        username: user.username,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = usersRouter;
