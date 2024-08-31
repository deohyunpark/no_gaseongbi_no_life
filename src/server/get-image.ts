import { supabase } from '@/app/supabaseClient';

interface GetImagesParams {
  take: 50; // 가져올 이미지 수
}

export async function getImages({ take }: GetImagesParams) {
  try {
    const { data, error } = await supabase
      .from('images') // 'images' 테이블에서 데이터 가져오기
      .select('*') // 모든 필드 선택
      .order('id', { ascending: false }) // 'id' 기준 내림차순 정렬
      .limit(take); // 가져올 수 제한

    if (error) {
      throw error; // 에러 발생 시 에러 던지기
    }

    return data; // 이미지 데이터 반환
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; // 에러 발생 시 에러를 던져 호출자에게 전달
  }
}
