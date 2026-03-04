from bs4 import BeautifulSoup

# 1. 파일 경로 설정
file_path = 'D:/IDE/workspaces/git-study/myStudy_Practice/20260303_ETL/study01/네이버 뉴스.html'

# 2. open() 함수로 파일 내용 읽기
# 'r'은 읽기 모드, encoding='utf-8'은 한글 깨짐 방지용입니다.
with open(file_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# 3. BeautifulSoup에 읽어온 내용을 전달
soup = BeautifulSoup(html_content, 'lxml')

# print(len(main_brick))

main_brick = soup.find('div', class_='main_brick')
sub = main_brick.find('div', class_='grid1_wrap brick-house _brick_gid_wrapper')
brick = sub.find('div', class_="brick-vowel")
div = brick.find('div', class_="main_brick_item")

arr = []

print(div)

# for i in range(len(brick)):

#     print(f"{i} 는 이겁니다: {brick}")
    # print(f"{i}번째 요소의 텍스트: {brick[i].get_text(strip=True) }")
    
# print(arr[1])
# print(main_brick.find('div'))

