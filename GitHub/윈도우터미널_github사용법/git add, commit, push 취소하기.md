# git add / commit / push 취소하기

## git add 취소
``git add`` 명령으로 모든 파일을 ``Staging Area`` ( git add 명령 수행한 후의 상태 )에 넣은 파일을 빼고 싶을 때

### git reset HEAD
전체파일
> git reset HEAD  

단일 파일
> git reset HEAD 파일명  

### git restore --staged 파일명
> git restore --staged 파일명

## git commit 취소

### git reset HEAD^
커밋 기록 자체를 제거  
^(꺽쇠) 수 만큼 이전으로 돌아간다  
^ (한단계 앞)  
^^ (두단계 앞)  
~숫자 로도 가능  
  
commit을 취소하고 해당 파일들은 staged 상태로 워킹 디렉터리에 보존
> git reset --soft HEAD^  

commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에 보존
> git reset HEAD^
> git reset HEAD~1 # 마지막 commit을 취소. 하나를 되돌림  

> git reset HEAD^^ 
> git reset HEAD~2 # 마지막 2개의 commit을 취소

commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에서 삭제
> $ git reset --hard HEAD^

## git push 취소
### commit 이력 조회
> git log  

> git log --oneline  
  
#### --oneline
한줄씩 깔끔하게 확인 가능

### reset
``commit``의 reset과 동일한 부분  
log로 확인한 commit ID로도 삭제 가능하다
> git reset --hard "commit ID"  

### github에서의 삭제
> git push -f origin code_review

### git 추적 제거
git rm
→ Git이 추적 중인 파일을 제거  
  
--cached
→ 로컬 파일은 유지하고
→ Git 인덱스(추적 목록)에서만 제거
  
> git rm --cached 파일명

## git reset 옵션
### -soft
index 보존 ( add한 상태, staged상태 )

### -mixed
index 취소 ( add하기 전 상태, unstaged 상태 ), 워킹 디렉토리의 파일 보존

### -hard
index 취소 ( add하기 전 상태, unstaged 상태 ), 워킹 디렉토리의 파일 삭제  
``작업 배용 다 사라진다 주의!!``

## git revert
``git reset``은 완전히 제거  
``git revert``은 제거 후 commit을 남긴다  
현업할 때 주로 사용된다

[내용출처](https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-git-add-commit-push-%EC%B7%A8%EC%86%8C%ED%95%98%EA%B8%B0-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-git-reset-restore-clean)  
[내용출처](https://velog.io/@jiiiiinni/Git-GitHub-push%ED%95%9C-commit-%EC%82%AD%EC%A0%9C)