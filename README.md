# UHC 통합 웹사이트 — 퍼블리싱 폴더

이 폴더 내용물을 그대로 GitHub 저장소에 올리면 배포된다.

## GitHub Pages 배포 순서
1. github.com에서 새 저장소 생성 (예: uhc-website)
2. 이 폴더의 모든 파일을 저장소에 업로드 (index.html이 루트에 오도록)
3. 저장소 Settings → Pages → Branch: main, 폴더: / (root) 선택 → Save
4. 1~2분 후 https://<계정명>.github.io/uhc-website/ 에서 접속 가능

## 주의
- assets/img/ 폴더의 README.md는 배포에 영향 없음 (교체 안내용)
- 드라이브 사진은 해당 파일의 링크 공유가 유지되어야 표시됨. 정식 배포 전에는 사진을 assets/img/ 폴더에 직접 넣는 방식 권장
- admin.html은 데모용 — 실서비스 배포 시 제외하거나 실제 인증으로 교체할 것
- 커스텀 도메인 연결: Pages 설정의 Custom domain에 도메인 입력 + DNS CNAME 설정
