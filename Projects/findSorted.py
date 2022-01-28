#FIND SORTING MODULE
import numpy as np
import math

#Find index of a number in an array of ascending random numbers
def findSortedIndex(_array, _number):
    found = False
    divPos = len(_array)/2
    parentArrayIndex = round(divPos)
    itterations = 0
    lastValue = 0
    shrunkArray = _array
    while found == False:
        itterations += 1
        if _number == _array[0]:
            print("Itterations : " + str(itterations))
            found = True
            return 0
        elif _number == _array[round(parentArrayIndex)]:
            print("Itterations : " + str(itterations))
            found = True
            return round(parentArrayIndex)
        elif _number == _array[round(parentArrayIndex)-1]:
            print("Itterations : " + str(itterations))
            found = True
            return round(parentArrayIndex) - 1
        elif _number < shrunkArray[round(divPos)]:
            shrunkArray = shrunkArray[:round(divPos)]
            divPos = len(shrunkArray)/2
            parentArrayIndex -= (round(divPos))
        elif _number > shrunkArray[round(divPos)]:
            shrunkArray = shrunkArray[round(divPos):]
            divPos = len(shrunkArray)/2
            parentArrayIndex += (round(divPos))
        if lastValue == round(divPos):
            return False
        lastValue = round(divPos)

#Find the nearest index for the number
def findNearestSortedIndex(_array, _number):
    found = False
    divPos = len(_array)/2
    parentArrayIndex = round(divPos)
    itterations = 0
    lastValue = 0
    shrunkArray = _array
    while found == False:
        itterations += 1
        if _number == _array[0]:
            #print("Itterations : " + str(itterations))
            found = True
            return 0
        elif _number < shrunkArray[round(divPos)]:
            shrunkArray = shrunkArray[:round(divPos)]
            divPos = (len(shrunkArray))/2
            #print("Itterations : " + str(itterations))
            parentArrayIndex -= ((divPos))
            if round((lastValue)) == int(math.ceil(parentArrayIndex)):
                return int(math.ceil(parentArrayIndex))
        elif _number > shrunkArray[round(divPos)]:
            shrunkArray = shrunkArray[round(divPos):]
            divPos = (len(shrunkArray))/2
            #print("Itterations : " + str(itterations))
            parentArrayIndex += ((divPos))
            if round((lastValue)) == int(math.ceil(parentArrayIndex)):
                return int(math.ceil(parentArrayIndex))
        lastValue = parentArrayIndex
