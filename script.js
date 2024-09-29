var countries=["Kenya", "Saudi Arabia", "Russia", "Canada"]
document.write(countries.sort())
document.write("<br>")
//document.write(countries.reverse())
//document.write("<br>")
var numbers=[1,2,5,6,3,8,9,4,10,33,88]
//document.write(numbers.sort())
//document.write("<br>")
//document.write(numbers.reverse())

function ascending (a,b){
    return a-b
}

function descending (b,a){
    return b-a
}

document.write(numbers.sort(ascending))
document.write("<br>")
document.write(numbers.reverse(descending))