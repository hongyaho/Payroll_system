--
-- Table structure for table `Authorized`
--

CREATE TABLE `Authorized` (
  `name` varchar(30) NOT NULL,
  `id` text NOT NULL,
  `password` text NOT NULL,
  `login_status` boolean,
  PRIMARY KEY (`name`)
);

--
-- Dumping data for table `Authorized`
--
INSERT INTO `Authorized` VALUES ('boss', 'cau2021', 'se2021!!', 0);


--
-- Table structure for table `topic`
--

CREATE TABLE `DataList` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `phoneNUM` int(11) NOT NULL,
  `working_hours` time DEFAULT NULL,
  `pay` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`, `name`)
);

--
-- Dumping data for table `DataList`
--

INSERT INTO `DataList` VALUES (1,'aaa','ab1111','01099998888', 00:00:00, 0);
INSERT INTO `DataList` VALUES (2,'bbb','aa1234','01067899876', 00:00:00, 0);
INSERT INTO `DataList` VALUES (3,'ccc','0987po','01012345678', 00:00:00, 0);
INSERT INTO `DataList` VALUES (4,'ddd','qw7654','01066667777', 00:00:00, 0);
INSERT INTO `DataList` VALUES (5,'eee','njnj34','01033887766', 00:00:00, 0);
