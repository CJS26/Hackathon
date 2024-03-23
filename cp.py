key = "pk.eyJ1IjoiY2pzYW5nIiwiYSI6ImNsdTRnYm5yYzE2MDMycW90em9oOWRpZjAifQ.sv4K7ACxTyDlvBkW96ogCA"
modeot = input("Please input your mode of transportation: Car, Train, Bus, or Plane.: ")
distance = 5

if modeot == "Car" or modeot == "car":
    CO2 = distance*(8.89/25) #CO2 is in KG
elif modeot == "Train" or modeot == "train":
    CO2 = distance*0.14
elif modeot == "Bus" or modeot == "bus":
    CO2 = distance*0.28
elif modeot == "Plane" or modeot == "plane":
    CO2 = distance*0.2

print("Your trip will produce", CO2, "KG of CO2")