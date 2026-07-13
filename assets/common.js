/* ============================================================
   UHC common.js — 언어 자동감지, 메가메뉴, 커스텀 커서, 가입 모달
   ============================================================ */

const UHC_COMMON = {
  ko:{
    book:"객실 예약", u_dining:"다이닝 소개·예약", u_mobility:"차량·의전 예약", u_membership:"멤버십", u_login:"로그인", u_join:"회원가입",
    u_partner:"제휴·협업 문의", u_eshop:"E-SHOP",
    mm_brands:"브랜드", mm_beauty:"뷰티", mm_dine:"다이닝 · 쇼핑", mm_service:"서비스",
    m_stone:"스톤하우스 헤드스파", m_cell:"UH 셀 · 메디컬", m_bloom:"메디컬 블룸", m_renine:"피부과 의원",
    u_hq:"본사 홈페이지", fb_soon:"상세 소개 준비 중",
    f_brands:"브랜드", f_amenity:"뷰티 & 라이프스타일", f_service:"서비스",
    f_booking:"통합 예약", f_app:"공식 앱", f_proposal:"제휴·협업 문의", f_admin:"관리자",
    f_info:"주식회사 유에이치씨 | 대표 박성재 | 사업자등록번호 136-86-00642<br>서울특별시 강남구 테헤란로84길 11, 13-15층 (대치동, 비엘타워)<br>info@urbanhost.co.kr",
    f_copy:"© 2026 UHC, Ltd. All rights reserved.",
    au_title:"UHC 멤버십", au_sub:"가입하고 전 브랜드 혜택을 받아보세요.",
    au_kakao:"카카오로 계속하기", au_google:"Google로 계속하기", au_email:"이메일로 계속하기",
    au_note:"가입 시 이용약관 및 개인정보처리방침에 동의하게 됩니다.",
    au_demo:"시안 데모 — 실서비스 연동 전", au_done:"데모 가입 완료! (관리자 페이지 회원 목록에서 확인 가능)"
  },
  en:{
    book:"Book a Room", u_dining:"Dining & Reservation", u_mobility:"Vehicle · Chauffeur", u_membership:"Membership", u_login:"Sign In", u_join:"Join",
    u_partner:"Partnership Inquiry", u_eshop:"E-SHOP",
    mm_brands:"Brands", mm_beauty:"Beauty", mm_dine:"Dining · Shop", mm_service:"Services",
    m_stone:"Stone House Head Spa", m_cell:"UH Cell · Medical", m_bloom:"Medical Bloom", m_renine:"Dermatology Clinic",
    u_hq:"Corporate Website", fb_soon:"Details Coming Soon",
    f_brands:"Brands", f_amenity:"Beauty & Lifestyle", f_service:"Services",
    f_booking:"Integrated Booking", f_app:"Official App", f_proposal:"Partnership Inquiry", f_admin:"Admin",
    f_info:"UHC, Ltd. | CEO Park Sung-jae | Business Reg. 136-86-00642<br>13-15F, 11 Teheran-ro 84-gil, Gangnam-gu, Seoul<br>info@urbanhost.co.kr",
    f_copy:"© 2026 UHC, Ltd. All rights reserved.",
    au_title:"UHC Membership", au_sub:"Join and enjoy benefits across all brands.",
    au_kakao:"Continue with Kakao", au_google:"Continue with Google", au_email:"Continue with Email",
    au_note:"By joining you agree to our Terms and Privacy Policy.",
    au_demo:"Prototype demo — pre-integration", au_done:"Demo sign-up complete! (Visible in the admin member list)"
  },
  ja:{
    book:"客室予約", u_dining:"ダイニング紹介·予約", u_mobility:"車両·送迎予約", u_membership:"メンバーシップ", u_login:"ログイン", u_join:"会員登録",
    u_partner:"提携·協業のお問い合わせ", u_eshop:"E-SHOP",
    mm_brands:"ブランド", mm_beauty:"ビューティー", mm_dine:"ダイニング · ショップ", mm_service:"サービス",
    m_stone:"ストーンハウス ヘッドスパ", m_cell:"UHセル · メディカル", m_bloom:"メディカルブルーム", m_renine:"皮膚科クリニック",
    u_hq:"本社ホームページ", fb_soon:"詳細は近日公開",
    f_brands:"ブランド", f_amenity:"ビューティー＆ライフスタイル", f_service:"サービス",
    f_booking:"統合予約", f_app:"公式アプリ", f_proposal:"提携·協業のお問い合わせ", f_admin:"管理者",
    f_info:"株式会社UHC | 代表 パク・ソンジェ | 事業者登録番号 136-86-00642<br>ソウル特別市江南区テヘラン路84キル11、13-15階<br>info@urbanhost.co.kr",
    f_copy:"© 2026 UHC, Ltd. All rights reserved.",
    au_title:"UHCメンバーシップ", au_sub:"ご登録で全ブランドの特典をお楽しみいただけます。",
    au_kakao:"Kakaoで続ける", au_google:"Googleで続ける", au_email:"メールで続ける",
    au_note:"登録すると利用規約とプライバシーポリシーに同意したことになります。",
    au_demo:"デモ版 — 本連携前", au_done:"デモ登録完了！（管理者ページの会員リストで確認できます）"
  },
  zh:{
    book:"客房预订", u_dining:"餐饮介绍·预订", u_mobility:"车辆·礼宾预订", u_membership:"会员", u_login:"登录", u_join:"注册",
    u_partner:"合作咨询", u_eshop:"E-SHOP",
    mm_brands:"品牌", mm_beauty:"美容", mm_dine:"餐饮 · 商城", mm_service:"服务",
    m_stone:"Stone House 头部SPA", m_cell:"UH Cell · 医疗", m_bloom:"Medical Bloom", m_renine:"皮肤科医院",
    u_hq:"集团官网", fb_soon:"详情即将公开",
    f_brands:"品牌", f_amenity:"美容与生活方式", f_service:"服务",
    f_booking:"统一预订", f_app:"官方App", f_proposal:"合作咨询", f_admin:"管理员",
    f_info:"UHC株式会社 | 代表 朴晟宰 | 营业执照 136-86-00642<br>首尔特别市江南区德黑兰路84街11号 13-15层<br>info@urbanhost.co.kr",
    f_copy:"© 2026 UHC, Ltd. All rights reserved.",
    au_title:"UHC会员", au_sub:"注册即可享受全品牌优惠。",
    au_kakao:"使用Kakao继续", au_google:"使用Google继续", au_email:"使用邮箱继续",
    au_note:"注册即表示您同意服务条款与隐私政策。",
    au_demo:"设计稿演示 — 正式对接前", au_done:"演示注册完成！（可在管理页面会员列表中查看）"
  }
};

function uhcSetLang(lang){
  if(!UHC_COMMON[lang]) lang = 'en';
  document.documentElement.lang = lang;
  const dict = Object.assign({}, UHC_COMMON[lang], (window.PAGE_I18N && window.PAGE_I18N[lang]) || {});
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[k] !== undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on', b.dataset.lang===lang));
  try{ localStorage.setItem('uhc_lang', lang); }catch(e){}
  window.UHC_LANG = lang;
}

(function(){
  let lang = null;
  try{ lang = localStorage.getItem('uhc_lang'); }catch(e){}
  if(!lang){
    const nav = (navigator.language||'en').toLowerCase();
    lang = nav.startsWith('ko')?'ko':nav.startsWith('ja')?'ja':nav.startsWith('zh')?'zh':'en';
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    uhcSetLang(lang);
    document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>uhcSetLang(b.dataset.lang)));

    /* 헤더 스크롤 */
    const hdr = document.querySelector('header');
    if(hdr){ window.addEventListener('scroll',()=>hdr.classList.toggle('scrolled', window.scrollY>60)); }

    /* 메가 메뉴 (뒤로가기 = 메뉴 닫기) */
    const mega = document.getElementById('mega');
    const mbtn = document.getElementById('menuBtn');
    if(mega && mbtn){
      let megaOpen = false;
      function setMega(open, fromPop){
        if(open === megaOpen) return;
        megaOpen = open;
        mega.classList.toggle('open', open);
        mbtn.classList.toggle('x', open);
        document.body.style.overflow = open ? 'hidden' : '';
        if(open && !fromPop){ try{ history.pushState({uhcMega:1}, ''); }catch(e){} }
        if(!open && !fromPop && history.state && history.state.uhcMega){ try{ history.back(); }catch(e){} }
      }
      mbtn.addEventListener('click', ()=>setMega(!megaOpen, false));
      const mclose = document.getElementById('megaClose');
      if(mclose) mclose.addEventListener('click', ()=>setMega(false, false));
      mega.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMega(false, false)));
      window.addEventListener('popstate', ()=>{ if(megaOpen) setMega(false, true); });
    }

    /* 리빌 */
    const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    /* 커스텀 커서 (데스크톱 전용) */
    if(matchMedia('(pointer:fine)').matches){
      const dot=document.createElement('div'), ring=document.createElement('div');
      dot.className='cur-dot'; ring.className='cur-ring';
      document.body.append(dot,ring);
      let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
      addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;});
      (function loop(){ rx+=(mx-rx)*.14; ry+=(my-ry)*.14;
        ring.style.transform=`translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
      document.querySelectorAll('a,button,select,input,[data-auth-open]').forEach(el=>{
        el.addEventListener('mouseenter',()=>ring.classList.add('big'));
        el.addEventListener('mouseleave',()=>ring.classList.remove('big'));
      });
    }

    /* 가입 모달 */
    const mask = document.getElementById('authMask');
    document.querySelectorAll('[data-auth-open]').forEach(b=>b.addEventListener('click',()=>mask && mask.classList.add('open')));
    if(mask){
      mask.addEventListener('click',e=>{ if(e.target===mask) mask.classList.remove('open'); });
      const x = mask.querySelector('.x');
      if(x) x.addEventListener('click',()=>mask.classList.remove('open'));
      mask.querySelectorAll('[data-sso]').forEach(b=>b.addEventListener('click',()=>{
        const provider = b.getAttribute('data-sso');
        const members = JSON.parse(localStorage.getItem('uhc_members')||'[]');
        members.push({provider, joined:new Date().toISOString().slice(0,10), lang:window.UHC_LANG||'ko'});
        localStorage.setItem('uhc_members', JSON.stringify(members));
        alert(UHC_COMMON[window.UHC_LANG||'ko'].au_done);
        mask.classList.remove('open');
      }));
    }
  });
})();
