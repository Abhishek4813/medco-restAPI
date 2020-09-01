# medco-restApi
This Api let the user to store their medical record in scanned image form over a mongodb cloud platform. which can be further shared by user after auhenticating his account.
## Install
    npm install
## Run the Api
    npm start
## RestApi Routes
    Base url : http://loalhost:3000
### POST /signup
    Request Data Format:
    {fullName:String, email:String, contact:Number, password:String}
### POST /login
    Request Data Format:
    {email:String, password:String}
### GET /dashbord/:email
    Response:
    user credentials in Fromat
    {fullName:String, email:String,contact:Number, password:String}
    password is hashed using Bcryptjs module.
### POST /users/upload/:email
    Request Data Format:
    {doc:Buffer,contentType:string}
    Doc store the image form of report uploaded by multer in buffer format and contentType is mimetype of image.
### GET users/documents/:email
    Response Data Format:
    {img:Base64, type:mimetype}
    Return the report image in Base64 type
