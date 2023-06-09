const { deleteFile } = require("../middlewares/deleteImgCloudinary.js");
const Post = require("../models/gallery.models");
const post = require("../models/gallery.models");
const HTTPSTATUSCODE = require("../utilities/httpcodes")



const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Posts: allPosts,
    });
  } catch (error) {
    return next(error);
  }
};


const getPostByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const postByID = await Post.findById(id);
    return res.json(postByID);
  } catch (error) {
    return next(error);
  }
};


const createPost = async (req, res, next) => {
  try {
    const newPosts = new Post(req.body);
    if (req) {
      newPosts.picture = req.path;
    }
    const createdPosts = await newPosts.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      Post: createdPosts,
    });
  } catch (error) {
    return next(error);
  }
};

const deletePost = async (req, res, next) => {
    try {
      const { id } = req.params;

      const postDeleted = await Post.findByIdAndDelete(id);

      return res.status(200).json(postDeleted);
    } catch (error) {
      return next(error);
    }
  };

  const patchPost = async (req, res, next) => {
    try {
      const { id } = req.params;

      const patchPost = new Post(req.body);

      patchPost._id = id;

      const postData= await Post.findById(id)


      if (postData.picture) {
        deleteFile(postData.picture);
        }

      if (req) {
        patchPost.picture = req.path;
      }

      const PostDB = await Post.findByIdAndUpdate(id, patchPost);

      return res.status(200).json({ new: patchPost, old: PostDB });
    } catch (error) {
      return next(error);
    }
  };

module.exports = {  getAllPosts,
  getPostByID,
  createPost,
  deletePost,
  patchPost,};