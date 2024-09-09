import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

// API 라우트
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: '유효한 URL이 필요합니다.' });
  }

  try {
    // 주어진 URL로 HTTP 요청을 보냅니다.
    const { data } = await axios.get(url);
    // cheerio로 HTML을 파싱합니다.
    const $ = cheerio.load(data);

    // 웹 페이지에서 필요한 데이터를 추출합니다.
    const title = $('div._1eddO7u4UC h3').text(); // 페이지의 제목 추출 (예시)
    const price = $('span._1LY7DqCnwR').text(); // 가격 정보가 있는 태그에서 가격을 추출 (예시)
    const imageUrl = $('img[alt="대표이미지"]').attr('src');
    console.log(title);

    // 필요한 데이터가 여러개일 경우, 추가로 다른 태그를 찾아 데이터를 추출할 수 있습니다.

    // 추출한 데이터를 응답으로 반환합니다.
    res.status(200).json({
      title: title || '제목을 찾을 수 없습니다.',
      price: price || '가격을 찾을 수 없습니다.',
      imageUrl: imageUrl || '이미지를 찾을 수 없습니다.'
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: '웹 페이지에서 데이터를 가져오는 중 오류가 발생했습니다.' });
  }
}
