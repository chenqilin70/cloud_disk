package com.oracle.five.cloud_disk.beans;

import java.util.List;

public class CloudFile {
	
    private Integer fileId;
    private CloudFile fatherFile;
    private String fileName;
    private String realPath;
    private Boolean isDelete;
    private Integer scanCount;
    private Integer saveCount;
    private Integer downloadCount;
    private Integer type;
    private Boolean isCopy;
    private Integer fatherid;
    
    public Boolean getIsCopy() {
		return isCopy;
	}

	public void setIsCopy(Boolean isCopy) {
		this.isCopy = isCopy;
	}

	public Integer getFatherid() {
		return fatherid;
	}

	public void setFatherid(Integer fatherid) {
		this.fatherid = fatherid;
	}

	private List<CloudFile> childFiles;
    
    public List<CloudFile> getChildFiles() {
		return childFiles;
	}

	public void setChildFiles(List<CloudFile> childFiles) {
		this.childFiles = childFiles;
	}
    public Integer getFileId() {
        return fileId;
    }

    public void setFileId(Integer fileId) {
        this.fileId = fileId;
    }

    public CloudFile getFatherFile() {
		return fatherFile;
	}

	public void setFatherFile(CloudFile fatherFile) {
		this.fatherFile = fatherFile;
	}
    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName == null ? null : fileName.trim();
    }
    public String getRealPath() {
        return realPath;
    }
    public void setRealPath(String realPath) {
        this.realPath = realPath == null ? null : realPath.trim();
    }
    public Boolean getIsDelete() {
        return isDelete;
    }
    public void setIsDelete(Boolean isDelete) {
        this.isDelete = isDelete;
    }
    public Integer getScanCount() {
        return scanCount;
    }
    public void setScanCount(Integer scanCount) {
        this.scanCount = scanCount;
    }
    public Integer getSaveCount() {
        return saveCount;
    }
    public void setSaveCount(Integer saveCount) {
        this.saveCount = saveCount;
    }
    public Integer getDownloadCount() {
        return downloadCount;
    }
    public void setDownloadCount(Integer downloadCount) {
        this.downloadCount = downloadCount;
    }
    public Integer getType() {
        return type;
    }
    public void setType(Integer type) {
        this.type = type;
    }



	public CloudFile(Integer fileId, CloudFile fatherFile, String fileName, String realPath, Boolean isDelete,
			Integer scanCount, Integer saveCount, Integer downloadCount, Integer type, Boolean isCopy, Integer fatherid,
			List<CloudFile> childFiles) {
		super();
		this.fileId = fileId;
		this.fatherFile = fatherFile;
		this.fileName = fileName;
		this.realPath = realPath;
		this.isDelete = isDelete;
		this.scanCount = scanCount;
		this.saveCount = saveCount;
		this.downloadCount = downloadCount;
		this.type = type;
		this.isCopy = isCopy;
		this.fatherid = fatherid;
		this.childFiles = childFiles;
	}

	@Override
	public String toString() {
		return "CloudFile [fileId=" + fileId + ", fatherFile=" + fatherFile + ", fileName=" + fileName + ", realPath="
				+ realPath + ", isDelete=" + isDelete + ", scanCount=" + scanCount + ", saveCount=" + saveCount
				+ ", downloadCount=" + downloadCount + ", type=" + type + ", isCopy=" + isCopy + ", fatherid="
				+ fatherid + ", childFiles=" + childFiles + "]";
	}

	public CloudFile() {
		super();
	}
    
}