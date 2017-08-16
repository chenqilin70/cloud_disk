package com.oracle.five.cloud_disk.beans;

import java.util.Date;

public class Relationship {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column RELATIONSHIP.RELATIONSHIP_ID
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    private Integer relationshipId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column RELATIONSHIP.HOST_USER_ID
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    private User hostUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column RELATIONSHIP.FRIEND_USER_ID
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    private User friendUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column RELATIONSHIP.REMARK
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    private String remark;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column RELATIONSHIP.ADD_TIME
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    private Date addTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column RELATIONSHIP.RELATIONSHIP_ID
     *
     * @return the value of RELATIONSHIP.RELATIONSHIP_ID
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    public Integer getRelationshipId() {
        return relationshipId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column RELATIONSHIP.RELATIONSHIP_ID
     *
     * @param relationshipId the value for RELATIONSHIP.RELATIONSHIP_ID
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    public void setRelationshipId(Integer relationshipId) {
        this.relationshipId = relationshipId;
    }

    
    public User getHostUser() {
		return hostUser;
	}

	public void setHostUser(User hostUser) {
		this.hostUser = hostUser;
	}

	public User getFriendUser() {
		return friendUser;
	}

	public void setFriendUser(User friendUser) {
		this.friendUser = friendUser;
	}

	/**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column RELATIONSHIP.REMARK
     *
     * @return the value of RELATIONSHIP.REMARK
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    public String getRemark() {
        return remark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column RELATIONSHIP.REMARK
     *
     * @param remark the value for RELATIONSHIP.REMARK
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column RELATIONSHIP.ADD_TIME
     *
     * @return the value of RELATIONSHIP.ADD_TIME
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    public Date getAddTime() {
        return addTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column RELATIONSHIP.ADD_TIME
     *
     * @param addTime the value for RELATIONSHIP.ADD_TIME
     *
     * @mbg.generated Sat Aug 05 14:04:49 CST 2017
     */
    public void setAddTime(Date addTime) {
        this.addTime = addTime;
    }

	@Override
	public String toString() {
		return "Relationship [relationshipId=" + relationshipId + ", remark="
				+ remark + ", addTime=" + addTime + "]";
	}
    
}