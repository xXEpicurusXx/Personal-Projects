student_scores = {
  "Harry": 0,
  "Ron": 0,
  "Hermione":0, 
  "Draco": 0,
  "Neville": 0,
}

#Append grades here
student_scores["Harry"] = 81
student_scores["Ron"] = 78
student_scores["Hermione"] = 99 
student_scores["Draco"] = 74
student_scores["Neville"] = 62

student_grades = {}


for student in student_scores:
  score = student_scores[student]
  if score > 90:
    student_grades[student] = "Outstanding"
  elif score > 80:
    student_grades[student] = "Exceeds Expectations"
  elif score > 70:
    student_grades[student] = "Acceptable"
  else:
    student_grades[student] = "Fail"

for student in student_scores:
    gradebook = {student}, {student_scores[student]}, {student_grades[student]}
    print ("\n".join([str(x) for x in gradebook]) + "\n")

    #get rid of the brackets