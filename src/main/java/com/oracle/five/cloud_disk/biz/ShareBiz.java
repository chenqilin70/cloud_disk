package com.oracle.five.cloud_disk.biz;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.oracle.five.cloud_disk.beans.Dialogue;
import com.oracle.five.cloud_disk.beans.Relationship;
import com.oracle.five.cloud_disk.beans.User;
import com.oracle.five.cloud_disk.mapper.DialogueMapper;

@Service
public class ShareBiz extends BaseBiz{

	public User getUserByNickname(String nickname,Integer loginedUserId) {
		User result=userMapper.getUserByNickname(nickname);
		if(result!=null){
			if(result.getUserId().equals(loginedUserId)){
				result.setWho(User.ME);
			}else{
				boolean flag=relationshipMapper.getBothRelate(result.getUserId(),loginedUserId);
				if(flag)
					result.setWho(User.FRIEND);
				else
					result.setWho(User.STRANGER);
			}
		}
		return result;
	}

	public Relationship addRelationship(Relationship relationship, Integer loginedUserId) {
		User user=new User();
		user.setUserId(loginedUserId);
		relationship.setHostUser(user);
		relationship.setAddTime(new Date());
		relationshipMapper.insert(relationship);
		User friend=userMapper.selectByPrimaryKey(relationship.getFriendUser().getUserId());
		relationship.setFriendUser(friend);
		return relationship;
	}

	public List<User> getFriendList(Integer loginedUserId) {
		return relationshipMapper.getFriendList(loginedUserId);
	}

	public String addRemark(Relationship relationship) {
		return ""+relationshipMapper.addRemark(relationship);
	}

	public boolean deleteRelationship(Integer relationshipId) {
		return relationshipMapper.deleteByPrimaryKey(relationshipId);
	}

	public List<Dialogue> getDialogueList(User loginedUser) {
		return dialogueMapper.getDialogueList(loginedUser.getUserId());
	}
	

}


















