package com.baxees.weddingduniya.service;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import jakarta.servlet.http.HttpSession;

@Component
public class SessionHelper {

	public void removeMsgFromSession() {

		try {
			  ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		        HttpSession session = attr.getRequest().getSession();
		        session.removeAttribute("msg");
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
}