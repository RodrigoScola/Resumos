const st = document.getElementsByName("resume")[0]

st.click()
st.addEventListener("change", () => {
	var count = 1
	const timer = 450
	const scrollOptions = {
		behavior: "smooth",
		block: "center",
		inline: "center",
	}
	const changeValue = (name, newValue) => {
		try {
			const element = document.getElementsByName(name)[0]
			count++
			setTimeout(() => {
				element.scrollIntoView(scrollOptions)
				element.value = newValue
			}, timer * count)
		} catch (err) {
			console.log(err)
		}
	}
	const selectElement = (name) => {
		try {
			const element = document.getElementsByName(name)[0]
			count++
			setTimeout(() => {
				element.scrollIntoView(scrollOptions)
				element.checked = true
			}, timer * count)
		} catch (err) {
			console.log(err)
		}
	}

	changeValue("name", "Rodrigo Sgarabotto Scola")
	changeValue("email", "rodrigo.sgarabotto.scola@gmail.com")
	changeValue("phone", "(55) 54 991982471")
	changeValue("urls[LinkedIn]", "https://www.linkedin.com/in/rodrigo-scola-2517521b6/")
	changeValue("urls[LinkedIn]", "https://www.linkedin.com/in/rodrigo-scola-2517521b6/")
	changeValue("urls[GitHub]", "github.com/RodrigoScola")
	changeValue("urls[Portfolio]", "rodrigoscola.vercel.app")
	selectElement("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field0]")
	selectElement("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field1]")
	selectElement("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field2]")
	selectElement("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field3]")
	selectElement("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field4]")
	changeValue(
		"comments",
		`Desenvolvedor Full Stack desde 2021, sempre tentando desenvolver algo. Proficiente em Javascript/Typescript, Python, Html e Css. Hábil para criar aplicações em Node/React/Wordpress.
Desenvolvi o MVP de uma plataforma educacional em 3 meses para a empresa Think Orion em Dubai`,
	)
})
