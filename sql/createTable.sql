use knowledge;

/* 团队表 */
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
	`team_id`   	INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,    /* 团队id */
	`team_name` 	VARCHAR(50) NOT NULL,   				/* 团队名称 */
	`team_avatar` 	VARCHAR(200),            /* 团队图标 */
	`createTime` 	DATE NOT NULL,				  /* 团队创建时间 */
	`introduction` 	VARCHAR(100)			  /* 团队简介 */
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/* 成员表 */
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
	`member_id` 	INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,	 /* 成员 id */
	`member_name` 	VARCHAR(50) NOT NULL,			/* 成员名称 */
	`sex` 			VARCHAR(5) NOT NULL,					/* 成员性别 */
	`avatar`		VARCHAR(100),

	`team_id` 		VARCHAR(50) NOT NULL,				/* 所属团队 id */
	`position` 		VARCHAR(15) NOT NULL,				/* 职位 */

	`grade` 		VARCHAR(4) NOT NULL,					/* 年级, 如 2014*/
	`academy` 		VARCHAR(10) NOT NULL,				/* 学院 */
	`major` 		VARCHAR(15) NOT NULL,					/* 专业 */
	`class` 		VARCHAR(4) NOT NULL,					/* 班级 */		

	`email` 		VARCHAR(50) NOT NULL,					/* 邮箱地址 */
	`tele` 			VARCHAR(11),					/* 电话号码(长号) */
	`wechat` 		VARCHAR(25),				/* 微信号 */
	`QQ` 			VARCHAR(15),					/* QQ */

	`job` 			VARCHAR(30),					/* 工作岗位 */
	`location` 		VARCHAR(50),				/* 现工作地 */
	FOREIGN KEY (`team_id`) REFERENCES `team`(`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/* 管理员表 */
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
	`admin_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`accounts` VARCHAR(10),
	`password` VARCHAR(100)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/* 类别表 */
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
	`id` 	INT(10)  PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`name`	VARCHAR(10)
);

/* 文章表 */
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
	`article_id` 	INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`title` 		VARCHAR(50) NOT NULL,
	`author` 		VARCHAR(50) NOT NULL,
	`publish_time`	DATE NOT NULL,
	`link` 			VARCHAR(100),
	`summary` 		VARCHAR(100),
	`article_body` 	text NOT NULL,
	`pageView` 		INT(10) DEFAULT 0,
	`praise` 		INT(10) DEFAULT 0
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `article2tag`;
CREATE TABLE `article2tag` (
	`id` 			INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`article_id`	INT(10),
	`tag_id`		INT(10),
	KEY `r_article` (`article_id`),
	KEY	`r_tag`		(`tag_id`),
	CONSTRAINT `r_article` FOREIGN KEY (`article_id`) REFERENCES `article`(`article_id`) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT `r_tag`	FOREIGN KEY (`tag_id`) 	REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE		
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/* 留言表 */
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
	`comment_id` 	INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`fromWho` 		VARCHAR(50) NOT NULL,
	`toWho` 		VARCHAR(50) NOT NULL,
	`comment_time` 	DATE NOT NULL,
	`comment_text` 	VARCHAR(100) NOT NULL,
	`article_id`	INT(10)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/* 留言回复表 */
DROP TABLE IF EXISTS `commentReply`;
CREATE TABLE `commentReply` (
	`reply_id` 			INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`toComment_id` 		VARCHAR(50) NOT NULL,
	`fromWho` 			VARCHAR(50) NOT NULL,
	`toWho`				VARCHAR(50) NOT NULL,
	`reply_time` 		DATE NOT NULL,
	`reply_text` 		VARCHAR(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

