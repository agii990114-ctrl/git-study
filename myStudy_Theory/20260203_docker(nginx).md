## nginx 설치

```bash
docker pull nginx:1.28
```

## 컨테이너 생성
```bash
docker run --network=my-net -d -p 80:80 -name web nginx:1.28
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
