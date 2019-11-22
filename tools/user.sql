DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'wbqing', 'wbqing');
INSERT INTO `user` VALUES ('2', 'xyfeng', 'xyfeng');
INSERT INTO `user` VALUES ('3', 'wcqi', 'wcqi');
INSERT INTO `user` VALUES ('4', 'xhan', 'xhan');
