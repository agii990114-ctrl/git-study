## kafka 이미지

```bash
docker pull apache/kafka:4.0.1

```

## Docker Container 만들기 

```bash
docker run -d -p 9092:9092 --name kafka apache/kafka:4.0.1
```

## Docker Container 접속

```bash
docker exec -it kafka /bin/bash
```

## kafka 설치 위치

`- /opt/kafka/bin/`

## 토픽 만들기

```bash
./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic my-topic
```

## 토픽 목록보기

```bash
./kafka-topics.sh --bootstrap-server localhost:9092 --list
```

## 토픽 삭제

```bash
./kafka-topics.sh --bootstrap-server localhost:9092 --delete my-topic
```


## 토픽 consumer 

```bash
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
```

## 토픽 producer

```bash
./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test
```


## Python 적용

```py
#producer

from kafka import KafkaProducer

pd = KafkaProducer(bootstrap_servers="localhost:9092")

pd.send('test01',b'Hello1')
pd.flush()
```


```py
#Consumer

from kafka import KafkaConsumer

cs = KafkaConsumer('test01',bootstrap_servers=["localhost:9092"])

for msg in cs :
    print(msg)
```