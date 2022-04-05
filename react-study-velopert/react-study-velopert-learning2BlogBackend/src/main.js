require('dotenv').config();
import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
import createFakeData from './createFakeData';


const { PORT, MONGO_URI } = process.env;

const start = async () => {
  await mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
      console.log('Connected to MongoDB');
      // createFakeData();
    })
    .catch(e => {
      console.error(e);
    });
}

start();



const app = new Koa();
const router = new Router();


// CORS 옵션
let corsOptions = {
  credentials: true,
}

// CORS 허용
app.proxy = true; // true 일때 proxy 헤더들을 신뢰함
app.use(cors(corsOptions));

app.use(cors());
// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
// Post/Put/Patch같은 메서드의 Request Body에 JSON 형식으로 데이터를 넣어 주면 리를 파싱하여 서버에서 사용할 수 있게 합니다.
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../../react-study-velopert-learning2BlogFrontend/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  // Not Found 이고, 주소가 /api로 시작하지 않는 경우
  if(ctx.status === 404 && ctx.path.indexOf('/api') !== 0){
    //index.html 내용을 반환
    await send(ctx, 'index.html', {root: buildDirectory})
  }
});

const port = PORT || 4001;
app.listen(port, () => {
    console.log('listening to port %d', port);
});
