.env 파일
로컬에서는1

MONGO_URI=mongodb://localhost:27017/blog
MONGO_URI=mongodb+srv://772vjrvj:0772@cluster0.wbhni.mongodb.net/blog?retryWrites=true&w=majority


실행
"start": "node -r esm src",
"start:dev": "nodemon --watch src/ -r esm src/index.js"


yarn add sanitize-html
