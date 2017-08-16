package com.oracle.five.cloud_disk.beans;

import java.util.List;

public class Dialogue {
    private Integer dialogueId;

    private User hostUser;
    private User toUser;
    private List<ChatRecord> chatRecords;
    private String remark;
    
    
    public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public List<ChatRecord> getChatRecords() {
		return chatRecords;
	}

	public void setChatRecords(List<ChatRecord> chatRecords) {
		this.chatRecords = chatRecords;
	}
    public Integer getDialogueId() {
        return dialogueId;
    }

    public void setDialogueId(Integer dialogueId) {
        this.dialogueId = dialogueId;
    }

	public User getHostUser() {
		return hostUser;
	}

	public void setHostUser(User hostUser) {
		this.hostUser = hostUser;
	}

	public User getToUser() {
		return toUser;
	}

	public void setToUser(User toUser) {
		this.toUser = toUser;
	}

    
}