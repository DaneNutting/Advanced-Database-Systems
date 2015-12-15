Alter table yr3AdmissionsFact
add constraint genderIDForeignKey
  foreign key (genderID)
  references yr3GenderDim(genderID);
  
Alter table yr3AdmissionsFact
add constraint courseIDForeignKey
  foreign key (courseID)
  references yr3CourseDim(courseID);

Alter table yr3AdmissionsFact
add constraint dateIDForeignKey
  foreign key (dateID)
  references yr3CalendarYearDim(dateID);
  
Alter table yr3AdmissionsFact
add constraint countryIDForeignKey
  foreign key (countryID)
  references yr3CountryDim(countryID);
