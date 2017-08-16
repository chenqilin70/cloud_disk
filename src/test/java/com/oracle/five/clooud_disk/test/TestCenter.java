package com.oracle.five.clooud_disk.test;



import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import com.oracle.five.cloud_disk.beans.User;
import com.oracle.five.cloud_disk.mapper.UserMapper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.oracle.five.cloud_disk.beans.User;
import com.oracle.five.cloud_disk.biz.ShareBiz;
import com.oracle.five.cloud_disk.mapper.RelationshipMapper;



public class TestCenter {
	private UserMapper mapper;
	
	private ObjectMapper objectMapper;
	private RelationshipMapper relationshipMapper;
	@Before
	public void before(){
		ApplicationContext ac=new ClassPathXmlApplicationContext("spring-main.xml");
		mapper=(UserMapper) ac.getBean("userMapper");
		objectMapper=(ObjectMapper) ac.getBean("objectMapper");
		relationshipMapper=(RelationshipMapper) ac.getBean("relationshipMapper");
	}
	
	@Test
	public void test() throws JsonProcessingException {
		System.out.println(objectMapper.writeValueAsString(relationshipMapper.getFriendList(2)));
		User user=new User("123", "wwee", "default.jpg");
		mapper.adduser(user);
		
	}

}
