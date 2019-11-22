DROP TABLE IF EXISTS `bloglist`;
CREATE TABLE `bloglist` (
  `name` varchar(200) DEFAULT NULL COMMENT '博客列表',
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `category` varchar(200) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

