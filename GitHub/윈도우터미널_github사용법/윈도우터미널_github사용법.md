# git 명령어 정리

## git init
깃을 init(초기화) 시켜줍니다

## git status
올라가 파일이 있는지 현재 폴더에 있는 파일들을 확인합니다

## git [확인하고 싶은 명령어] --h
[확인하고 싶은 명령어]의 기능들을 볼 수 있다

## git config

### git config --list
git의 모든 설정들을 확인할 수 있다

### git config --global

#### git config --global -e
git의 설정 코드를 볼 수 있다

#### 터미널로 VScode(툴) 을 열었을 때 설정
- git config --global core.editor "code"
> 코드가 열린다
- git config --global core.editor "code"
> 코드가 열리고 닫히기 전까지 기다린다 (터미널 사용 X)

#### 윈도우 와 맥의 줄바꿈을 맞추는 설정
- git config --global core.autocrlf true
> 윈도우
- git config --global core.autocrlf input
> 맥

#### git config --global alias.[내가 사용할 명령어] [기존 명령어]
[기존 명령어]를 [내가 사용할 명령어]에 대입? 시킨다

## code .
VScode(따로 설정 필요?)가 열린다



# $ git add .
### 로컬저장소에 파일들을 올려줍니다
### 모든 파일을 다 Push할 경우 add . 
### 특정 파일만 업로드 add 파일명 or 폴더명
### 파일명 or 폴더명에 () 가 들어가 있을 땐 '' 나 ""로 파일명 or 폴더명을 적어줘야합니다

# $ git commit -m "Push 메시지명"
### Push시 원하는 메시지를 등록하고 commit을 해줍니다.

# $ git remote add origin repository 주소
### 복사한 repository 원격 저장소와 로컬저장소가 연결됩니다

# git remote -v
### 연결된 repository 원격저장소를 보여줍니다

# $ git push origin master
### commit 해두었던 파일들을 원격 저장소에 올립니다

# $ git remote set-url origin repository 주소
### 기존 원격 저장소 URL을 변경합니다

# $ git log
### commit 메시지를 보여줍니다
### 'q' 를 입력하면 나가집니다

[GitHub 내용 출처](https://coding-factory.tistory.com/entry/Git-GitHub-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%ACRepository-%EC%83%9D%EC%84%B1-%EC%86%8C%EC%8A%A4-%EC%98%AC%EB%A6%AC%EA%B8%B0)
