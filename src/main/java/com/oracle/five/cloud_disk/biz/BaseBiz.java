package com.oracle.five.cloud_disk.biz;

import org.springframework.beans.factory.annotation.Autowired;

import com.oracle.five.cloud_disk.mapper.DialogueMapper;
import com.oracle.five.cloud_disk.mapper.RelationshipMapper;
import com.oracle.five.cloud_disk.mapper.UserMapper;


public class BaseBiz {
	@Autowired
	protected UserMapper userMapper;
	@Autowired
	protected RelationshipMapper relationshipMapper;
	@Autowired
	protected DialogueMapper dialogueMapper;

}
