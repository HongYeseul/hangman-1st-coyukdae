# 행맨 게임
[2023 항해 플러스: 제1회 코육대](https://hanghaeplus-coyukdae.oopy.io/#1b467c7185e94a3295dc4a72a05ea3b2) 출전을 위해 만들어진 웹사이트입니다.
만들어진 웹사이트는 [이곳](https://hongyeseul.github.io/hangman-1st-coyukdae/)에서 볼 수 있습니다.

---
### 개발 스택
\:  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>

---
### 대회에서 요구한 기능
1. 가족들이 함께 볼 수 있도록 프론트도 구현해서 배포하세요.
2. 문제를 선택할 수 있도록 영어 단어를 랜덤으로 3개 띄워주세요.
3. 선택한 문제의 단어를 글자 단위로 숨깁니다. (e.g., "apple" -> "_ _ _ _ _")
4. 화면에 26개 알파벳을 띄워주세요.
5. 선택한 알파벳과 정답을 비교합니다.
6. 일치하는 알파벳이 있을 경우 기존 UI에서 사라지고 해당 위치에 표시됩니다.
7. 틀릴 경우 기존 위치에서 알파벳이 빨간색으로 바뀌고, 오류 횟수를 증가시킵니다.
8. 오류 날 때마다 ‘교수대-밧줄-머리-팔-손-몸통-다리-발’ 순서로 그려서 그림이 완성되면 ‘실패’ 를 띄웁니다. (오류 횟수 8번 이상은 실패)

``` 
이 중 7번, 8번은 문제와 완전 일치하게는 만들지 않았다.
(오류 횟수 8번 이상일 때 실패하는 것은 동일)
```

---

### 결과 스크린샷

<!-- ![성공](https://github.com/HongYeseul/hangman-1st-coyukdae/assets/50395809/2a263348-5fad-414e-8226-4fdbc6a5ef6a)
![재시작](https://github.com/HongYeseul/hangman-1st-coyukdae/assets/50395809/10e93613-4233-4d50-ae7f-6eea3f7512a6)
![실패](https://github.com/HongYeseul/hangman-1st-coyukdae/assets/50395809/f6bf7a9c-fc3a-4fef-912e-2d4bb7194dbc) -->


<p align="center">
  <img src="https://github.com/HongYeseul/hangman-1st-coyukdae/assets/50395809/2a263348-5fad-414e-8226-4fdbc6a5ef6a" align="center" width="32%">
  <img src="https://github.com/HongYeseul/hangman-1st-coyukdae/assets/50395809/f6bf7a9c-fc3a-4fef-912e-2d4bb7194dbc" align="center" width="32%">
  <img src="https://github.com/HongYeseul/hangman-1st-coyukdae/assets/50395809/10e93613-4233-4d50-ae7f-6eea3f7512a6" align="center" width="32%">
</p>
좌측부터 행맨 구하기 성공했을 때, 실패했을 때, 재시작 버튼 눌렀을 때 나타나는 화면(모바일에서 촬영)