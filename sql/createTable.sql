use knowledge

/* 团队表 */
DROP TABLE IF EXISTS 'team';
CREATE TABLE team (
	'team_id'   	VARCHAR(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,    /* 团队id */
	'team_name' 	VARCHAR(50),   				/* 团队名称 */
	'team_avatar' 	VARCHAR(200),            /* 团队图标 */
	'createTime' 	DATE,				  /* 团队创建时间 */
	'introduction' 	VARCHAR(100)			  /* 团队简介 */
);


/* 成员表 */
DROP TABLE IF EXISTS 'member';
CREATE TABLE member (
	'member_id' 	VARCHAR(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,	 /* 成员 id */
	'member_name' 	VARCHAR(50),			/* 成员名称 */
	'sex' 			VARCHAR(5),					/* 成员性别 */

	'team_id' 		VARCHAR(50),				/* 所属团队 id */
	'position' 		VARCHAR(15),				/* 职位 */

	'grade' 		VARCHAR(4),					/* 年级, 如 2014*/
	'academy' 		VARCHAR(10),				/* 学院 */
	'major' 		VARCHAR(15),					/* 专业 */
	'class' 		VARCHAR(4),					/* 班级 */		

	'email' 		VARCHAR(50),					/* 邮箱地址 */
	'tele' 			VARCHAR(11),					/* 电话号码(长号) */
	'wechat' 		VARCHAR(25),				/* 微信号 */
	'QQ' 			VARCHAR(15),					/* QQ */

	'job' 			VARCHAR(30),					/* 工作岗位 */
	'location' 		VARCHAR(50),				/* 现工作地 */
	FOREGIN KEY (team_id) REFERENCES team(team_id)
);

/* 管理员表 */
DROP TABLE IF EXISTS 'admin';
CREATE TABLE admin (
	'admin_id' VARCHAR(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	'accounts' VARCHAR(10),
	'password' VARCHAR(100)
);

/* 文章表 */
DROP TABLE IF EXISTS 'article';
CREATE TABLE article (
	'article_id' 	VARCHAR(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	'title' 		VARCHAR(50),
	'author' 		VARCHAR(50),
	'publish_time'	DATE,
	'link' 			VARCHAR(100),
	'summary' 		VARCHAR(100),
	'article_body' 	LONGTEXT,
	'pageView' 		INT,
	'praise' 		INT
);

/* 留言表 */
DROP TABLE IF EXISTS 'comment';
CREATE TABLE comment (
	'comment_id' 	VARCHAR(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	'fromWho' 		VARCHAR(50) NOT NULL,
	'toWho' 		VARCHAR(50) NOT NULL,
	'comment_time' 	DATE NOT NULL,
	'comment_text' 	VARCHAR(100) NOT NULL
);

/* 留言回复表 */
DROP TABLE IF EXISTS 'commentReply';
CREATE TABLE commentReply (
	'reply_id' 			VARCHAR(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	'toComment_id' 		VARCHAR(50) NOT NULL,
	'fromWho' 			VARCHAR(50) NOT NULL,
	'toWho'				VARCHAR(50) NOT NULL,
	'reply_time' 		DATE NOT NULL,
	'reply_text' 		VARCHAR(100) NOT NULL
);

