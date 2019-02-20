# $ git init
### 깃을 init(초기화) 시켜줍니다

# $ git status
### 올라가 파일이 있는지 현재 폴더에 있는 파일들을 확인합니다.


# $ git add .
### 로컬저장소에 파일들을 올려줍니다
### 모든 파일을 다 Push할 경우 add . 
### 특정 파일만 업로드 add 파일명 or 폴더명

# $ git commit -m "Push 메시지명
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
