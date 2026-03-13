USE db_air;

CREATE OR REPLACE TABLE 비행 (
  년도 int,
  월  int,
  일 int,
  요일  int,
  실제출발시간   VARCHAR(255),
  예정출발시간  VARCHAR(255),
  실제도착시간  VARCHAR(255),
  예정도착시간  VARCHAR(255),
  항공사코드  VARCHAR(255),
  항공편번호  int,
  항공기등록번호  VARCHAR(255),
  실제경과시간  VARCHAR(255),
  예정경과시간  VARCHAR(255),
  비행시간  int,
  도착지연시간  VARCHAR(255),
  출발지연시간  VARCHAR(255),
  출발공항코드  VARCHAR(255),
  도착지공항코드  VARCHAR(255),
  비행거리  int,
  비행기착륙게이트도착할때까지시간 VARCHAR(255),
  출발지공항의게이트에서이륙까지의시간  VARCHAR(255),
  비행취소여부 VARCHAR(255),
  비행취소코드  VARCHAR(255),
  우회여부  VARCHAR(255),
  항공사지연  VARCHAR(255),
  기상지연  VARCHAR(255),
  NAS지연  VARCHAR(255),
  보안지연  VARCHAR(255),
  연착항공기지연  VARCHAR(255)
);

CREATE OR REPLACE TABLE 운반대 (
	코드 VARCHAR(10), 
	설명 VARCHAR(50)
);

CREATE OR REPLACE TABLE 항공사 (
	항공사코드 VARCHAR(50),
	항공사명 VARCHAR(100),
	도시 VARCHAR(100),
	도시코드 varchar(2),
	국가 VARCHAR(255),
	위도 INT,
	경도 INT
);

LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\IDE\\csv_airport\\1987.csv' 
IGNORE INTO TABLE `db_air`.`비행` 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\IDE\\csv_airport\\carriers.csv' 
IGNORE INTO TABLE `db_air`.`운반대` 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\IDE\\csv_airport\\airports.csv' 
IGNORE INTO TABLE `db_air`.`항공사` 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

SELECT COUNT(*) FROM db_air.비행;
SELECT COUNT(*) FROM db_air.운반대;
SELECT COUNT(*) FROM db_air.항공사;

SELECT 년도, 월, COUNT(*) FROM db_air.비행 GROUP BY 년도, 월;