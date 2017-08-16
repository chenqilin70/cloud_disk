package com.oracle.five.cloud_disk.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.Transparency;
import java.awt.image.BufferedImage;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.oracle.five.cloud_disk.beans.CloudFile;
import com.oracle.five.cloud_disk.beans.User;
import com.oracle.five.cloud_disk.mapper.UserMapper;
@Controller
public class UserController {
	@Autowired
	private UserMapper dao;
	@RequestMapping(value="content/code",produces="image/png")//������ģʽ����Ӧ�Ľ��ΪͼƬ����
	public void CheckImg(HttpServletRequest request,HttpServletResponse response){
		System.out.println("111");
		 int width = 100;
	     int height = 30;
	     Random random = new Random();
		//����responseͷ��Ϣ
	    //��ֹ����
	    response.setHeader("Pragma", "No-cache");
	    response.setHeader("Cache-Control", "no-cache");
	    response.setDateHeader("Expires", 0);
	    response.setContentType("image/png");
	    //���ɻ�����image��
	    //BufferedImage img=new BufferedImage(width, height, 1);
	    //���ɻ���
	    //Graphics g=img.getGraphics();
	   // Graphics2D   dGrap=(Graphics2D)g;
//	    dGrap.setColor(Color.WHITE);
	    BufferedImage buffImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);  
        Graphics2D dGrap = buffImg.createGraphics();  
        //����͸��  start  
        buffImg = dGrap.getDeviceConfiguration().createCompatibleImage(width, height, Transparency.TRANSLUCENT);  
        dGrap=buffImg.createGraphics(); 
        dGrap.setColor(new Color(22,2,2,0));
		dGrap.drawRect(0, 0, width-1,height-1);
		//dGrap.setBackground(new Color(22,2,2,0));
		int x=2,y=20;
		//String[]  fontNames={"�����п�","����","����","����","����","����Ҧ��"};
		//gan rao xian
		for(int n=0;n<20;n++)
		{
			dGrap.setColor(new Color(new Random().nextInt(256),new Random().nextInt(256),new Random().nextInt(256)));
			dGrap.fillRect(new Random().nextInt(101), new Random().nextInt(31), new Random().nextInt(3), new Random().nextInt(3));
//			huabi.drawLine(new Random().nextInt(101), new Random().nextInt(31), new Random().nextInt(101), new Random().nextInt(31));
		}
		StringBuffer  code=new  StringBuffer();
		for(int n=0;n<6;n++)
		{
			//����һ�������������
			Font f=new Font("微软雅黑",Font.ITALIC,20);
			dGrap.setFont(f);//��������
			dGrap.setColor(new Color(new Random().nextInt(256),new Random().nextInt(256),new Random().nextInt(256)));//�޸Ļ�����ɫΪ�����ɫ
			
			if(new Random().nextInt(6)%2==0)
			{
				int num=new Random().nextInt(10);//����һ�������
				code.append(num);
				dGrap.drawString(num+"", x, y);//��������������ͼƬ��
			}else
			{
				int num=new Random().nextInt(27)+65;//����һ�������
				code.append((char)num);
				dGrap.drawString(((char)num)+"", x, y);//��������������ͼƬ��
			}
			x+=15;
		}
		System.out.println("inputcode:"+code);
		request.getSession().setAttribute("code", code);
		try {
			ImageIO.write(buffImg, "png", response.getOutputStream());//��ͼ���ļ����浽������Ĵ�����
			response.getOutputStream().flush();
			response.getOutputStream().close();
			response.flushBuffer();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	@RequestMapping("content/code1")
	public String checkCode(@RequestParam("inputcode") String inputcode,HttpServletRequest request,HttpServletResponse response) throws IOException{
		System.out.println(inputcode);
		String code=request.getSession().getAttribute("code").toString();
		System.out.println(code);
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		if(inputcode.equalsIgnoreCase(code)){
			out.write("success");
		}else{
			out.println("<font color='red'>验证码错误请重新输入</font>");
		}
		out.flush();
		out.close();
		return null;
	}
	@RequestMapping("content/register")
	public String adduser(User user){
		String nickname=user.getNickname();
		String password=user.getPassword();
		String head_img=user.getHeadImg();
		dao.insertfile();
		int fileid=dao.fileid();
		CloudFile cloud=new CloudFile();
		cloud.setFileId(fileid);
		User us=new User(password,nickname,head_img,cloud);
		dao.adduser(us);
		return "login";
	}
	@RequestMapping("content/login")
	public String login(User ur,HttpServletRequest request,HttpServletResponse response){
		String nickname=ur.getNickname();
		String password=ur.getPassword();
		User us=new User(password,nickname);
		int userid=dao.selectuseridbyname(nickname);
		String headimg=dao.selectuserimgbyname(nickname);
		int capacity=dao.selectusercapacitybyname(nickname);
		  int fileid=dao.selectfileidbyname(nickname);
		   //  System.out.println(fileid);
		  CloudFile f=new CloudFile();
			f.setFileId(fileid);
		     User usr=new User(userid, nickname, headimg, capacity,f);
		    // System.out.println("usr"+usr.toString());
		int i=dao.login(us);
		if(i==1){
			//request.getSession().setAttribute("fileid", fileid);
			request.getSession().setAttribute("loginUser", usr);
			
			return "redirect:mynetdisk.jsp";
		}else{
		String str="密码错误请重新输入";
		request.getSession().setAttribute("st",str);
		return "login";
		}		
	}
	@RequestMapping("content/nick")
	public String checknick(@RequestParam("nickname")String nickname,HttpServletRequest request,HttpServletResponse response) throws IOException{
		System.out.println("nn"+nickname);
		int i=dao.selectuserbyname(nickname);
		System.out.println("nj"+i);
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		if(i>0){
			out.println("<font color='red'>用户名已存在</font>");
		}else{
			out.write("success");
		}
		out.flush();
		out.close();
		return null;
	}
}
