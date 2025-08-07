import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
    try {
        const { text, image} = req.body; // Message content
        const {id: recieverId} = req.params;// ID of the user to whom the message is being sent
        const senderId = req.user._id; // Logged-in user's ID(myID)

        let imageUrl;
        if (image) {
            //upload image to cloudinary and get the URL
            const uploadResponse = await cloudinary.uploader.upload(image);// Upload image to Cloudinary
            imageUrl = uploadResponse.secure_url; // Get the secure URL of the uploaded image
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            text,
            image: imageUrl, // Store the image URL if an image is sent
        });
        await newMessage.save(); // Save the message to the database

        //todo: realtime functionality goes here => socket.io
        res.status(200).json(newMessage); // Respond with the saved message
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({message: "Internal server error"});

    }
};