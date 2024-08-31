import { supabase } from '@/app/supabaseClient';

interface GetImagesParams {
  take?: number; // 가져올 이미지 수 (선택적, 기본값을 설정할 경우)
  orderBy?: { // 정렬 기준 (선택적)
    _relevance?: {
      fields: string[];
      sort: string;
      search: string;
    };
  };
}


export async function getImages({ take = 50, orderBy }: GetImagesParams) {
  if (take > 50) {
    take = 50; // 최대 50개로 제한
  }
  try {
    const query = supabase
      .from('images')
      .select('*')
      .order('id', { ascending: false })
      .limit(take);

    // orderBy가 정의되어 있으면 추가적인 정렬 처리
    if (orderBy) {
      // orderBy 사용 로직 추가
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}

