# git 명령어 정리

## git init
깃을 init(초기화) 시켜줍니다

## git status
working drectroy / staging area / .git directory 내용을 확인할 수 있다  
작업하는 모든 내용을 확인할 수 있다

## git [확인하고 싶은 명령어] --h
[확인하고 싶은 명령어]의 기능들을 볼 수 있다

## code .
VScode(따로 설정 필요?)가 열린다

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

## git rm ( remove )

### git rm --cached [파일명]
staging 된 ( git add [파일명] ) 파일들을 다시 working directory로 이동 시킨다


## git add

### git add *


### git add .
로컬저장소에 파일들을 올려줍니다  
모든 파일을 다 Push할 경우 add .  
특정 파일만 업로드 add 파일명 or 폴더명  
파일명 or 폴더명에 () 가 들어가 있을 땐 '' 나 ""로 파일명 or 폴더명을 적어줘야합니다

> git add . , git add * 의 차이  
> 파일을 삭제했을 때 * 은 적용이 안되지만 . 는 다 포함된다  ( . > * ) 이런 느낌?

## git diff ( 차이 )
파일이 staging area에 올라간 상태에서 다시 수정이 일어 났을 때, 어떤 것이 변했는지 보여준다  
추가 되었다면 초록색 +  
제거 되었다면 빨간색 -

### git diff --staged
staging area에 있는 내용을 확인할 수 있다
> staged 와 cached는 동의어?

### git difftool
VSCode 로 변경된 사항을 볼 수 있다.
> ``git config --global -e`` 명렁어로 설정 파일을 만들고  

>   [diff]  
	tool = vscode  
    [difftool "vscode"]  
	cmd = code --wait --diff $LOCAL $REMOTE  

> 추가 하면 ``git difftool 사용 가능해진다

#### git difftool --staged
VSCode로 staging area에 있는 파일을 볼 수 있다

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

[Git 명령어 Reference](https://git-scm.com/docs)
