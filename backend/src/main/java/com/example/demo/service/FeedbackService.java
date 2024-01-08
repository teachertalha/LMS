package com.example.demo.service;

import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Course;
import com.example.demo.entity.Feedback;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.FeedbackRepository;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Feedback> getFeedbacksForCourse(Long courseId) {
        Course course = courseRepository.findById(courseId).orElse(null);
        if (course != null) {
            return course.getFeedbacks();
        }
        return null;
    }

    public Feedback submitFeedback(Feedback feedback) {
        User user = (User) userRepository.findById(feedback.getUser().getId()).orElse(null);
        Course course = courseRepository.findById(feedback.getCourse().getId()).orElse(null);

        if (user != null && course != null) {
            feedback.setUser(user);
            feedback.setCourse(course);
            return feedbackRepository.save(feedback);
        }
        return null;
    }
}

