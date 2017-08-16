package com.oracle.five.cloud_disk.beans;

import java.util.List;

public class ShareFile {
	private int shareId;
	private int fileId;
	
	private List<ShareFile> sharefiles;
	
	
	
	public ShareFile(int shareId, int fileId, List<ShareFile> sharefiles) {
		super();
		this.shareId = shareId;
		this.fileId = fileId;
		this.sharefiles = sharefiles;
	}
	public List<ShareFile> getSharefiles() {
		return sharefiles;
	}
	public void setSharefiles(List<ShareFile> sharefiles) {
		this.sharefiles = sharefiles;
	}
	public int getShareId() {
		return shareId;
	}
	public void setShareId(int shareId) {
		this.shareId = shareId;
	}
	public int getFileId() {
		return fileId;
	}
	public void setFileId(int fileId) {
		this.fileId = fileId;
	}
	public ShareFile(int shareId, int fileId) {
		super();
		this.shareId = shareId;
		this.fileId = fileId;
	}
	public ShareFile() {
		super();
	}
	@Override
	public String toString() {
		return "ShareFile [shareId=" + shareId + ", fileId=" + fileId + ", sharefiles=" + sharefiles + "]";
	}
	
	
}
