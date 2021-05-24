package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Task")
public class Task {
	@Id
	private String id;
	private String firstTask;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstTask() {
		return firstTask;
	}
	public void setFirstTask(String firstTask) {
		this.firstTask = firstTask;
	}
}
