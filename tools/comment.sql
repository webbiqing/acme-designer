DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `blog_id` int(20) DEFAULT NULL,
  `content` text(200) DEFAULT NULL,
  `prase_count` int(11) DEFAULT 0,
  `create_user` varchar(50) DEFAULT NULL,
  `create_time` datetime DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;