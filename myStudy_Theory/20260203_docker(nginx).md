## nginx 설치

```bash
docker pull nginx:1.28
```

## 컨테이너 생성
```bash
docker run --network=my-net -d -p 80:80 --name web nginx:1.28
```

## 서비스 동작 여부 확인
```bash
docker run nginx:1.28
docker exec -it [컨테이너id_4자리] /bin/bash
curl http://localhost:80/
```

## ip 주소 검색

```bash
apt update
apt install net-tools
ifconfig #inet
```

## ping 알아보기
```bash
apt install -y iputils-ping
ping 172.18.0.1(ip주소)
```

## Nginx 화면 경로
```bash
/usr/share/nginx/html/index.html
```

## Nginx html 수정 실행
``` bash
docker run -d -p 80:80 -v ./index.html:/usr/share/nginx/html/index.html --name web nginx:1.28
```

## 이미지생성

1. dockerfile 생성
```bash
# 베이스 이미지
FROM ubuntu:24.04 

RUN apt update
RUN apt install -y nginx

COPY ./index.html /var/www/html/index.nginx-debian.html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
```

2. image 생성
```bash
docker build -t web:0.0.1 .
```

3. container 생성
```bash
docker run -d -p 80:80 --name web web:0.0.1
```