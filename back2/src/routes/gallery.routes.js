const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFileCloudinary.js');
const {isAuth} = require('../middlewares/auth.middleware.js')

const {
    getAllPosts,
    getPostByID,
    createPost,
    deletePost,
    patchPost,
} = require('../controllers/gallery.controllers');

router.get('/',getAllPosts )
router.get('/:id',getPostByID )
router.post('/', [isAuth], upload.single('picture'), createPost);
router.delete('/', [isAuth], upload.single('picture'), deletePost);
router.patch('/', [isAuth], upload.single('picture'), patchPost);


module.exports = router;