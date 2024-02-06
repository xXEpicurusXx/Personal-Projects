print("Welcome to the tip calculator.\n")

bill = float(input("What was the total bill? : $"))
tip = int(input("What percentage tip would you like to give? 10%, 12%, or 15% : "))
people = int(input("How many people will split the bill? : "))

tip_as_percent = tip / 100
total_tip_amount = bill * tip_as_percent
total_bill_amount = bill + total_tip_amount
bill_per_person = total_bill_amount / people
final = round(bill_per_person, 2)

total_tip = round(total_tip_amount,2)
total_bill = round(total_bill_amount, 2)
indv_bill = round(bill_per_person, 2)

print(f"Your total bill including tip is : ${total_bill}")
print(f"Your tip percentage is : {tip}%")
print(f"Your portion of the bill including tip is : ${indv_bill}")