DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'LOL');
INSERT INTO `category` VALUES ('2', '情感专区');
INSERT INTO `category` VALUES ('3', '个人恩怨');
INSERT INTO `category` VALUES ('4', '加班吐槽');
INSERT INTO `category` VALUES ('5', '技术交流');
