drop table yr3AdmissionsFact;
drop sequence admissionsSeq;

drop table yr3CalendarYearDim;
drop sequence yearSeq;

drop table yr3CourseDim;
drop sequence courseSeq;

drop table yr3CountryDim;
drop sequence countrySeq;

drop table yr3GenderDim;
drop sequence genderSeq;

Create table yr3CalendarYearDim(
	dateID number primary key,
	calendarYear number
);

Create table yr3CourseDim (
	courseID number primary key,
	courseTitle varchar2(100),
	school varchar2(100),
	campus varchar2(100),
	sandwich number(1),
	ucasEntryPoints number
);

Create table yr3CountryDim(
	countryID number primary key,
	countryName varchar2(100)
);

Create table yr3GenderDim(
	genderID number primary key,
	gender varchar2(15)
);

Create table yr3AdmissionsFact(
	admissionID number primary key,
	genderID number,
	courseID number,
	countryID number,
	dateID number,
	noOfStudents number,
	noOfStudentsPassed number,
	noOfStudentsFailed number
); 
   
create sequence yearSeq start with 1 increment by 1 nomaxvalue;

create trigger yearTrigger
before insert on yr3CalendarYearDim
for each row
  begin
    select yearSeq.nextval into :new.dateID from dual;
  end;
/ 

create sequence courseSeq start with 1 increment by 1 nomaxvalue;

create trigger courseTrigger 
before insert on yr3CourseDim
for each row
  begin
    select courseSeq.nextval into :new.courseID from dual;
  end;
/

create sequence countrySeq start with 1 increment by 1 nomaxvalue;

create trigger countryTrigger 
before insert on yr3CountryDim
for each row
  begin
    select countrySeq.nextval into :new.countryID from dual;
  end;
/

create sequence genderSeq start with 1 increment by 1 nomaxvalue;

create trigger genderTrigger 
before insert on yr3genderDim
for each row
  begin
    select genderSeq.nextval into :new.genderID from dual;
  end;
/       
  
create sequence admissionsSeq start with 1 increment by 1 nomaxvalue;

create trigger admissionsTrigger
before insert on yr3AdmissionsFact
for each row
  begin
    select admissionsSeq.nextval into :new.admissionID from dual;
    end;
/