[내 회원가입 점수 확인 하러 가기](https://ux-tester.vercel.app/)
https://ux-tester.vercel.app/


# 이렇게 만들었어요

**빠르게 만들고, 빠르게 배포**를 하고 **피드백**을 받기 위해서 `NextJS`와 `Supabase` 를 같이 사용 하였습니다.

이전 [잡봇](https://job-bot.site) 을 만들때 Supabase 를 사용 하였습니다. 이때 백엔드 서버로 Supabase 가 제공 하는 Deno를 사용 하였고 그 때의 경험이 너무 좋아 NextJS 에서 바로 사용 할 수 있도록 NextJS 내 에서 Supabase API 를 사용 하였습니다.


## Nextjs 13 with Supabase
Supabase를 Nextjs 13 을 같이 사용하는 참고 자료가 없어서 고생 하였습니다. 정말 다행이게도, supabase 공식 github 레파지토리 에서 Nextjs 13을 이용한 [예제](https://github.com/supabase/supabase/tree/master/examples/user-management/nextjs-user-management)들을 만들고 계셨고, 이를 github 에서 확인하여 많이 참고 하게 되었습니다.


## 각종 서비스를 이용하여 개발하기

### Vercel
NextJS를 만든 Vercel 팀 에서는 배포도 무료 플랜으로서 배포 해줍니다. 사실, Vercel 을 통한 호스팅을 좋아하지 않는데 개발자 라면, 배포도 도움을 받지 않고 하는 것이 좋다고 생각 하였습니다. 하지만, 사실 개발자라면 각종 서비스를 잘 이용하는 것 또한 실력이라고 생각 합니다. 따라서 과감하게 Vercel 을 통해 배포를 하였습니다.

Vercel 의 좋은 점은 NextJS 같은 경우 SSR 을 지원 하는데, 해당 기능을 어떠한 설정 없이 알아서 배포 해준 다는 점 입니다.


### Supabase
Supabase 는 Firebase 처럼 클라우드 상에서 Database 를 이용 할 수 있는 서비스 입니다. 하지만, Supabase는 Nosql 기반의 Firebase와 달리 Postgresql DB 를 사용 하고 있기 때문에, 기존 개발자들도 쉽게 접근 을 할 수 있습니다. 뿐만 아니라 2개의 프로젝트 까지 무료로 제공 하고 있고, 프리플랜 또한 부족함이 없기 때문에 개인 개발자가 사용하기 정말 좋습니다.

또한, 웹 상의 Dashboard 를 이용해서 테이블을 쉽게 만들 수 있어 SQL 을 모르는 개발자 또한 DB 를 손 쉽게 이용 해줄 수 있어 사용 하였습니다.
![](https://velog.velcdn.com/images/jwisgenius/post/c889978c-a796-4782-b79b-ced19f7ac84b/image.png)


### ChatGPT

이제는 모르는 사람이 없는 ChatGPT. 사실 이 프로젝트는 ChatGPT 가 없으면 못만들었습니다.

- 모호한 개념인 UX에 대한 점수를 개인이 매길 수 있다는 것은 오만에 가깝다고 생각하였습니다.
- ChatGPT가 확실하지는 않아도 자신만의 기준을 가지고 UX에 대한 점수를 매겨줄 수 있다고 생각 하였습니다.
- 결과는, 어느정도 타당성에 맞게 ChatGPT가 회원가입의 순서에 맞는 점수를 매겨주고 또한 회원가입의 UX 시나리오에 대한 정답/오답 을 매겨 주었습니다.




## 이런 점을 고려하며 개발 했어요

### 개인을 위한 테스트 -> 닉네임
> 응당, 테스트라면 자신의 점수를 공유 하고 싶을 텐데... 그렇다고 MBTI 처럼 단순하게 결과만 공유하는 것이랑 테스트의 성격이 달라서 공유하는 재미가 없고 `개인적인 테스트` 라는 느낌을 주지 못할 것 같은데... 

라는 생각을 하면서 닉네임을 추가 하였습니다. 그리고, 닉네임과 결과를 1:1로 매핑 하려고 하였습니다.

그런데, "이용자가 많아져서 DB가 초과하면 어떡하지", "결과의 JSON DATA는 길고, 그 결과는 아무리 많아봐야 100가지가 될텐데... 이를 중복적으로 닉네임과 1:1로 매핑 하면 안좋을 것 같은데" 라는 생각을 하였습니다.

따라서, 결과에 대한 JSON 값과 해당 JSON 값과 매핑 되는 UUID 값을 저장 하였습니다. 그 후 닉네임에 대한 UUID와 결과의 UUID를 같이 저장 함으로써 결과에 대한 JSON은 딱 결과의 개수만큼 저장 되도록하였고, 그 대신 결과의 ID를 닉네임의 ID 와 매핑 시킴으로써 DB에 저장되는 데이터의 양을 줄이도록 하였습니다.

![](https://velog.velcdn.com/images/jwisgenius/post/e82a79f6-56c2-401f-a835-6e1fb0ec1059/image.png)
![](https://velog.velcdn.com/images/jwisgenius/post/785c4a56-b00a-40ca-b57d-1a4159625efa/image.png)


### 결과 페이지 -> 닉네임 UUID 와 결과 JSON UUID 를 같이 사용

결과 페이지의 URL 을 닉네임 UUID 와 결과 JSON UUID 를 같이 사용 함으로써, URL의 길이를 줄일 수 있도록 하였습니다. 왜냐구요? 링크를 공유할 때 링크의 길이가 길면 길 수록 좋지 않은 유저경험을 준다고 생각 하기 때문에... 닉네임의 UUID 와 JSON UUD 를 같이 사용 함으로써 Data를 DB로 부터 내려받았습니다.

![](https://velog.velcdn.com/images/jwisgenius/post/d8e20b49-5631-4696-ac5a-b4740f2a3901/image.png)


### 누르고 싶어지는 링크

먼저, 이러한 테스트류 페이지는, 링크를 누르고 싶어야 한다고 생각 하였습니다. 그 때문에 링크의 길이를 줄일 수 있도록 노력 하였구요. 또한 누르고 싶어하는 OG Image 를 만들 었습니다. 

![](https://velog.velcdn.com/images/jwisgenius/post/3a9bed08-616f-4ff8-a193-4c643e3be122/image.png)

또한, 카카오톡에서 제공하는 공유 기능을 연결 하여 공유를 할 때, 이쁘게 공유가 될 수 있도록 하였습니다.

![](https://velog.velcdn.com/images/jwisgenius/post/33c31729-c232-45b6-9314-80ff7a72d94f/image.png)



### 공유하고 싶은 결과

링크 공유 뿐 아니라 인스타스토리 등에 캡쳐해서 많이들 올리시 잖아요? 

![](https://velog.velcdn.com/images/jwisgenius/post/6a786c3f-2c0b-40c0-b252-0ede98756e17/image.png)

그래서 최대한 결과화면을 이쁘게 만들어서, 테스트의 꽃인 마지막에 친구들에게 결과 공유하는 것 까지 이쁘게 했어요.

물론 결과 링크를 공유하면 이쁜 동물 사진까지 카카오톡 이미지에 담깁니다 ^&^ 

![](https://velog.velcdn.com/images/jwisgenius/post/50326ff2-6956-4122-bb1d-260e7af62078/image.png)


### 하고 싶어지지 않으세요?


---

[내 회원가입 점수 확인 하러 가기](https://ux-tester.vercel.app/)
https://ux-tester.vercel.app/

저는 재미있는 것을 만드는 것을 좋아 합니다.
# subs_newsletter
