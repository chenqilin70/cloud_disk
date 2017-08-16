package com.oracle.five.cloud_disk.biz;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.oracle.five.cloud_disk.beans.CloudFile;
import com.oracle.five.cloud_disk.beans.Share;
import com.oracle.five.cloud_disk.beans.ShareFile;
import com.oracle.five.cloud_disk.mapper.CloudFileMapper;
import com.oracle.five.cloud_disk.mapper.ShareFileMapper;
import com.oracle.five.cloud_disk.mapper.ShareMapper;

@Service
public class SharepageService {
	@Autowired
	private CloudFileMapper filemapper;
	@Autowired
	private ShareMapper sharemapper;
	@Autowired
	private ShareFileMapper sharefilemapper;
	private Share share;
	private ShareFile sharefile;
	
	//创建公共链接
	public void createsharelink(String type,String timerange,String fileid,String link){
		if(fileid.contains("-")){
			
		}else{
			share=new Share();
			share.setShareType(Integer.valueOf(type));
			share.setSharelink(link);
			share.setShareTime(new Date());
			share.setShareId(0);
			share.setTimerange(Integer.valueOf(timerange));
			sharemapper.insert(share);
			share=sharemapper.selectsharelinkbylink(link);
			sharefile=new ShareFile();
			sharefile.setShareId(share.getShareId());
			sharefile.setFileId(Integer.valueOf(fileid));
			sharefilemapper.insert(sharefile);
		}
	}
	
	//创建私密链接
	public void createsharelink(String type,String passwd,String timerange,String fileid,String link){
		if(fileid.contains("-")){
			
		}else{
			share=new Share();
			share.setPassword(passwd);
			share.setShareType(Integer.valueOf(type));
			share.setSharelink(link);
			share.setShareTime(new Date());
			share.setShareId(0);
			share.setTimerange(Integer.valueOf(timerange));
			sharemapper.insert(share);
			share=sharemapper.selectsharelinkbylink(link);
			sharefile=new ShareFile();
			sharefile.setShareId(share.getShareId());
			sharefile.setFileId(Integer.valueOf(fileid));
			sharefilemapper.insert(sharefile);
		}
	}
	
	
	
	//打开链接的服务判断层
	public String opensharelinkservice(String fileid,String posetfix,String password){
		System.out.println(password);
		Share sh=sharemapper.selectsharelinkbylink(posetfix);
		Date nowtime=new Date();
		if(nowtime.getTime()>(sh.getShareTime().getTime()+sh.getTimerange()*24*60*60*1000)){
			if(sh.getShareType()==1){
				if(password.length()<=0){
					return "needpassword";
				}else{
					if(password.equals(sh.getPassword())){
						return "success";
					}else{
						return "needpassword";
					}
				}
			}else{
				return "success";
			}
		}else{
			return "timeout";
		}
	}
	
	//获取分享链接中的分享文件
	public List<CloudFile> getsharefiles(String shareid){
		List<CloudFile> lsfile=null;
		lsfile=new ArrayList<>();
		for (ShareFile s : sharefilemapper.selectbyshareid(Integer.valueOf(shareid))) {
			CloudFile f=filemapper.selectByPrimaryKey(s.getFileId());
			lsfile.add(f);
		}
		return lsfile;
	}
	
	//根据分享链接查share
	public Share getsharebylink(String link){
		return sharemapper.selectsharelinkbylink(link);
	}
	
	//根据shareid查文件id
	public List<ShareFile> getfileidbyshareid(String shareid){
		return sharefilemapper.selectbyshareid(Integer.valueOf(shareid));
	}
	
	//根据id取得当前文件
	public CloudFile getpreviousfoldservice(String fileid){
		CloudFile f=filemapper.selectByPrimaryKey(Integer.valueOf(fileid));
		return f;
	}
	
	//根据文件id取得其子文件
	public List<CloudFile> getallsonfileservice(String fileid){
		List<CloudFile> lsf=filemapper.selectFile(Integer.valueOf(fileid));
		return lsf;
	}
}
