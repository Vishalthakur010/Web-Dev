const File = require('../models/File')
const cloudinary = require('cloudinary')

// localfileUpload -> handler function
exports.localFileUpload = async (req, res) => {
    try {
        // fetch file from request
        const file = req.files.vishal // the key should be vishal
        console.log("Here is the file :- ", file)

        // create path where file needs to be stored on server
        let path = __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`
        console.log("path -> ", path)

        // add path to the move function
        file.mv(path, (err) => {
            console.log(err)
        })

        // create a successfull response
        res.json({
            success: true,
            message: "Local file uploaded successfully"
        })
    }
    catch (err) {
        console.log("Not able to upload the file")
        console.log(err)
    }
}


//checking if file is supported
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type)
}
// function for uploading on cloud
async function uploadFileToCloudinary(file, folder, quality) {
    const options = {
        folder,
        resource_type: "video",
    }
    if(quality){
         options.transformation = [{ quality: quality }];
    }
    try {
        const response = await cloudinary.uploader.upload(file.tempFilePath, options);
        return response;
    } catch (err) {
        console.error("Cloudinary upload error:", err);
        throw new Error("Failed to upload video to Cloudinary");
    }
}

// imageUpload -> handler function
exports.imageUpload = async (req, res) => {
    try {
        //fetch data
        const { name, tags, email } = req.body
        console.log(name, tags, email)

        const file = req.files.imageFile  // the key should be imageFile
        console.log(file)

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"]
        const fileType = file.name.split('.')[1].toLowerCase()
        console.log("File type :", fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                sucess: false,
                message: "File format not supported"
            })
        }

        console.log("file format supported")
        // file format supported
        const response = await uploadFileToCloudinary(file, "Matrix")
        console.log(response)

        //create entry in DB
        const fileData = File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image successfully uploaded"
        })
    }
    catch (err) {
        console.error(err)
        res.status(400).json({
            success: false,
            message: "Something went wrong while uploading image"
        })
    }
}


// video upload => did not work
exports.videoUpload = async (req, res) => {
    try {
        //fetch data
        const { name, tags, email } = req.body
        console.log(name, tags, email)

        const file = req.files.videoFile // the key should be videoFile
        console.log(file)

        //validation -> file type, upper limit 5mb
        const supportedTypes = ["mov", "mp4"]
        const fileType = file.name.split('.')[1].toLowerCase()
        console.log("File type :", fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.json({
                success: false,
                message: "video format not supported"
            })
        }

        console.log("video format supported")
        const response = await uploadFileToCloudinary(file, 'Matrix')
        console.log(response)

        //create entry in DB
        const fileData = File.create({
            name,
            tags,
            email,
            videoUrl: response.secure_url
        })

        res.json({
            success: true,
            videoUrl: response.secure_url,
            message: "Video successfully uploaded"
        })

    }
    catch (err) {
        console.error(err)
        res.status(400).json({
            success: false,
            message: "Something went wrong while uploading video"
        })
    }
}


// image reduce upload => did not work
exports.imageReduceUpload = async (req, res) => {
    try {
        //fetch data
        const { name, tags, email } = req.body
        console.log(name, tags, email)

        const file = req.files.imageFile  // the key should be imageFile
        console.log(file)

        const maxFileSize = 5 * 1024 * 1024;  // 5 MB in bytes
         // Check if file size exceeds the limit
         if (file.size > maxFileSize) {
            return res.status(400).json({
                success: false,
                message: "File size exceeds 5 MB limit"
            });
        }

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"]
        const fileType = file.name.split('.')[1].toLowerCase()
        console.log("File type :", fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                sucess: false,
                message: "File format not supported"
            })
        }

        console.log("file format supported")
        // file format supported
        const response = await uploadFileToCloudinary(file, "Matrix",40)
        console.log(response)

        //create entry in DB
        const fileData = File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image successfully uploaded"
        })
    }
    catch (err) {
        console.error(err)
        res.status(400).json({
            success: false,
            message: "Something went wrong while uploading image"
        })
    }
}

