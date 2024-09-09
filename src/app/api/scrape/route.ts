import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';
import cheerio from 'cheerio';

async function fetchData(url: string, retries: number = 3): Promise<string> {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 429 && retries > 0) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5초 지연 후 재시도
        return fetchData(url, retries - 1);
      }
    }
    throw error; // AxiosError가 아닌 경우 또는 재시도 후에도 실패한 경우 에러를 다시 던짐
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url).searchParams.get('url');

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: '유효한 URL이 필요합니다.' }, { status: 400 });
    }

    const data = await fetchData(url);
    const $ = cheerio.load(data);

    const title = $('div._1eddO7u4UC h3').text();
    const price = $('span._1LY7DqCnwR').text();
    const imageUrl = $('img[alt="대표이미지"]').attr('src');

    return NextResponse.json({
      title: title || '제목을 찾을 수 없습니다.',
      price: price || '가격을 찾을 수 없습니다.',
      imageUrl: imageUrl || '이미지를 찾을 수 없습니다.'
    });
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message);
    return NextResponse.json({ error: '웹 페이지에서 데이터를 가져오는 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
