--======================================================================================================
-- Insert 50 years
 
BEGIN
  FOR i IN 1..50 LOOP
    INSERT INTO yr3CalendarYearDim (dateID, calendarYear)
    VALUES (i, 2000 + i);
  END LOOP;
END;
/ 

--======================================================================================================
-- Insert 3 courses 

INSERT INTO yr3CourseDim(courseID, courseTitle, school, campus, sandwich, ucasEntryPoints)
VALUES(1,'Information Technology', 'School of Computing and Technology', 'Park Campus', 1, 280);

INSERT INTO yr3CourseDim(courseID, courseTitle, school, campus, sandwich, ucasEntryPoints)
VALUES(2,'Landscape Architecture', 'School of Arts and design', 'Francis Close Hall', 0, 300);

INSERT INTO yr3CourseDim(courseID, courseTitle, school, campus, sandwich, ucasEntryPoints)
VALUES(3,'Physical Education', 'School of Education', 'Oxstalls', 1, 250);

--======================================================================================================
-- Insert 7 countries

INSERT INTO yr3CountryDim(countryID, countryName) VALUES (1, 'England');
INSERT INTO yr3CountryDim(countryID, countryName) VALUES (2, 'Wales');
INSERT INTO yr3CountryDim(countryID, countryName) VALUES (3, 'Scotland');
INSERT INTO yr3CountryDim(countryID, countryName) VALUES (4, 'Ireland');
INSERT INTO yr3CountryDim(countryID, countryName) VALUES (5, 'France');
INSERT INTO yr3CountryDim(countryID, countryName) VALUES (6, 'Germany');
INSERT INTO yr3CountryDim(countryID, countryName) VALUES (7, 'China');

--======================================================================================================
-- Insert genders

INSERT INTO yr3GenderDim(genderID, gender) VALUES (1, 'Female');
INSERT INTO yr3GenderDim(genderID, gender) VALUES (2, 'Male');

--======================================================================================================
-- Insert 3 years of IT course Data

-- 1st year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (1, 1, 1, 1, 12, 50, 39, 11);

-- 1st year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (2, 2, 1, 1, 12, 60, 39, 21);

-- 2nd year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (3, 1, 1, 1, 13, 25, 20, 5);

-- 2nd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (4, 1, 1, 5, 13, 3, 3, 0);

-- 2nd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (5, 1, 1, 6, 13, 6, 5, 1);

-- 2nd year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (6, 2, 1, 1, 13, 30, 26, 4);

-- 2nd year of Male data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (7, 2, 1, 6, 13, 4, 3, 1);

-- 3rd year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (8, 1, 1, 1, 14, 23, 20, 3);

-- 3rd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (9, 1, 1, 5, 14, 4, 3, 1);

-- 3rd year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (10, 2, 1, 1, 14, 30, 26, 4);

-- 3rd year of Male data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (11, 2, 1, 6, 14, 10, 9, 1);

--======================================================================================================
-- Insert 3 years of Landscape architecture course Data

-- 1st year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (1, 1, 2, 1, 12, 40, 39, 1);

-- 1st year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (2, 2, 2, 1, 12, 50, 29, 11);

-- 2nd year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (3, 1, 2, 1, 13, 29, 24, 5);

-- 2nd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (4, 1, 2, 7, 13, 4, 3, 1);

-- 2nd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (5, 1, 2, 6, 13, 16, 15, 1);

-- 2nd year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (6, 2, 2, 1, 13, 30, 26, 4);

-- 2nd year of Male data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (7, 2, 2, 5, 13, 14, 12, 2);

-- 3rd year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (8, 1, 2, 1, 14, 23, 20, 3);

-- 3rd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (9, 1, 2, 3, 14, 6, 2, 4);

-- 3rd year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (10, 2, 2, 1, 14, 34, 26, 8);

-- 3rd year of Male data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (11, 2, 2, 7, 14, 22, 19, 3);

--======================================================================================================
-- Insert 3 years of P.E. course Data

-- 1st year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (1, 1, 3, 1, 12, 20, 15, 5);

-- 1st year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (2, 2, 3, 1, 12, 23, 19, 4);

-- 2nd year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (3, 1, 3, 1, 13, 26, 22, 4);

-- 2nd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (4, 1, 3, 7, 13, 3, 3, 0);

-- 2nd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (5, 1, 3, 6, 13, 12, 12, 0);

-- 2nd year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (6, 2, 3, 1, 13, 42, 37, 5);

-- 2nd year of Male data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (7, 2, 3, 5, 13, 4, 2, 2);

-- 3rd year of Female data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (8, 1, 3, 1, 14, 21, 20, 1);

-- 3rd year of Female data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (9, 1, 3, 3, 14, 6, 6, 0);

-- 3rd year of Male data
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (10, 2, 3, 1, 14, 24, 20, 4);

-- 3rd year of Male data from a different country
INSERT INTO yr3AdmissionsFact (admissionID, genderID, courseID, countryID, dateID, noOfStudents, noOfStudentsPassed, noOfStudentsFailed)
VALUES (11, 2, 3, 7, 14, 17, 16, 1);