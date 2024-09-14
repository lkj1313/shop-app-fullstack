const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // 환경 변수 설정

app.use(cors()); // CORS 설정
app.use(express.json()); // JSON 데이터 파싱 미들웨어

// 데이터베이스 연결 함수
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}
connectToDatabase(); // 함수 호출

// 라우트 설정
app.use("/users", require("./routes/users"));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "../uploads"))); // 업로드된 파일 제공

// 기본 라우트
app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// 에러 핸들러는 모든 미들웨어 뒤에 위치해야 함
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error.message || "서버에서 에러가 발생했습니다.");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
