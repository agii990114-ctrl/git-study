MariaDB 및 Python 개발 학습 노트
1. MariaDB 테이블 생성 및 외래 키 (Foreign Key)
테이블 생성 (User & Post)

```

USE edu;

-- 사용자 테이블

CREATE TABLE `user` (

    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    `name` VARCHAR(30) NOT NULL,

    `email` VARCHAR(150) NOT NULL,

    `password` VARCHAR(255) NOT NULL,

    `gender` BOOL NULL,

    `delYn` BOOL NOT NULL DEFAULT FALSE,

    `regDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    `modDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

-- 게시판 테이블 (외래 키 포함)

CREATE TABLE `post` (

    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    `title` VARCHAR(40) NOT NULL,

    `content` VARCHAR(255) NULL,

    `delYn` BOOL NOT NULL DEFAULT FALSE,

    `user_no` INT NOT NULL,

    `regDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    `modDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    

    -- 외래 키 설정

    CONSTRAINT `fk_post_user_no` FOREIGN KEY (`user_no`) REFERENCES `user` (`no`)

    ON UPDATE CASCADE

    ON DELETE CASCADE

);

```

외래 키 옵션 설명

• CONSTRAINT [이름]: 제약 조건의 식별자 (관리용 별명)

• ON UPDATE CASCADE: 부모(User) 번호 변경 시 자식(Post)의 작성자 번호도 자동 변경

• ON DELETE CASCADE: 부모(User) 삭제 시 해당 유저의 모든 글도 자동 삭제

---

2. SQL 기본 문법 (DML)
• INSERT: `INSERT INTO 테이블 (컬럼) VALUES (값);`

• UPDATE: `UPDATE 테이블 SET 컬럼=값 WHERE 조건;` (WHERE 필수)

• DELETE: `DELETE FROM 테이블 WHERE 조건;` (실제 삭제 주의)

---

3. Python 개발 팁
환경변수 우선순위 설정 (.env 우선)

`python-dotenv` 라이브러리 사용 시 `override=True` 옵션을 주면 시스템 환경변수보다 `.env` 파일의 설정이 우선 적용됩니다.

```

from dotenv import load_dotenv

load_dotenv(override=True)

```

f-string 출력 너비 고정

내용이 길어도 출력 틀을 유지하려면 너비 지정자를 사용합니다.

```

print(f'{"번호":<5} | {"글자":<20} | {"날짜":<20}')

# :<20 은 20칸 확보 후 왼쪽 정렬을 의미

```

---

4. 예외 처리 (SystemExit)
`argparse` 등에서 발생하는 프로그램 종료 신호는 `SystemExit` 예외로 낚아챌 수 있습니다. 이는 일반적인 `Exception` 계층보다 상위인 `BaseException`에 속합니다.
