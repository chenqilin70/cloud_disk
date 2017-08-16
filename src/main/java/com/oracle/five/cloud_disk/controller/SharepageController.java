package com.oracle.five.cloud_disk.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jdt.internal.compiler.ast.CompilationUnitDeclaration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.oracle.five.cloud_disk.beans.CloudFile;
import com.oracle.five.cloud_disk.beans.Share;
import com.oracle.five.cloud_disk.biz.SharepageService;

@Controller
@RequestMapping("content")
public class SharepageController {
	@ModelAttribute("file")
	private List<CloudFile> initfile(){
		return new ArrayList<>();
	}
	@Autowired
	private SharepageService sharepageservice;
	
	
	//创建公共链接
	@RequestMapping(value=("createshare/common/{type}/{timerange}/{fileid}/{share}"))
	public void createsharecommonlink(@PathVariable("type") String type,@PathVariable("timerange") String timerange,@PathVariable("fileid") String fileid,@PathVariable("share") String share){
		sharepageservice.createsharelink(type, timerange, fileid, share);
	}
	
	//创建私密链接
	@RequestMapping(value=("createshare/privately/{type}/{passwd}/{timerange}/{fileid}/{share}"))
	public void createshareprivatelylink(@PathVariable("type") String type,@PathVariable("passwd") String passwd ,@PathVariable("timerange") String timerange,@PathVariable("fileid") String fileid,@PathVariable("share") String share){
		sharepageservice.createsharelink(type, passwd,timerange, fileid, share);
	}
	
	//打开分享的链接
	@RequestMapping(value="sharedpage/{fileid}/{postfix}")
	public String opensharelink(@PathVariable("fileid") String fileid,@PathVariable("postfix") String posetfix,@ModelAttribute("file") List<CloudFile> sharedfiles,Model model,@ModelAttribute("items") String result){
		result=sharepageservice.opensharelinkservice(fileid, posetfix,"");
		if(result.equals("success")){
			Share s=sharepageservice.getsharebylink(posetfix);
			sharedfiles=sharepageservice.getsharefiles(String.valueOf(s.getShareId()));
			model.addAttribute("file", sharedfiles);
			model.addAttribute("items", null);
		}else{
			model.addAttribute("file", sharedfiles);
			model.addAttribute("items", result);
		}
		return "sharedpage";
	}
	
	//提交提取码
	@RequestMapping(value=("commitpasswd"))
	public String commitpasswd(@RequestParam("passwd") String passwd,@RequestParam("fileid") String fileid,@RequestParam("postfix") String posetfix,@ModelAttribute("file") List<CloudFile> sharedfiles,Model model,@ModelAttribute("items") String result,@ModelAttribute("errorsharemessage") String error,HttpServletResponse response){
		result=sharepageservice.opensharelinkservice(fileid, posetfix,passwd);
		System.out.println(result);
		if(result.equals("success")){
			CloudFile f=sharepageservice.getpreviousfoldservice(fileid);
			sharedfiles.add(f);
			model.addAttribute("file", sharedfiles);
			model.addAttribute("items", null);
			model.addAttribute("errorsharemessage",false);
		}else{
			model.addAttribute("items", result);
			model.addAttribute("errorsharemessage",true);
		}
		return "sharedpage";
	}
	
	
	//获取子文件
	@RequestMapping(value="getsharedfile/{fileid}")
	public String getallsonfile(@PathVariable("fileid") String fileid,@ModelAttribute("file") List<CloudFile> sharedfiles,Model model){
		List<CloudFile> lsfile=sharepageservice.getallsonfileservice(fileid);
		model.addAttribute("file", lsfile);
		return "sharedpage";
	}
}
