package com.oracle.five.cloud_disk.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.oracle.five.cloud_disk.beans.MyShare;
import com.oracle.five.cloud_disk.mapper.MyShareMapper;

@Controller

public class MyShareController {
	@Autowired
	private MyShareMapper filedao;
	
	@RequestMapping("/MyShare")
	public String selectShareFiles(Map<String, Object> model) {
		//System.out.println("sdfdsf");
		List<MyShare> mysharefiles = filedao.selectShareFiles();
		model.put("mysharefiles",mysharefiles);
		System.out.println("已经分享的文件："+mysharefiles);
		
		return "myshare";
	}
}
