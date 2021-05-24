package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
@CrossOrigin
@RequestMapping("/api")
@RestController
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;
	
	@PostMapping("/")
	public void createTask(@RequestBody Task task)
	{
		taskRepository.save(task);
		
	}
	@DeleteMapping("/{id}")
	public String deleteTask(@PathVariable String id)
	{
		taskRepository.deleteById(id);
		return id;
	}
	@GetMapping("/")
	public List<Task>listTasks()
	{
		return taskRepository.findAll();
	}
	
	

}
