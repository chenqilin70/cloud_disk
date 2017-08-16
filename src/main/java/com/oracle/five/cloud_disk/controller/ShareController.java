package com.oracle.five.cloud_disk.controller;

import java.util.Map;
import java.util.Scanner;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.oracle.five.cloud_disk.beans.Relationship;
import com.oracle.five.cloud_disk.beans.User;
import com.oracle.five.cloud_disk.biz.ShareBiz;
@SessionAttributes("loginUser")
@Controller
public class ShareController {
	@Autowired
	private ObjectMapper objectMapper;
	@Autowired
	private ShareBiz shareBiz;
	
	@RequestMapping("/share")
	public String share(ModelMap map,@ModelAttribute("loginUser") User loginedUser){
		map.addAttribute("relationshipList", shareBiz.getFriendList(loginedUser.getUserId()));
		map.addAttribute("dialogueList", shareBiz.getDialogueList(loginedUser));
		return "share";
	}
	@RequestMapping("/searchFriend")
	@ResponseBody
	public User searchFriend(User user,@ModelAttribute("loginUser") User loginedUser){
		User result=shareBiz.getUserByNickname(user.getNickname(),loginedUser.getUserId());
		try {
			System.out.println(objectMapper.writeValueAsString(user));
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return result==null?new User():result;
	}
	@RequestMapping("/addRelationship")
	public String addRelationship(Relationship relationship,@ModelAttribute("loginUser") User loginedUser,ModelMap map){
		Relationship result=shareBiz.addRelationship(relationship,loginedUser.getUserId());
		map.put("relate", result);
		return "single_friend_li";
		
	}
	@RequestMapping("/addRemark")
	@ResponseBody
	public String addRemark(Relationship relationship){
		return shareBiz.addRemark(relationship);
	}
	@RequestMapping("/getFriendMain")
	public String getFriendMain(@ModelAttribute("relate") Relationship relationship){
		return "friend_main";
	}
	@RequestMapping("/deleteRelationship")
	@ResponseBody
	public boolean deleteRelationship(@RequestParam("relationshipId")Integer relationshipId){
		return shareBiz.deleteRelationship(relationshipId);
	}
	@RequestMapping("/getFriendIndex")
	public String getFriendIndex(){
		return "right_index";
	}
	
	
	
	
}
