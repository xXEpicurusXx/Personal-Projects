import os

def clear ():
    # os.system("clear")                        #this is for apple OS
    os.system('cls')                            #This is for windows
    

def add(n1, n2):
  return n1 + n2

def subtract(n1, n2):
  return n1 - n2

def multiply(n1, n2):
  return n1 * n2

def divide(n1, n2):
  if n1 % n2 == 0:
    return int(n1 / n2)
  else:
    return float(n1 / n2)

operations = {
  "+" : add,
  "-" : subtract,
  "*" : multiply,
  "/" : divide
}

def run_calcultor():
  
  calculator = True
  
  num1 = int(input("Enter the first value : "))

  for operator in operations:
    print(operator)
  operator_symbol = input("Select an operator : ")

  num2 = int(input("Enter the next value : "))

  calculation_function = operations[operator_symbol]

  first_result = calculation_function(num1, num2)

  output = f"{num1} {operator_symbol} {num2} = {first_result} "
  print(output)

  while calculator != False:


    again = input("Would you like to continue? ('y', 'n', 'end')")
    if again.lower() == "y":
      clear()
      
      print(f"Previous result was : {first_result}")
      print("")
      for operator in operations:
        print(operator)

      operator_symbol = input("\nSelect another operator : ")
      num3 = int(input("Enter the next value value : "))
      calculation_function = operations[operator_symbol]
      second_result = calculation_function(first_result, num3)

      output = f"{first_result} {operator_symbol} {num3} = {second_result} "
      first_result = second_result
      print(output)
    
    elif again.lower() == "n":
      clear()
      run_calcultor()
      
    elif again.lower() == "end":
       print("Done")
       calculator = False
      
run_calcultor()