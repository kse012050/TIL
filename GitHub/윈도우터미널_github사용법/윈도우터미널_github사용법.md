# git 명령어 정리

## git init
깃을 init(초기화) 시켜줍니다

## git status
working drectroy / staging area / .git directory 내용을 확인할 수 있다  
작업하는 모든 내용을 확인할 수 있다

## git [확인하고 싶은 명령어] --h
[확인하고 싶은 명령어]의 기능들을 볼 수 있다

## git mv [파일명] [파일명 변경 이름]
[파일명]을 [파일명 변경 이름]으로 파일의 이름을 변경한다
> 터미널 명령어 __mv__ 와 차이점은 git 명렁어를 사용하면 바로 ``staging area``로 이동한다는 것이다

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

##### git log 이쁘게 볼 수 있는 명렁어 등록 방법
> git config --global alias. "log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short"

## git rm ( remove ) [파일명]
[파일명] 파일을 삭제한다

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

### git diff [해쉬코드1] [해쉬코드2]
[해쉬코드1] 내용과 [해쉬코드2] 내용을 비교해서 볼 수 있다

#### git diff [해쉬코드1] [해쉬코드2] [파일이름] (파일의 확장자명까지 작성해야 한다)
[해쉬코드1] 내용과 [해쉬코드2] 내용 중에 [파일이름]의 차이점만 볼 수 있다

##  git commit
현재 내용과 변경 사항을 설명하는 주어진 로그 메시지를 포함하는 새 커밋을 만든다  
새 커밋은 HEAD의 직계 자식이며 일반적으로 현재 분기의 끝이며 분기가 이를 카리키도록 업데이트 된다  
``.git directory`` 로 파일을 옮긴다

### git commit -m "Push 메시지명"
commit과 동시에 메시지 작성

### git commit -am "Push 메시지명"		( all message )
git add . ( staging area ) 로 옮기는 작업을 생략하고   
바로 commit ( .git directory )로 메시지와 함께 넘긴다

커밋 로그를 표시한다  
주어진 커밋에서 상위 링크를 따라 도달할 수 있는 커밋을 나열하지만 앞에 ^가 있는 커밋에서 도달할 수 있는 커밋을 제외한다  
출력은 기본적으로 시간 역순으로 제공된다  
  
commit 메시지를 보여줍니다  
'q' 를 입력하면 나가집니다

## git log
commit log 를 확인 할 수 있다.  
``확인 할 수 있는 목록``
- 작성자 ( commit id )
- 시간
- title ( commit 내용 )
> 위에 있을수록 __최신__ 이다  
> ``Q`` 를 이용해서 나갈 수 있다

### git log --p ( patch )
git log로 확인할 수 있는 내용에 __수정된 파일의 내용__ 도 확인할 수 있다

### git log --oneline
git log를 단간하게 볼 수 있다 (해쉬코드의 앞자리 , 간단한 commit message )

#### git log --oneline --reverse
git log의 순서 변경 ( 오래된 commit부터 볼 수 있다 )

#### git log --oneline -[숫자]
git log를 단간하게 볼 수 있다 ( [숫자]만큼 확인 가능 )

### git log --pretty
glt log를 이쁘게? 꾸밀 수 있다

#### git log --pretty=oneline 
git log --oneline이랑 비슷하지만 ``해쉬코드`` 전부가 나온다

#### git log --pretty=format:"[format]"
[format] 을 이용해서 원하는 정보만 지정해서 볼 수 있다
- %h : 해쉬코드
- %an : 저자의 이름
- %ar : commit 된 date ( 시간 )
- %s : commit title
- [참고자료  git -log Documentation](https://git-scm.com/docs/git-log)   ``스크롤 55%정도에 있다``
> 예 :  git log --pretty=format:"%h %an %ar %s"

### git log [파일이름]
[파일이름]에 commit 된 내용만 확인할 수 있다
> 파일이름에 확장자명까지 적어줘야한다

### git log -[숫자]
git log 최신 중 [숫자]만큼 확인할 수 있다

### git log --author="[작성자명]"  -> author(작가)
[작성자명]이 작성한 commit만 확인할 수 있다

### git --before="[날짜]"   -> 날짜 표기법 ( 2021-12-08 )
지정한 [날짜] 이전에 commit들만 볼 수 있다

### git log --grep="[단어]"
commit 중에서 [단어]가 들어간 commit만 확인할 수 있다

### git log -S "[단어]"
commit 내용이 아닌 변경된? 컨텐츠 안의 [단어]를 찾아 보여준다

#### git log -S "[단어]" -p ( patch )
commit 내용이 아닌 변경된? 컨텐츠 안의 [단어]를 찾아 보여준다  
> ``-p``를 붙이면 코드내용 안에 [단어] 가 들어가 있는 걸 확인할 수 있다

### git log HEAD
git log 명령어와 결과값이 동일하다 ( HEAD 현재 위치? 에서 부터 commit을 보여준다 )

#### git log HEAD~[숫자]
git log의 HEAD에서 [숫자] 전부터의 보여준다

## git show
현재( HEAD )의 commit 내용을 정확하게 확인할 수 있다

### git show [해쉬코드]
[해쉬코드]의 commit을 정확하게 확인할 수 있다

#### git show [해쉬코드]:[파일이름] (파일의 확장자명까지 작성해야 한다)
[해쉬코드]의 commit 중에서 해당하는 [파일이름] 내용만 확인할 수 있다

## git checkout
git log에서 확인한 해쉬코드를 이용해 해당되는 __버전으로 이동__ 할 수 있다

### git checkout __master__
해당 프로젝트의 최신 버전으로 돌아간다

### git checkout [해쉬코드]
[해쉬코드] 버전의 프로젝트로 이동한다`  


# $ git remote add origin repository 주소
### 복사한 repository 원격 저장소와 로컬저장소가 연결됩니다

# git remote -v
### 연결된 repository 원격저장소를 보여줍니다

# $ git push origin master
### commit 해두었던 파일들을 원격 저장소에 올립니다

# $ git remote set-url origin repository 주소
### 기존 원격 저장소 URL을 변경합니다



[Git 명령어 Reference](https://git-scm.com/docs)
