package com.waregym.classesJava;

public class ActivityInscribed {
	
	
	private Activity activity;
	private boolean showInscribed;
	private boolean showDelete;
	private String buttonText;
	private boolean showButton, showText;
	private boolean full;
	private int inscribed;
	

	public Activity getActivity() {
		return activity;
	}
	
	public void setActivity(Activity activity) {
		this.activity = activity;
	}

	public boolean isShowInscribed() {
		return showInscribed;
	}

	public void setShowInscribed(boolean showInscribed) {
		this.showInscribed = showInscribed;
	}

	public boolean isShowDelete() {
		return showDelete;
	}

	public void setShowDelete(boolean showDelete) {
		this.showDelete = showDelete;
	}

	public String getButtonText() {
		return buttonText;
	}

	public void setButtonText(String buttonText) {
		this.buttonText = buttonText;
	}

	public boolean isFull() {
		return full;
	}

	public void setFull(boolean full) {
		this.full = full;
	}

	public int getInscribed() {
		return inscribed;
	}

	public void setInscribed(int inscribed) {
		this.inscribed = inscribed;
	}

	public boolean isShowButton() {
		return showButton;
	}

	public void setShowButton(boolean showButton) {
		this.showButton = showButton;
	}

	public boolean isShowText() {
		return showText;
	}

	public void setShowText(boolean showText) {
		this.showText = showText;
	}
	
	
}
