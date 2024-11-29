package com.baxees.weddingduniya.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.baxees.weddingduniya.model.BureauRegistrationApproval;
import com.baxees.weddingduniya.model.UserRegistrationApproval;
import com.baxees.weddingduniya.service.BureauService;
import com.baxees.weddingduniya.service.UserService;
import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {

	@Autowired
	private UserService userService;

	@Autowired
	private BureauService bureauService;

	
	@GetMapping({ "/", "/index" })
	public String indexHandler() {

		return "index";
	}

	@GetMapping("/about")
	public String aboutHandler() {

		return "about";
	}

	@GetMapping("/contact")
	public String contactHandler() {

		return "contact";
	}

	@GetMapping("/services")
	public String serviceHandler() {

		return "services";
	}

	@GetMapping("/account")
	public String accountHandler() {

		return "account";
	}

	@GetMapping("/testimonials")
	public String testimonialsHandler() {
		return "testimonials";
	}

	@GetMapping("/signin")
	public String loginHandler() {
		return "login";
	}
	
	@GetMapping("/recoverPassword")
	public String recoverPassword() {
		System.out.println("in page");
		return "recoverPassword";
	}

	@PostMapping("/recover-password")
    public String recoverPassword(@RequestParam("marriageBureauEmail") String marriageBureauEmail, HttpSession session) {
    
		System.out.println("Recovering password for email: " + marriageBureauEmail);
		
		String result = bureauService.recoverPassword(marriageBureauEmail);
		if (!result.equals("Password sent to your mail")) {
			/* model.addAttribute("errorMessage", result); */
			session.setAttribute("msg", "Invalid Email Address");
			return "recoverPassword";
		}
		
		session.setAttribute("msg", "Password sent to your mail");
		return "redirect:/signin";
	}

	@GetMapping("/userSignUp")
	public String userSignUpHandler() {
		return "userSignUp";
	}

	@PostMapping("/createUser")
	public String createUser(@ModelAttribute UserRegistrationApproval user, HttpSession session) {

		// System.out.println(user);
		boolean u = userService.checkEmail(user.getUserEmail());
		if (u) {
			System.out.println("This email id is already registered!");
			session.setAttribute("msg", "This email id is already registered!! Please login your account");
		} else {
			UserRegistrationApproval userRegistrationApproval = userService.createUser(user);
			if (userRegistrationApproval != null) {
				session.setAttribute("msg", "Your registration request is in process Please Wait for approval");
				System.out.println("registration successfully");
			} else {
				System.out.println("something wrong");
				session.setAttribute("msg", "Something went wrong. Please try again");
			}
		}
		return "redirect:/signin";
	}

	@GetMapping("/marriageBureauSignUp")
	public String marriageBureauSignUpHandler() {
		return "marriageBureauSignUp";
	}

	@PostMapping("/createBureau")
	public String createBureau(@ModelAttribute BureauRegistrationApproval bureau, HttpSession session) {

		// System.out.println(bureau);
		boolean b = bureauService.checkEmail(bureau.getMarriageBureauEmail());
		if (b) {
			System.out.println("This email id is already registered!");
			session.setAttribute("msg", "This email id is already registered!!  Please login your account");
		} else {
			BureauRegistrationApproval bureauRegistrationApproval = bureauService.createBureau(bureau);
			if (bureauRegistrationApproval != null) {
				System.out.println("bureau registration successfull");
				session.setAttribute("msg", "Your registration request is in process Please Wait for approval");
			} else {
				System.out.println("something wrong");
				session.setAttribute("msg", "Something went wrong. Please try again");
			}

		}
		return "redirect:/signin";
	}

	@PostMapping("/home")
	public String login(String email, String password, HttpSession session) {

		String userEmail = email;
		String marriageBureauEmail = email;

		UserRegistrationApproval user = userService.userlogin(userEmail, password);
		BureauRegistrationApproval bureau = bureauService.bureaulogin(marriageBureauEmail, password);

		System.out.println(email);

		if (user != null) {
			if (user.getRole().equals("user")) {

				System.out.println(user.getUserEmail());
				System.out.println(email);
				System.out.println("in user home");
				session.setAttribute("msg", "Welcome " + user.getUserName() + " to wedding duniya");

				return "userHome";
			}
		} else if (bureau != null) {

			if (bureau.getRole().equals("bureau")) {

				System.out.println("in bureau home");
				session.setAttribute("msg", "Welcome " + bureau.getMarriageBureauName() + " wedding duniya");

				return "bureauHome";
			}
		} else if (email.equals("admin@weddingduniya.com") && password.equals("admin")) {

			// session.setAttribute("msg", "Welcome Admin to Wedding Duniya");
			return "redirect:/adminHome";

		} else if (user == null || bureau == null) {

			System.out.println("User : invalid crendentials");
			session.setAttribute("msg", "The username or password you provided is incorrect. Please try again.");

			return "redirect:/signin";

		}

		return "redirect:/signin";

	}

	@PostMapping("/logout")
	private String logout(HttpSession session) {
		// for invalidate session
		/*
		 * HttpSession httpsession = request.getSession(false);
		 * 
		 * if (httpsession != null) { httpsession.invalidate(); }
		 */
		/*
		 * // Clear authentication org.springframework.security.core.Authentication auth
		 * = SecurityContextHolder.getContext().getAuthentication(); if (auth != null) {
		 * SecurityContextHolder.getContext().setAuthentication(null); }
		 */

		session.setAttribute("msg", "Logout successfull!!!");

		return "redirect:/signin";
	}

	@GetMapping("/adminHome")
	private String adminHome(Model model) {

		// Fetch the list of bureau registration approvals
		List<BureauRegistrationApproval> approvalList = bureauService.getAllBureauRegistrationApprovals();
		List<BureauRegistrationApproval> pendingApprovals = new ArrayList<>();

		for (BureauRegistrationApproval approval : approvalList) {
			if (!approval.isApproval()) {
				pendingApprovals.add(approval);
			}
		}

		// Add the approval list to the model
		model.addAttribute("pendingApprovals", pendingApprovals);

		return "adminHome";
	}

	@PostMapping("/processRegistration")
	public String processRegistration(@RequestParam("bureau_id") UUID bureau_id,
			@RequestParam("action") String action) {

		if ("approve".equals(action)) {
			bureauService.approveRegistration(bureau_id);
		} else if ("reject".equals(action)) {
			bureauService.rejectRegistration(bureau_id);
		}

		return "redirect:/adminHome";
	}

	@GetMapping("/settings")
	private String settings() {

		return "settings";
	}

	@GetMapping("/allMarriageBureaus")
	private String allMarriagebureaus() {

		return "allMarriageBureaus";
	}

	@GetMapping("/activeMarriageBureaus")
	private String activeMarriageBureaus() {

		return "activeMarriageBureaus";
	}

	@GetMapping("/deactiveMarriageBureaus")
	private String deactiveMarriageBureaus() {

		return "deactiveMarriageBureaus";
	}

	@GetMapping("/blockedMarriageBureaus")
	private String blockedMarriageBureaus() {

		return "blockedMarriageBureaus";
	}

	@GetMapping("/allUsers")
	private String allUsers() {

		return "allUsers";
	}

	@GetMapping("/employees")
	private String employees() {

		return "employees";
	}

	@GetMapping("/offer")
	private String offer() {

		return "offer";
	}

	@GetMapping("/notifications")
	private String notifications() {

		return "notifications";
	}

	@GetMapping("/profile")
	private String profile() {

		return "profile";
	}

	@GetMapping("/userReports")
	private String userReports() {

		return "userReports";
	}

	@GetMapping("/paymentReports")
	private String paymentReports() {

		return "paymentReports";
	}

	@GetMapping("/marriageBureausReports")
	private String marriageBureausReports() {

		return "marriageBureausReports";
	}

	@GetMapping("/policy-privacy")
	private String policyPrivacy() {

		return "policy-privacy";
	}

	@GetMapping("/messages")
	private String messages() {

		return "messages";
	}

	@GetMapping("/overdueList")
	private String overduelist() {

		return "overdueList";
	}

	@GetMapping("/paymentHistory")
	private String paymentHistory() {

		return "paymentHistory";
	}

	@GetMapping("/activeUsers")
	private String activeUsers() {

		return "activeUsers";
	}

	@GetMapping("/deactiveUsers")
	private String deactiveUsers() {

		return "deactiveUsers";
	}

	@GetMapping("/blockedUsers")
	private String blockedUsers() {

		return "blockedUsers";
	}

	@GetMapping("/userProfile")
	private String userProfile() {

		return "userProfile";
	}

	@GetMapping("/marriageBureauProfile")
	private String marriageBureauProfile() {

		return "marriageBureauProfile";
	}
	
	@GetMapping("/designations")
	private String designations() {
		
		return "designations";
	}

}
