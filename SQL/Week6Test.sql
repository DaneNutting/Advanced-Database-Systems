Create table ProdTime(
	PT_ID number PRIMARY KEY,
	T_ID NUMBER,
	P_ID Number,
	T_YEAR NUMBER, 
	T_QTR  NUMBER CHECK (T_QTR BETWEEN 1 AND 4),
	T_MONTH VARCHAR2(3) CHECK (T_MONTH IN('JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC')),	
	P_NAME VARCHAR2(20),
	P_CATEGORY VARCHAR2(20),
	P_RANGE VARCHAR2(20)
);

create sequence prodTime_seq start with 1 increment by 1 nomaxvalue;

create trigger prodTime_trigger
before insert on ProdTime
for each row
   begin
     select prodTime_seq.nextval into :new.PT_ID from dual;
   end;
   
Insert into ProdTime (T_ID, P_ID, T_YEAR, T_QTR, T_MONTH, P_NAME, P_CATEGORY, P_RANGE)(
	select c.T_ID, b.P_ID, c.T_YEAR, c.T_QTR, c.T_MONTH, b.P_NAME, b.P_CATEGORY, b.P_RANGE
	from DW1_Salesfact a
	inner join DW1_Product b on b.P_ID = a.P_ID
	inner join DW1_Time c on c.T_ID = a.T_ID
)

