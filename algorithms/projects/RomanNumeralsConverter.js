function convertToRoman(num) {
	//sees if the input is a number, else returns undefined
	if (typeof num == "number") {
		//converts the number to string & splits into an array
		var originalNum = num.toString().split("")
		console.log(originalNum)
		// to accuratelly convert natural numbers to roman numbers, we need to accuratelly determine the decimals( 1234 == 1000,200,30,4)
		for (let i = 0; i < originalNum.length; i++) {
			originalNum[i] = addZero(originalNum[i], i)
		}
		//based on the indexnumber, adds the inverse number of zeros( ex: index 0 gets 3 zeros and index 2 gets 0)

		// to accuratelly account for the structure and account for the 0, i created this function that based on the total index number, assigns a specific function
		let sortedNum = originalNum.reverse()
		var finalnum = ""

		for (let i = sortedNum.length - 1; i >= 0; i--) {
			sortedNum[i] = RomanNum(sortedNum[i])
		}
		// this is the first num that will appear and the last to be anexed, because of the structure
		function RomanNum(num) {
			switch (num) {
				case "0":
					num = ""
					break
				case "1":
					num = "I"
					break
				case "2":
					num = "II"
					break
				case "3":
					num = "III"
					break
				case "4":
					num = "IV"
					break
				case "5":
					num = "V"
					break
				case "6":
					num = "VI"
					break
				case "7":
					num = "VII"
					break
				case "8":
					num = "VIII"
					break
				case "9":
					num = "IX"
					break
				case "00":
					num = ""
					break
				case "10":
					num = "X"
					break
				case "20":
					num = "XX"
					break
				case "30":
					num = "XXX"
					break
				case "40":
					num = "XL"
					break
				case "50":
					num = "L"
					break
				case "60":
					num = "LX"
					break
				case "7":
					num = "LXX"
					break
				case "80":
					num = "LXXX"
					break
				case "90":
					num = "XC"
					break
				case "00":
					num = ""
					break
				case "100":
					num = "C"
					break
				case "200":
					num = "CC"
					break
				case "300":
					num = "CCC"
					break
				case "400":
					num = "CD"
					break
				case "500":
					num = "D"
					break
				case "600":
					num = "DC"
					break
				case "700":
					num = "DCC"
					break
				case "800":
					num = "DCCC"
					break
				case "900":
					num = "CM"
					break
				case "000":
					num = ""
					break
				case "1000":
					num = "M"
					break
				case "2000":
					num = "MM"
					break
				case "3000":
					num = "MMM"
					break
			}
			return (finalnum += num)
		}
	} else {
		return undefined
	}
	return finalnum
}
convertToRoman(2018)
///hello there
