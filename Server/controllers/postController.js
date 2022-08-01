const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const postModel = require("../models/postModel");

//GetAllPosts;
//////////////////////////////////////////////////////
const getAllPosts = async (req, res) => {
  //pagination
  const page = req.query.p || 1;
  const postsPerPage = 3;
  const skip = (page - 1) * postsPerPage;

  const posts = await Post.find()
    .select("title body author userId tags image edited createdAt")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(postsPerPage);

  res.status(200).json(posts);
};

const CreatePost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();

    res.status(200).json({ savedPost });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const UpdatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //Check if post owner matches
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      req.status(200).json("the post has been updated");
    } else {
      res.status(403).json("Only the author can update this!");
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const DeletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //Check if post owner matches
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      req.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("Only the author can delete this!");
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};
