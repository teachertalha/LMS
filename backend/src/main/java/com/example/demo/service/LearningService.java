package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.EnrollRequest;
import com.example.demo.entity.Course;
import com.example.demo.entity.Learning;
import com.example.demo.entity.Progress;
import com.example.demo.entity.User;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.LearningRepository;
import com.example.demo.repository.ProgressRepository;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Service
public class LearningService {

    @Autowired
    private LearningRepository learningRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;
    
    @Autowired
    private ProgressRepository progressRepository;

    public List<Course> getLearningCourses(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            return user.getLearningCourses().stream().map(Learning::getCourse).toList();
        }
        return null;
    }

    public String enrollCourse(EnrollRequest enrollRequest) {
        User user = userRepository.findById(enrollRequest.getUserId()).orElse(null);
        Course course = courseRepository.findById(enrollRequest.getCourseId()).orElse(null);

        if (user != null && course != null) {
            Learning existingLearning = learningRepository.findByUserAndCourse(user, course);
            if (existingLearning != null) {
                return "Course already enrolled";
            }

            Progress progress = new Progress();
            progress.setUser(user);
            progress.setCourse(course);
            progressRepository.save(progress);

            Learning learning = new Learning();
            learning.setUser(user);
            learning.setCourse(course);
            learningRepository.save(learning);

            return "Enrolled successfully";
        }

        return "Failed to enroll";
    }


    public void unenrollCourse(Long id) {
        learningRepository.deleteById(id);
    }
}

