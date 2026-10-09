import gym from '../data/gym.json';
import site from '../data/site.json';

export const has = (v?: unknown): v is string => typeof v === 'string' && v.trim() !== '';
export const nz = <T,>(a?: T[]) => (Array.isArray(a) ? a : []);

export const g = gym as any;
export const title: string = has(g.name) ? g.name : 'ジム';
export const squareReady = has(g.square_url);
export const bookUrl: string = squareReady ? g.square_url : site.line_url;
export const base = '/services/gym/';

export const trainers = nz(g.trainers as any[]).filter((t) => has(t.name));
export const faqs = nz(g.faq as { q: string; a: string }[]).filter((f) => has(f.a));
export const pains = nz(g.pains as string[]).filter(has);
export const reasons = nz(g.reasons as { title: string; text: string }[]).filter((r) => has(r.title));
export const gallery = nz(g.gallery as { image: string; caption?: string }[]).filter((x) => has(x.image));

export const flow = [
  squareReady
    ? { no: '01', ja: 'Webで予約', desc: '予約サイトから、メニューとご都合のよい日時を選んでお申し込みください。' }
    : { no: '01', ja: 'LINEで予約', desc: '公式LINEから、ご希望のメニューと日時をお送りください。' },
  { no: '02', ja: 'ヒアリング・身体評価', desc: '目的やお悩みを伺い、今の身体の状態をチェックします。' },
  { no: '03', ja: 'トレーニング', desc: '評価結果をもとに、一人ひとりに合わせたメニューで行います。' },
  { no: '04', ja: '再評価・継続', desc: '定期的に評価し直し、変化を確認しながらメニューを更新します。' },
];

/** 料金表から最安値（"¥3,300"形式）を取り出す */
export const minPrice = (plan: any): string => {
  const vals = nz(plan.rows as any[])
    .flatMap((r) => [r.junior, r.student, r.general, r.price])
    .filter(has)
    .map((s: string) => Number(s.replace(/[^\d]/g, '')))
    .filter((n) => n > 0);
  return vals.length ? `¥${Math.min(...vals).toLocaleString('ja-JP')}` : '';
};

/** 3回券の支払いリンク（CMSで設定。空欄は非表示） */
export const tickets: { junior: string; student: string; general: string; pilates: string } = {
  junior: '', student: '', general: '', pilates: '', ...(g.tickets ?? {}),
};
export const hasTickets = Object.values(tickets).some(has);
