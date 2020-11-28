const express = require('express');

const Controller = require('../../controllers/accountController');
const Handler = require('../../middlewares/handlers/accountHandler');
const AuthHandler = require('../../middlewares/handlers/authHandler');

const router = express.Router();

router.get('/', AuthHandler.handleAuthorization, Handler.handleGetAccount, Controller.getAccount);
router.get('/cookbook', AuthHandler.handleAuthorization, Handler.handleGetLiked, Controller.getLikedRecipes);
router.post('/', Handler.handleCreateAccount, Controller.createAccount);

module.exports = router;
