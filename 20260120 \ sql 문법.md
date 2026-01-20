select emp_no, title
from titles;
```

> `LIMIT` 알아보기

- 문법 1: LIMIT 몇 개
- 문법 2: LIMIT offset, 몇 개
- offset은 0부터 시작

```sql
select * from employees limit 3;
```

```sql
select * from employees limit 4, 3;
```

### 산술 연산자 `+, -, *, /`

- 1. 단순 계산

```sql
select 10 + 10;
select 20-10, 30*3, 40/2;
```

- 2. 특정 컬럼 데이터 연산
```sql
select emp_no, salary, salary + 10 as '10증가 값' from salaries;
```

- [문제] 사번, 현재 연봉, 10% 인상된 각 사원의 연봉 조회 (조회 결과에서 상위 20개 로우만 조회)

```sql
select emp_no, salary, salary * 1.1 as '10% 인상' from salaries  limit 20;
```

### `distinct` 중복 제거

```sql
select distinct dept_no from dept_manager; 
```

### `where` 사용되는 연산자
- 비교(관계) 연산자

| 기호 | 뜻 |
| :---: | :---: |
| `<` | 작다, 미만 |
| `>` | 크다, 초과 |
| `<=` | 작거나 같다, 이하 |
| `>=` | 크거나 같다, 이상 |
| `=` | 같다 |
| `<>` | 다르다 |

- 논리 연산자: 

| 기호 | 뜻 |
| :---: | :---: |
| `and` | 모두 참일 때 TRUE |
| `or` | 하나라도 참이면 TRUE |
| `not` | 조건 반전 |

- 범위 연산자: 

| 기호 | 뜻 |
| :---: | :---: |
| `between A and B` | A ~ B |

- 집합 연산자: 

| 기호 | 뜻 |
| :---: | :---: |
| `in (값1, 값2, ...)` | 일치하는 데이터 |
| `not in (값1, 값2, ...)` | 불일치하는 데이터 |

- 문자열 연산자:

| 기호 | 뜻 |
| :---: | :---: |
| `like` | 일치 |
| `not like` | 불일치 |
| `%` | 와일드 카드 |
| `_` | 값 하나 |

- `null` 연산자:

| 기호 | 뜻 |
| :---: | :---: |
| `is null` | 값이 null이면 TRUE |
| `is not null` | 값이 null이 아니면 TRUE |

> 실습

- 사번이 `10001`인 직원의 사번과 이름 조회
```sql
select emp_no, first_name from employees
```

- [문제 1] `d005` 부서 매니저의 사원번호, 부서번호 추출하시오.
```sql
select emp_no, dept_no from dept_manager
```

- [문제 2] `d003` 부서 소속(담당)이 아닌 매니저들의 사원번호, 부서번호 추출하시오.
```sql
select emp_no, dept_no from dept_manager
```

- [문제 3] 연봉이 `150,000` 이상인 사원들의 사원번호, 연봉 추출하시오.
```sql
select emp_no, salary from salaries
```

- [문제 4] `1986`년 이후에 입사한 사원의 사원번호, 입사일, 이름 추출하시오.
```sql
select emp_no, hire_date, first_name from employees
```

- [문제 5] `1990`년 이후부터 매니저로 근무하고 있는 사원들의 사원번호, 부서번호, 매니저 시작날짜 추출하시오.
```sql
select emp_no, dept_no, from_date from dept_manager
```

- [문제 6] `1990`년 이전 입사한 사원들의 사원번호, 입사일 추출하시오.
```sql
select emp_no, hire_date from employees
```

- [문제 7] `1990`년 이후 입사한 남자 사원의 사원번호, 성별, 입사일 추출
```sql
select emp_no, gender, hire_date from employees
```

- [문제 8] `1990`년 이후부터 연봉을 `60,000` 이상 받는 사원의 사원번호, 연봉, 연봉 시작일 추출
```sql
select emp_no, salary, from_date from salaries
```

- [문제 9] `d001` 부서와 `d002` 부서 매니저의 사원번호, 부서번호 추출
```sql
select emp_no, dept_no from dept_manager
```

- [문제 10] 직책이 `staff`이거나 `engineer`인 사원의 사원번호, 직책 추출
```sql
select emp_no, title from titles
```

- [문제 11] `d003` 부서 소속(담당)이 아닌 매니저의 사원번호, 부서번호 추출
```sql
select emp_no, dept_no from dept_manager
```

- [문제 12] 연봉이 `60,000` 이상 `70,000` 이하인 사원의 사번, 연봉 추출
```sql
select emp_no, salary from salaries
```

- [문제 13] `d001` 부서와 `d002` 부서 매니저의 사번, 부서번호 추출
```sql
select emp_no, dept_no from dept_manager
```

- [문제 14] `d001` 부서와 `d002` 부서가 아닌 매니저의 사번, 부서번호 추출
```sql
select emp_no, dept_no from dept_manager
```

- [문제 15] 이름이 `B`로 시작하는 사원의 사번, 이름 조회
```sql
select emp_no, first_name from employees
```

- [문제 16] 이름의 두 번째 글자가 `r`인 사원의 사번, 이름 조회
```sql
select emp_no, first_name from employees
```

- [문제 17] 이름이 `i`로 끝나는 사원의 사번, 이름 조회
```sql
select emp_no, first_name from employees
```

- [문제 18] 이름이 `B`로 시작하지 않는 사원의 사번, 이름 조회
```sql
select emp_no, first_name from employees
```

### [함수] 숫자

- 절댓값
```sql
select abs(100), abs(-100);
```

- 소수점 이하 올림
```sql
select ceil(10.42), ceil(10.5), ceil(10.6);
```

- 소수점 이하 내림
```sql
select floor(10.432), floor(10.5), floor(10.6);
```

- 반올림
```sql
select round(10.432), round(10.5), round(10.6) round(166.555, 0), round(166.555, 1), round(166.555, -1);
```

- 버림
```sql
select truncate(166.555,0), truncate(166.555, 1), truncate(166.555, -1);
```

### [함수] 문자

- 이어주기
```sql
select concat('one', 'two', 'three');
```

> 실습

- 직원의 사번, 이름 조회 단, 이름은 first_name, last_name을 한 컬럼으로 표시
```sql
select emp_no as '사번', concat(first_name, '', last_name) as '이름' from employees;
```

### [함수] 특정 위치에 추가

- 문법: `insert('문자'(컬럼명), 시작위치, 몇개, '추가문자')`
```sql
select insert('abcdefg', 2, 1, 'wow');
```

- 2번째 자리에서 0개를 wow로 변경
```sql
select insert('abcdefg', 2, 0, 'wow');
```

- bcd를 삭제하시오!
```sql
select insert('abcdefg', 2, 3, '');
```

### [정렬] `order by`

| 정렬 | 결과 |
| :---: | :---: |
| `asc` | 오름차순 (기본값) |
| `desc` | 내림차순 |

- 연봉 오름차순, 연봉 시작일 내림차순으로 하여 사번, 연봉, 연봉 시작일 조회
```sql
select emp_no, salary, from_date from salaries order by salary asc, from_date desc;
```

- 직책을 오름차순, 업무 시작일을 내림차순하여 사번, 직책, 업무 시작일을 조회
```sql
select emp_no, title, from_date from titles order by 2 asc, 3 desc;
```
