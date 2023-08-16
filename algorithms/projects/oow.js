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
  const setInputValue = (name, newValue) => {
    try {
      const element = document.getElementsByName(name)[0]
      if (!element) return
      count++
      setTimeout(() => {
        element.scrollIntoView(scrollOptions)
        element.value = newValue
      }, timer * count)
    } catch (err) {}
  }
  const setRadioValue = (name) => {
    try {
      const element = document.getElementsByName(name)[0]
      if (!element) return
      count++
      setTimeout(() => {
        element.scrollIntoView(scrollOptions)
        element.checked = true
      }, timer * count)
    } catch (err) {
      console.log(err)
    }
  }
  const setSelectValue = (name, value) => {
    try {
      const element = document.getElementsByName(name)[0]
      if (!element) return

      setTimeout(() => {
        element.scrollIntoView(scrollOptions)
        element.value = value
      }, timer * count)
    } catch (err) {}
  }

  setSelectValue("cards[fde68008-befd-4510-8610-725caa664f5f][field4]", "0")
  setSelectValue("cards[fde68008-befd-4510-8610-725caa664f5f][field0]", "Yes")
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field1]",
    "Brazil"
  )
  setSelectValue("cards[0215d229-94cc-4eb7-a7e0-8f39ad5a1a8b][field2]", "Yes")
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field5]",
    "Still Studying"
  )
  setSelectValue("cards[fde68008-befd-4510-8610-725caa664f5f][field8]", "Yes")
  setSelectValue("cards[fde68008-befd-4510-8610-725caa664f5f][field3]", "3")
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field6]",
    "Uniftec"
  )
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field7]",
    "I haven't graduated college."
  )
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field11]",
    "Immediately"
  )
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field9]",
    "Advanced High"
  )
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field12]",
    "Windows"
  )
  setSelectValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field13]",
    "LinkedIn job posting."
  )
  setInputValue("name", "Rodrigo Sgarabotto Scola")
  setInputValue("cards[fde68008-befd-4510-8610-725caa664f5f][field10]", "3000")
  setInputValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field2]",
    "Caxias do Sul, Rio Grande do Sul"
  )
  setInputValue("email", "rodrigo.sgarabotto.scola@gmail.com")
  setInputValue("phone", "(55) 54 991982471")
  setInputValue("cards[0215d229-94cc-4eb7-a7e0-8f39ad5a1a8b][field0]", "Brazil")
  setInputValue(
    "urls[LinkedIn]",
    "https://www.linkedin.com/in/rodrigo-scola-2517521b6/"
  )
  setInputValue("cards[0215d229-94cc-4eb7-a7e0-8f39ad5a1a8b][field1]", "3000")
  setInputValue(
    "cards[7deaa127-dc16-4370-9f87-7eb516d96b65][field21]",
    "Rodrigo Scola"
  )
  setInputValue(
    "cards[7deaa127-dc16-4370-9f87-7eb516d96b65][field11]",
    "3500-4500"
  )
  setInputValue(
    "urls[LinkedIn]",
    "https://www.linkedin.com/in/rodrigo-scola-2517521b6/"
  )
  setInputValue("org", "-")
  setInputValue("urls[GitHub]", "github.com/RodrigoScola")
  setInputValue(
    "urls[LinkedIn (Keep in mind that a good LinkedIn profile will match your CV/resume)]",
    "https://www.linkedin.com/in/rodrigo-scola/"
  )
  setInputValue(
    "urls[GitHub (If you are not a developer this is N/A)]",
    "https://github.com/RodrigoScola"
  )
  setInputValue(
    "urls[Portfolio (If you are not a developer this is N/A)]",
    "rodrigoscola.vercel.app"
  )
  setInputValue("cards[7deaa127-dc16-4370-9f87-7eb516d96b65][field20]", "-")
  setInputValue("cards[fde68008-befd-4510-8610-725caa664f5f][field14]", "-")
  setInputValue(
    "cards[fde68008-befd-4510-8610-725caa664f5f][field15]",
    "Rodrigo Scola"
  )
  setInputValue("urls[Portfolio]", "rodrigoscola.vercel.app")
  setInputValue(
    "comments",
    `Desenvolvedor Full Stack desde 2021, sempre tentando desenvolver algo. Proficiente em Javascript/Typescript, Python, Html e Css. Hábil para criar aplicações em Node/React/Wordpress.
 Desenvolvi o MVP de uma plataforma educacional em 3 meses para a empresa Think Orion em Dubai. Experiência com Desenvolvimento Android com React Native.  |||||||||||    Full Stack Developer since 2021, always trying to develop something. Proficient in Javascript/Typescript, Python, Html and CSS. Able to create applications in Node/React/Wordpress. Developed the MVP of an educational platform in 3 months for the company Think Orion in Dubai. Experience with Android Development with React Native.`
  )
  setRadioValue("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field0]")
  setRadioValue("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field1]")
  setRadioValue("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field2]")
  setRadioValue("cards[5376a26a-55f6-48d8-815f-1aa33eca400d][field0]")
  setRadioValue("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field3]")
  setRadioValue("cards[5376a26a-55f6-48d8-815f-1aa33eca400d][field1]")
  setRadioValue("cards[b9d0dbb3-eae1-4e61-8fc9-a37df79df754][field4]")

  setRadioValue(
    "surveysResponses[1701a6ca-98cb-4c30-bc84-6701b0f0280b][responses][field0]"
  )
  setRadioValue("cards[5376a26a-55f6-48d8-815f-1aa33eca400d][field2]")
  setRadioValue("cards[5376a26a-55f6-48d8-815f-1aa33eca400d][field3]")
  setRadioValue(
    "surveysResponses[1701a6ca-98cb-4c30-bc84-6701b0f0280b][responses][field1]"
  )
  setRadioValue(
    "surveysResponses[1701a6ca-98cb-4c30-bc84-6701b0f0280b][responses][field2]"
  )
  setRadioValue("cards[5376a26a-55f6-48d8-815f-1aa33eca400d][field4]")
})
