USE db_air;

UPDATE db_air.`운반대` SET 
	`코드` = REPLACE(`코드`, '"', ''), 
	`설명` = REPLACE(`설명`, '"', '');
	
UPDATE db_air.`항공사` SET 
	`항공사코드` = REPLACE(`항공사코드`, '"', ''), 
	`항공사명` 	= REPLACE(`항공사코드`, '"', ''),
	`도시` 		= REPLACE(`도시`, '"', ''),
	`도시코드` = REPLACE(`도시코드`, '"', ''),
	`국가` 		= REPLACE(`국가`, '"', '');

COMMIT;

ALTER TABLE `비행` ADD INDEX `날짜인덱스` (`년도`, `월`, `일`) USING BTREE;
ALTER TABLE `비행` ADD INDEX `운반대코드` (`항공사코드`) USING BTREE;
ALTER TABLE `비행` ADD INDEX `출발운반대코드` (`출발공항코드`) USING BTREE;
ALTER TABLE `비행` ADD INDEX `도착운반대코드` (`도착지공항코드`) USING BTREE;
ALTER TABLE `운반대` ADD UNIQUE INDEX `운반대키` (`코드`);
ALTER TABLE `항공사` ADD UNIQUE INDEX `항공사키` (`항공사코드`);
